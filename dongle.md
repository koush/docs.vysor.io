---
description: "The Vysor Dongle is an off-the-shelf microcontroller (ESP32 or NRF52840) flashed with Vysor firmware that provides Bluetooth keyboard and mouse control for iOS devices."
---

# Vysor Dongle

iOS does not allow apps to inject touch input. Vysor can control an iOS device by pairing to it as a **Bluetooth keyboard and mouse**, and the Vysor Dongle is the hardware that provides that Bluetooth connection on machines that need it.

The dongle is ordinary, easy-to-buy hardware: a small ESP32 or NRF52840 development board that Vysor flashes with its own firmware. The firmware makes the board appear to the iOS device as a Bluetooth keyboard and mouse; Vysor then drives the iOS pointer through it. See [How Vysor Works](/architecture#ios) for how this fits together with mirroring, and [iOS Setup](/ios#calibrating-the-control-cursor) for the calibration procedure.

## Do You Need a Dongle?

Yes, to control an iOS device. Without a dongle, Vysor operates in mirroring-only mode.

## Dongle Types

### ESP32 <!-- TODO(price): keep, drop, or update price guidance per review -->

- Cheaper ($7–$10)
- Flashed automatically from within the Vysor desktop app over USB
- Requires a [USB-to-UART driver installation on Windows](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)

### NRF52840

- Smaller, no driver necessary
- ~$10 + shipping
- Must be flashed manually (instructions below)

## Recommended Hardware

These boards have been tested and confirmed to work with Vysor. Note that products change or become unavailable over time — verify the exact model before buying.

| Board | Firmware | Connection | Price |
|---|---|---|---|
| [Nordic NRF52840 Dongle](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dongle) | Flash manually | Plugs into USB-A | $10 + shipping |
| [VKLSVAN ESP32](https://www.amazon.com/gp/product/B07T6J3PXZ) | Flashed by Vysor | Micro-USB cable | $8 |
| [JZK ESP32](https://www.amazon.com/gp/product/B071JR9WS9) | Flashed by Vysor | Micro-USB cable | $9 |
| [HILetGo ESP32 (pinless)](https://www.amazon.com/gp/product/B077KJNVFP) | Flashed by Vysor | Micro-USB cable | $13 |

## First-Time Setup

1. Plug the dongle into your computer. In the device list, Vysor shows a **"{name} Vysor Dongle found"** message (with a **Flash Update** button if the firmware needs updating).
2. ESP32 boards are flashed by Vysor automatically when needed — follow the on-screen progress.<!-- Windows users must install the ESP32 driver linked above first. -->
3. Pair your iOS device to the dongle over Bluetooth: open **Bluetooth Settings** on the iOS device and connect to the dongle (the app shows a pairing request code to confirm). This only needs to be done once; future connections are automatic.

Vysor can always mirror iOS without a dongle; control requires one.

## Manual Flashing

### NRF52840

Plug in the **Nordic dongle** and press the **reset button** (the sideways button next to the main switch) to enter the bootloader. Flash the [hex flash file](https://app.vysor.io/native/dongle/nrf52840dongle_nrf52840/zephyr.hex) using [nRF Connect Programmer](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-desktop/Download).

### ESP32

Vysor flashes ESP32 boards automatically, in the app. If that fails, the board can be flashed with [esptool](https://github.com/espressif/esptool) using these images:

- [bootloader.bin](https://app.vysor.io/native/dongle/esp32/bootloader.bin) at offset `0x1000`
- [partition-table.bin](https://app.vysor.io/native/dongle/esp32/partition-table.bin) at offset `0x8000`
- [vysor-dongle-esp32.bin](https://app.vysor.io/native/dongle/esp32/vysor-dongle-esp32.bin) at offset `0x10000`

```
esptool -p [serial port, e.g. /dev/cu.usbserial-0001 or COM4] -b 460800 \
  --before default_reset --after hard_reset --chip esp32 write_flash \
  --flash_mode dio --flash_size detect --flash_freq 40m \
  0x1000 bootloader.bin 0x8000 partition-table.bin 0x10000 vysor-dongle-esp32.bin
```