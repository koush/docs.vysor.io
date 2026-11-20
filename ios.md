---
description: "Setting up iOS mirroring and control over USB with Apple's CoreDevice interface."
---

# iOS Setup

Vysor mirrors and controls iPhone and iPad over USB using Apple's CoreDevice developer interface. No app is required on the device.

## Requirements

- An iPhone or iPad running a supported version of iOS/iPadOS (currently iOS 27).
- The Vysor desktop app.
- A USB cable connecting the device to your computer.
- [Developer Mode](#enable-developer-mode) enabled on the device.

## Enable Developer Mode

1. Connect the device to your computer, unlock it, and tap **Trust** if prompted.
2. On the device, open **Settings → Privacy & Security → Developer Mode** and turn it on.
3. Restart the device when prompted, then unlock it and confirm **Turn On** after the restart.

## Connect Your Device

1. Connect the device to your computer with a USB cable and unlock it.
2. If prompted, tap **Trust** on the device to trust the computer.
3. Select the device in the Vysor device list.
4. On the first connection, Vysor downloads and installs Apple's developer image. This can take a few minutes and requires an internet connection.
5. The device screen appears in the Vysor window. Use your mouse and keyboard to control it.

Control is built in over USB. See [Controlling iOS](/manual/ios-control).

## Notes

- iOS mirroring and control are available in the Vysor desktop app.
- The developer image is signed for the connected device and cached locally after installation.
