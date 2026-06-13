#![no_std]
#![no_main]

use embassy_executor::Spawner;
use embassy_nrf::gpio::{Level, Output, OutputDrive};
use embassy_nrf::power;
use {defmt_rtt as _, panic_probe as _};

#[embassy_executor::main]
async fn main(_spawner: Spawner) {
    let p = embassy_nrf::init(Default::default());

    // nice!nano v2: P0.13 high cuts power to the external VCC rail.
    let _external_vcc_off = Output::new(p.P0_13, Level::High, OutputDrive::Standard);

    power::set_system_off();

    // SYSTEMOFF should not return, but park safely if hardware ever resumes here.
    loop {
        cortex_m::asm::wfe();
    }
}
