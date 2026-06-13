#!/usr/bin/env nu

const UF2_MAGIC_START0 = 0x0A324655
const UF2_MAGIC_START1 = 0x9E5D5157
const UF2_MAGIC_END = 0x0AB16F30
const UF2_FLAG_FAMILY_ID_PRESENT = 0x00002000
const UF2_PAYLOAD_SIZE = 256
const UF2_BLOCK_SIZE = 512

def le-u32 [value: int] {
    $value | into binary --endian little | bytes at 0..3
}

def zeroes [count: int] {
    if $count <= 0 {
        0x[]
    } else {
        bytes build ...(1..$count | each { 0 })
    }
}

def main [
    input: path
    --base (-b): string
    --family (-f): string
    --output (-o): path
] {
    let base_address = $base | into int
    let family_id = $family | into int
    let data = open --raw $input | into binary
    let data_len = $data | length
    let block_count = (($data_len + $UF2_PAYLOAD_SIZE - 1) // $UF2_PAYLOAD_SIZE)

    let blocks = 0..<$block_count | each {|block_number|
        let offset = $block_number * $UF2_PAYLOAD_SIZE
        let chunk = $data | bytes at $offset..<($offset + $UF2_PAYLOAD_SIZE)
        let padded_chunk = bytes build $chunk (zeroes ($UF2_PAYLOAD_SIZE - ($chunk | length)))

        let header = bytes build (
            le-u32 $UF2_MAGIC_START0
        ) (
            le-u32 $UF2_MAGIC_START1
        ) (
            le-u32 $UF2_FLAG_FAMILY_ID_PRESENT
        ) (
            le-u32 ($base_address + $offset)
        ) (
            le-u32 $UF2_PAYLOAD_SIZE
        ) (
            le-u32 $block_number
        ) (
            le-u32 $block_count
        ) (
            le-u32 $family_id
        )

        let padding_len = $UF2_BLOCK_SIZE - ($header | length) - ($padded_chunk | length) - 4
        bytes build $header $padded_chunk (zeroes $padding_len) (le-u32 $UF2_MAGIC_END)
    }

    $blocks | bytes collect | save --force --raw $output
    print $"Wrote ($output) \((ls $output | get size.0)\)"
}
