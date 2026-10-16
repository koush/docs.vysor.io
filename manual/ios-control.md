---
description: "Controlling an iOS device with Vysor: the Vysor Dongle (ESP32 and NRF52840 hardware, flashing, and pairing), and pointer control."
---

# Controlling iOS

iOS mirroring is **view-only**: the screen is streamed and audio can be mirrored, but iOS does not allow an app to inject touch input. As a companion feature, Vysor can control the device by pairing with it as a **Bluetooth keyboard and mouse**, using a [Vysor Dongle](#vysor-dongle) — an inexpensive board flashed with Vysor firmware. This is optional; without a dongle, mirroring is view-only. See [How Vysor Works](/architecture#ios).

A dongle is required to control an iOS device. With one, Vysor pairs with the device as a Bluetooth keyboard and mouse, and moves the iOS **pointer** (the assistive-input cursor that iOS shows on screen). Vysor translates your mouse movements into that pointer's motion, and iOS interprets the input as assistive-input. Follow the in-app prompts to pair the device.

## Vysor Dongle

The Vysor Dongle is ordinary, easy-to-buy hardware: a small ESP32 or NRF52840 development board that Vysor flashes with its own firmware. The firmware makes the board appear to the iOS device as a Bluetooth keyboard and mouse; Vysor then drives the iOS pointer through it.

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

## Nordic NRF52840

Plug in the **Nordic dongle** and press the **reset button** (the sideways button next to the main switch) to enter the bootloader. Flash the [hex flash file](https://app.vysor.io/native/dongle/nrf52840dongle_nrf52840/zephyr.hex) using [nRF Connect Programmer](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-desktop/Download).

## Makerdiary nRF52840

1. Download the [Makerdiary UF2 firmware](https://app.vysor.io/native/dongle/nrf52840_mdk_dongle/zephyr.uf2).
2. Unplug the dongle. Hold its button while plugging it back into your computer, then release the button. The bootloader LED turns green. If the button is configured as RESET, you can also enter the bootloader by pressing it twice within 500 ms while plugged in.
3. A USB drive named **UF2BOOT** or **MDK-DONGLE** appears, depending on the bootloader version. Its `INFO_UF2.TXT` file identifies the board as **nRF52840 MDK USB Dongle**. If the device still appears only as **Vysor NRF52840** with no USB drive, it is running the application; try entering the bootloader again.
4. Copy `zephyr.uf2` onto that drive. The drive may disappear as the dongle automatically reboots. If it does not reboot automatically after copying finishes, unplug and reconnect it.
5. Open Vysor and pair the dongle with your iOS device. After upgrading older firmware, **forget the existing Bluetooth pairing and pair again** so iOS loads the new mouse descriptor.

See also [Makerdiary's UF2 flashing guide](https://wiki.makerdiary.com/nrf52840-mdk-usb-dongle/programming/uf2boot/).

## ESP32

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

## Pointer Control

The mouse maps directly onto the iOS pointer: where you point in the Vysor window is where the iOS cursor lands on the device screen.

The cursor is driven through the device's accessibility features, so **AssistiveTouch must be enabled** on the iOS device for the cursor to be visible ([Settings → Accessibility → Touch → AssistiveTouch](https://support.apple.com/guide/iphone/assistivetouch-iph3e32e842/ios)). The on-screen AssistiveTouch menu can be hidden in the AssistiveTouch settings; pointer control continues to work with the menu hidden.

Related settings (device settings → Mouse panel):
- **Lock Mouse:** locks mouse input to the Vysor window while in use.
