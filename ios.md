---
description: "Setting up iOS mirroring with the Vysor iOS app over USB, plus optional Bluetooth control via the Vysor Dongle and cursor calibration."
---

# iOS Setup

iOS device mirroring uses the [Vysor](https://apps.apple.com/us/app/vysor/id1577813680) iOS app and works over USB.

iOS mirroring is **view-only**: Vysor streams the device's screen (and optionally its audio) to your computer. iOS does not allow apps to inject touch input, so control is provided by a separate, optional Bluetooth connection described below. See [How Vysor Works](/architecture#ios).

## Requirements

- An iPhone or iPad running a supported version of iOS/iPadOS.
- The [Vysor](https://apps.apple.com/us/app/vysor/id1577813680) app installed from the App Store.
- A USB cable connecting the device to your computer.

## Connect Your Device

1. Install the **Vysor** app on your device from the App Store.
2. Open the app and grant it permission to record the screen when prompted. iOS requires this permission for screen mirroring.
3. Connect your device to your computer with a USB cable.
4. If prompted, tap **Trust** on your device to trust the computer. Ensure the device is unlocked.
5. Your device appears in the Vysor device list. Select it to begin mirroring.

## Controlling iOS (Optional)

Vysor can also control the iOS device by pairing with it as a **Bluetooth keyboard and mouse**. This requires a [Vysor Dongle](/dongle) — an inexpensive board flashed with Vysor firmware. Without a dongle, mirroring is view-only.

During your first iOS connection, Vysor walks you through the Bluetooth pairing: open **Bluetooth Settings** on the iOS device and connect to the dongle. A pairing code is shown to confirm. Pairing is only needed once.

Control works by moving the iOS **pointer** (the assistive-input cursor that iOS shows on screen). Vysor translates your mouse movements into that pointer's motion.

## Calibrating the Control Cursor

The pointer movement must be calibrated to match your device model. Vysor does most of this automatically (it recognizes device models and applies known calibration values) and prompts for the final calibration on first use:

1. With the device connected, Vysor shows: *"To calibrate your mouse, click the Calibrate button then click the location of the iOS cursor after it moves. Repeat this the prior two steps until calibration is complete. Assistive Touch must be enabled for the cursor to be visible."*
2. Click **Calibrate**. The cursor moves to a spot on the device screen; click where it stops.
3. Repeat until Vysor reports that calibration is complete.

The cursor is driven through the device's accessibility features, so **AssistiveTouch must be enabled** on the iOS device for the cursor to be visible ([Settings → Accessibility → Touch → AssistiveTouch](/ios#calibrating-the-control-cursor)).

Related settings (device settings → Mouse panel):
- **Track Desktop Mouse:** the iOS touch indicator tracks your mouse, and the desktop pointer is hidden.
- **Lock Mouse:** also locks mouse input to the Vysor window while in use.
- **Reset Mouse Calibration:** restores default calibration values; manual per-axis calibration values are also available there.

If the pointer drifts or clicks land in the wrong place, reset the calibration and run it again.