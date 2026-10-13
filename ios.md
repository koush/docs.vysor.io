---
description: "Setting up iOS mirroring with the Vysor iOS app over USB."
---

# iOS Setup

iOS device mirroring uses the [Vysor](https://apps.apple.com/us/app/vysor/id1577813680) iOS app and works over USB.

iOS mirroring is **view-only**: the screen is streamed and audio can be mirrored, but iOS does not allow an app to inject touch input. Control is available as an optional companion feature using a **Vysor Dongle** — see [Controlling iOS](/manual/ios-control) and [How Vysor Works](/architecture#ios).

## Requirements

- An iPhone or iPad running a supported version of iOS/iPadOS.
- The [Vysor](https://apps.apple.com/us/app/vysor/id1577813680) app installed from the App Store.
- A USB cable connecting the device to your computer.
- To control the device (optional): a [Vysor Dongle](/manual/ios-control#vysor-dongle).

## Connect Your Device

1. Install the **Vysor** app on your device from the App Store.
2. Open the app and grant it permission to record the screen when prompted. iOS requires this permission for screen mirroring.
3. Connect your device to your computer with a USB cable.
4. If prompted, tap **Trust** on your device to trust the computer. Ensure the device is unlocked.
5. Your device appears in the Vysor device list. Select it to begin mirroring.