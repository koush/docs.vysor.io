---
description: "Setting up iOS mirroring and control with Apple's developer mode."
---

# iOS Setup

Vysor mirrors and controls iPhone and iPad using Apple's developer mode.

## Requirements

- An iPhone or iPad running a supported version of iOS/iPadOS (currently iOS 27).
- The Vysor desktop app.
- A USB cable for the first connection.
- [Developer Mode](#enable-developer-mode) enabled on the device.
- On Windows, install [Apple Mobile Device Support](https://github.com/koush/AppleMobileDeviceSupport/releases/latest). macOS and Linux need no additional software.

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

After the first USB connection, the device can be switched to wireless mirroring — see [Wireless Connections](/manual/wireless).

## Notes

- iOS mirroring and control are available in the Vysor desktop app.
- The developer image is signed for the connected device and cached locally after installation.
- Camera and microphone access is limited while mirroring a physical device. Quit any apps on the device that use the camera or microphone before connecting. Lower-priority apps such as Camera and Voice Memos may record silence or empty video while mirrored, and launching higher-priority apps such as Phone or FaceTime stops the mirroring session. See Apple's [note on handling camera and microphone access conflicts on physical devices](https://developer.apple.com/documentation/xcode/interacting-with-your-app-in-device-hub#Handle-camera-and-microphone-access-conflicts-on-physical-devices).
