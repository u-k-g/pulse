MEMORY
{
  /*
   * nice!nano v2 ships with the Adafruit nRF52 bootloader.
   * Its S140 v6 layout expects UF2 applications at 0x26000.
   */
  FLASH : ORIGIN = 0x00026000, LENGTH = 872K
  RAM : ORIGIN = 0x20000000, LENGTH = 256K
}
