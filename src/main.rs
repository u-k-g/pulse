#![no_std]
#![no_main]

use cortex_m::asm::{delay, wfe};
use embassy_executor::Spawner;
use embassy_nrf::config::Config;
use embassy_nrf::gpio::{Level, Output, OutputDrive};
use embassy_nrf::power;
use {defmt_rtt as _, panic_probe as _};

const BLINKS_PER_BURST: u8 = 5;
const BURSTS: u8 = 5;
const FIFTY_MS_AT_64_MHZ: u32 = 3_200_000;
const THREE_HUNDRED_MS_AT_64_MHZ: u32 = 19_200_000;

#[embassy_executor::main]
async fn main(spawner: Spawner) {
   let _ = spawner;
   let peripherals = embassy_nrf::init(Config::default());

   // nice!nano v2: P0.13 high cuts power to the external VCC rail.
   let _external_vcc_off = Output::new(peripherals.P0_13, Level::High, OutputDrive::Standard);
   // nice!nano v2 silkscreen labels 113 and 115 map to nRF GPIOs P1.13 and P1.15.
   let _pin_113_high = Output::new(peripherals.P1_13, Level::High, OutputDrive::Standard);
   let _pin_115_high = Output::new(peripherals.P1_15, Level::High, OutputDrive::Standard);
   let mut status_led = Output::new(peripherals.P0_15, Level::Low, OutputDrive::Standard);

   for _ in 0..BURSTS {
      for _ in 0..BLINKS_PER_BURST {
         status_led.set_high();
         delay(FIFTY_MS_AT_64_MHZ);
         status_led.set_low();
         delay(FIFTY_MS_AT_64_MHZ);
      }

      delay(THREE_HUNDRED_MS_AT_64_MHZ);
   }

   status_led.set_low();
   power::set_system_off();

   #[expect(
      clippy::infinite_loop,
      reason = "park here if SYSTEMOFF unexpectedly returns"
   )]
   loop {
      wfe();
   }
}
