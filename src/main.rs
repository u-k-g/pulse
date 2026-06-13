#![no_std]
#![no_main]

use cortex_m::asm::wfe;
use embassy_executor::Spawner;
use embassy_nrf::config::Config;
use embassy_nrf::gpio::{Level, Output, OutputDrive};
use embassy_nrf::power;
use {defmt_rtt as _, panic_probe as _};

#[embassy_executor::main]
async fn main(spawner: Spawner) {
   let _ = spawner;
   let peripherals = embassy_nrf::init(Config::default());

   // nice!nano v2: P0.13 high cuts power to the external VCC rail.
   let _external_vcc_off = Output::new(peripherals.P0_13, Level::High, OutputDrive::Standard);

   power::set_system_off();

   // SYSTEMOFF should not return, but park safely if hardware ever resumes here.
   #[expect(
      clippy::infinite_loop,
      reason = "park here if SYSTEMOFF unexpectedly returns"
   )]
   loop {
      wfe();
   }
}
