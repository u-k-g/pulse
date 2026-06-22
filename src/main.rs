#![no_std]
#![no_main]

use cortex_m::asm::wfe;
use embassy_executor::Spawner;
use embassy_nrf::config::Config;
use embassy_nrf::gpio::{Level, Output, OutputDrive};
use embassy_nrf::power;
use embassy_time::{Duration, block_for};
use {defmt_rtt as _, panic_probe as _};

include!(concat!(env!("OUT_DIR"), "/alarm_delay.rs"));

const ALARM_REPEATS: u8 = 64;
const STUTTER_PULSES_PER_REPEAT: u8 = 5;
const STUTTER_OFF_MS: u64 = 20;
const STUTTER_ON_MS: u64 = 50;
const SUSTAINED_PERIOD_MS: u64 = 120;

#[embassy_executor::main]
async fn main(spawner: Spawner) {
   let _ = spawner;
   let peripherals = embassy_nrf::init(Config::default());

   // nice!nano v2: P0.13 low cuts power to the external 3.3V VCC rail.
   let _external_vcc_on = Output::new(peripherals.P0_13, Level::High, OutputDrive::Standard);
   // nice!nano v2 silkscreen labels map to DRV8833 inputs:
   // P1.11/P0.10 -> IN1/IN2, 022/024 -> IN3/IN4.
   let mut drv_sleep = Output::new(peripherals.P1_00, Level::Low, OutputDrive::Standard);
   let mut drv_in1 = Output::new(peripherals.P1_11, Level::Low, OutputDrive::Standard);
   let _drv_in2 = Output::new(peripherals.P0_10, Level::Low, OutputDrive::Standard);
   let mut drv_in3 = Output::new(peripherals.P0_22, Level::Low, OutputDrive::Standard);
   let _drv_in4 = Output::new(peripherals.P0_24, Level::Low, OutputDrive::Standard);

   block_for(Duration::from_secs(ALARM_DELAY_SECONDS));
   drv_sleep.set_high();
   delay_ms(1);

   for _ in 0..ALARM_REPEATS {
      for _ in 0..STUTTER_PULSES_PER_REPEAT {
         motors_off(&mut drv_in1, &mut drv_in3);
         delay_ms(STUTTER_OFF_MS);
         motors_on(&mut drv_in1, &mut drv_in3);
         delay_ms(STUTTER_ON_MS);
      }

      motors_off(&mut drv_in1, &mut drv_in3);
      delay_ms(SUSTAINED_PERIOD_MS);
      motors_on(&mut drv_in1, &mut drv_in3);
   }

   motors_off(&mut drv_in1, &mut drv_in3);
   drv_sleep.set_low();
   power::set_system_off();

   #[expect(
      clippy::infinite_loop,
      reason = "park here if SYSTEMOFF unexpectedly returns"
   )]
   loop {
      wfe();
   }
}

fn motors_on(drv_in1: &mut Output<'_>, drv_in3: &mut Output<'_>) {
   drv_in1.set_high();
   drv_in3.set_high();
}

fn motors_off(drv_in1: &mut Output<'_>, drv_in3: &mut Output<'_>) {
   drv_in1.set_low();
   drv_in3.set_low();
}

fn delay_ms(ms: u64) {
   block_for(Duration::from_millis(ms));
}
