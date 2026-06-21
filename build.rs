use std::env;
use std::fs::File;
use std::io::Write as _;
use std::path::PathBuf;
use std::process::Command;

fn main() {
   let out = &PathBuf::from(env::var_os("OUT_DIR").unwrap());
   File::create(out.join("memory.x"))
      .unwrap()
      .write_all(include_bytes!("memory.x"))
      .unwrap();
   let alarm_delay_seconds = alarm_delay_seconds();
   File::create(out.join("alarm_delay.rs"))
      .unwrap()
      .write_all(format!("const ALARM_DELAY_SECONDS: u64 = {alarm_delay_seconds};\n").as_bytes())
      .unwrap();

   println!("cargo:rustc-link-search={}", out.display());
   println!("cargo:rerun-if-changed=memory.x");
   println!("cargo:rerun-if-env-changed=ALARM_TIME");
   println!("cargo:rerun-if-env-changed=BUILD_ALARM_NOW");
   println!("cargo:rerun-if-env-changed=BUILD_ALARM_LOCAL_TIME");
   println!("cargo:rustc-link-arg-bins=--nmagic");
   println!("cargo:rustc-link-arg-bins=-Tlink.x");
   println!("cargo:rustc-link-arg-bins=-Tdefmt.x");
}

fn alarm_delay_seconds() -> u32 {
   let Some(alarm_time) = non_empty_env("ALARM_TIME") else {
      return 0;
   };

   let target_seconds = parse_time(&alarm_time, "ALARM_TIME");
   let now = non_empty_env("BUILD_ALARM_LOCAL_TIME").unwrap_or_else(current_local_time);
   let now_seconds = parse_time(&now, "BUILD_ALARM_LOCAL_TIME");
   let raw_delay = if target_seconds > now_seconds {
      target_seconds - now_seconds
   } else {
      target_seconds + 24_u32 * 60_u32 * 60_u32 - now_seconds
   };
   let delay = raw_delay.saturating_sub(1);

   println!("cargo:warning=Alarm target {alarm_time}, build time {now}; waiting {delay} seconds.");

   delay
}

fn non_empty_env(name: &str) -> Option<String> {
   let value = env::var(name).ok()?;

   if value.is_empty() { None } else { Some(value) }
}

fn current_local_time() -> String {
   let output = Command::new("date")
      .arg("+%H:%M:%S")
      .output()
      .expect("failed to run date to get local build time");

   assert!(
      output.status.success(),
      "date failed while getting local build time"
   );

   String::from_utf8(output.stdout)
      .expect("date output was not valid UTF-8")
      .trim()
      .to_owned()
}

fn parse_time(value: &str, name: &str) -> u32 {
   let mut parts = value.split(':');
   let hour = parts
      .next()
      .unwrap_or_default()
      .parse::<u32>()
      .unwrap_or_else(|_| panic!("{name} must use HH:MM or HH:MM:SS"));
   let minute = parts
      .next()
      .unwrap_or_default()
      .parse::<u32>()
      .unwrap_or_else(|_| panic!("{name} must use HH:MM or HH:MM:SS"));
   let second = parts.next().map_or(0_u32, |part| {
      part
         .parse::<u32>()
         .unwrap_or_else(|_| panic!("{name} must use HH:MM or HH:MM:SS"))
   });

   if parts.next().is_some()
      || !(0_u32..=23_u32).contains(&hour)
      || !(0_u32..=59_u32).contains(&minute)
      || !(0_u32..=59_u32).contains(&second)
   {
      panic!("{name} must use HH:MM or HH:MM:SS");
   }

   hour * 60_u32 * 60_u32 + minute * 60_u32 + second
}
