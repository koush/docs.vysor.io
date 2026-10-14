---
description: "Setting up an Android device for mirroring with Vysor: enabling USB debugging and connecting over USB."
---

# Android Setup

Mirroring an Android device requires the device to expose the [ADB](https://developer.android.com/tools/adb) debugging interface.

## Enable USB Debugging

1. Open **Settings** on your Android device.
2. Scroll to **About phone** (or **About device**) and tap **Build number** seven times to enable Developer Options.
3. Return to **Settings** → **System** → **Developer options**.
4. Enable **USB debugging**.

## Connect Your Device

1. Plug your device into your computer with a USB cable.
2. Vysor will detect the device and list it in the device list.
3. If this is the first connection, your device will show an **Allow USB debugging?** prompt. Tap **Allow** (optionally with *Always allow from this computer* checked).

Select the device in the device list to begin mirroring. Your device screen appears instantly in the Vysor window and you can control it with your mouse and keyboard.

Once set up over USB, a device can also be switched to [wireless mirroring](/manual/wireless), and per-device settings are available while mirroring — see [Settings](/manual/customize-window#settings).