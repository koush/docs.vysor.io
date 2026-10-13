---
description: "Setting up iOS mirroring with the Vysor iOS app over USB, controlling iOS with the Vysor Dongle, and calibrating the control cursor."
---

# iOS Setup

iOS device mirroring uses the [Vysor](https://apps.apple.com/us/app/vysor/id1577813680) iOS app and works over USB.

iOS mirroring is **view-only**: the screen is streamed and audio can be mirrored, but iOS does not allow an app to inject touch input. As a companion feature, Vysor can control the device by pairing with it as a **Bluetooth keyboard and mouse**, using a [Vysor Dongle](#vysor-dongle) — an inexpensive board flashed with Vysor firmware. This is optional; without a dongle, mirroring is view-only. See [How Vysor Works](/architecture#ios).

## Requirements

- An iPhone or iPad running a supported version of iOS/iPadOS.
- The [Vysor](https://apps.apple.com/us/app/vysor/id1577813680) app installed from the App Store.
- A USB cable connecting the device to your computer.
- To control the device (optional): a [Vysor Dongle](#vysor-dongle), described below.

## Connect Your Device

1. Install the **Vysor** app on your device from the App Store.
2. Open the app and grant it permission to record the screen when prompted. iOS requires this permission for screen mirroring.
3. Connect your device to your computer with a USB cable.
4. If prompted, tap **Trust** on your device to trust the computer. Ensure the device is unlocked.
5. Your device appears in the Vysor device list. Select it to begin mirroring.

## Controlling iOS (Optional)

With a dongle, Vysor can also control the iOS device: Vysor pairs with the device as a Bluetooth keyboard and mouse, and moves the iOS **pointer** (the assistive-input cursor that iOS shows on screen). Vysor translates your mouse movements into that pointer's motion, and iOS interprets the input as assistive-input. Follow the in-app prompts to pair the device and [calibrate the cursor](#calibrating-the-control-cursor).

## Vysor Dongle

The Vysor Dongle is ordinary, easy-to-buy hardware: a small ESP32 or NRF52840 development board that Vysor flashes with its own firmware. The firmware makes the board appear to the iOS device as a Bluetooth keyboard and mouse; Vysor then drives the iOS pointer through it.

A dongle is required to control an iOS device. Without one, Vysor operates in mirroring-only mode.

### Dongle Types

#### ESP32 <!-- TODO(price): keep, drop, or update price guidance per review -->

- Cheaper ($7–$10)
- Flashed automatically from within the Vysor desktop app over USB
- Requires a [USB-to-UART driver installation on Windows](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)

#### NRF52840

- Smaller, no driver necessary
- ~$10 + shipping
- Must be flashed manually (instructions below)

### Recommended Hardware

These boards have been tested and confirmed to work with Vysor. Note that products change or become unavailable over time — verify the exact model before buying.

| Board | Firmware | Connection | Price |
|---|---|---|---|
| [Nordic NRF52840 Dongle](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dongle) | Flash manually | Plugs into USB-A | $10 + shipping |
| [VKLSVAN ESP32](https://www.amazon.com/gp/product/B07T6J3PXZ) | Flashed by Vysor | Micro-USB cable | $8 |
| [JZK ESP32](https://www.amazon.com/gp/product/B071JR9WS9) | Flashed by Vysor | Micro-USB cable | $9 |
| [HILetGo ESP32 (pinless)](https://www.amazon.com/gp/product/B077KJNVFP) | Flashed by Vysor | Micro-USB cable | $13 |

### First-Time Setup

1. Plug the dongle into your computer. In the device list, Vysor shows a **"{name} Vysor Dongle found"** message (with a **Flash Update** button if the firmware needs updating).
2. ESP32 boards are flashed by Vysor automatically when needed — follow the on-screen progress.<!-- Windows users must install the ESP32 driver linked above first. -->
3. Pair your iOS device to the dongle over Bluetooth: open **Bluetooth Settings** on the iOS device and connect to the dongle (the app shows a pairing request code to confirm). This only needs to be done once; future connections are automatic.

### Manual Flashing

#### NRF52840

Plug in the **Nordic dongle** and press the **reset button** (the sideways button next to the main switch) to enter the bootloader. Flash the [hex flash file](https://app.vysor.io/native/dongle/nrf52840dongle_nrf52840/zephyr.hex) using [nRF Connect Programmer](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-desktop/Download).

#### ESP32

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

## Calibrating the Control Cursor

The pointer movement must be calibrated to match your device model. Vysor does most of this automatically (it recognizes device models and applies known calibration values) and prompts for the final calibration on first use:

1. With the device connected, Vysor shows: *"To calibrate your mouse, click the Calibrate button then click the location of the iOS cursor after it moves. Repeat this the prior two steps until calibration is complete. Assistive Touch must be enabled for the cursor to be visible."*
2. Click **Calibrate**. The cursor moves to a spot on the device screen; click where it stops.
3. Repeat until Vysor reports that calibration is complete.

The cursor is driven through the device's accessibility features, so **AssistiveTouch must be enabled** on the iOS device for the cursor to be visible ([Settings → Accessibility → Touch → AssistiveTouch](https://support.apple.com/guide/iphone/assistivetouch-iph3e32e842/ios)).

Related settings (device settings → Mouse panel):
- **Track Desktop Mouse:** the iOS touch indicator tracks your mouse, and the desktop pointer is hidden.
- **Lock Mouse:** also locks mouse input to the Vysor window while in use.
- **Reset Mouse Calibration:** restores default calibration values; manual per-axis calibration values are also available there.

If the pointer drifts or clicks land in the wrong place, reset the calibration and run it again.