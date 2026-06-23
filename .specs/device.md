# Wrist-Worn Wake Device

## Intended End Result / Desired Outcome

Build a wrist-worn device whose primary job is to wake the wearer with aggressive physical vibration. The product should feel like a serious consumer wearable, in the same quality class as a Fitbit, Whoop, Apple Watch, or Garmin device. No part of the finished device should feel like a hobby prototype.

The device is alarm-first. The current product is a sealed, headless wrist-worn alarm device with strong vibration, phone-based setup, and a magnetic contact-based charging interface.

Maximum outer envelope is 34.7 mm long x 24 mm wide x 10.6 mm tall. Preferred target envelope is about 10% smaller: roughly 31.2 mm long x 21.6 mm wide x 9.5 mm tall, if the electronics, battery, motor, sealing, and charger interface can fit without compromising the wake vibration strength.

The device must:

- Be worn on the wrist.
- Wake the wearer using very strong vibration, optimized for waking effectiveness rather than premium-feeling haptics.
- Use the same general alarm behavior pattern as high-quality wrist-worn devices that support vibration alarms, balancing reliability, battery life, and setup simplicity.
- Use BLE as the main phone communication path.
- Be hackable: a developer must be able to modify firmware and upload it to the device.
- Use a sealed, waterproof-friendly charging/programming interface instead of USB-C on the wearable body.
- Use a premium magnetic pin/pad/contact charging interface inspired by MacBook MagSafe: a clean metal-faced cable/dock end with recessed spring contacts and protected alignment geometry.
- Have one simple physical button.

## Product Priorities

- Wake-up strength matters more than refined haptic feel.
- Use a vibration approach that feels forceful enough to wake the wearer, even if it feels less refined than premium smartwatch haptics.
- The wearable body should stay sealed and clean.
- Charging should feel like a polished consumer product.
- The magnetic charger should hide the spring contacts in a recessed, premium-feeling connector head rather than looking like exposed hobby pogo pins.
- Firmware upload should be doable by a developer using the physical dock/cable path.
- The device should stay simple and focused.

## Open Product Decisions

- Exact battery life target.
- Exact magnetic charger/dock physical geometry.
