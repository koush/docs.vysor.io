---
description: "Fixes for common Vysor Android problems: device not detected, USB debugging prompts, authorization errors, and black screens."
---

# Android Troubleshooting

## Device Not Detected

If your Android device does not appear in the device list:

1. Restart your phone and restart your computer.
2. Make sure you are using a **USB data cable**. Charge-only cables cannot transfer data.
3. [Enable USB debugging](/android#enable-usb-debugging) on the device.
4. Set the device's USB mode to **PTP** (it is usually MTP or Charge Only).
5. On Windows, install the [Universal ADB Drivers](https://adb.clockworkmod.com/). If that doesn't work, try your manufacturer's drivers.

## USB Debugging Prompt Not Appearing

If no **Allow USB debugging?** prompt appears when you plug the device in:

1. Confirm USB debugging is enabled in Developer Options and the device is unlocked.
2. Revoke and re-grant debugging authorizations: in Developer Options, tap **Revoke USB debugging authorizations**, then reconnect.
3. Try a different USB port or cable, and check the USB mode is **PTP** or **MTP**, not charge-only.

<!-- TODO(verify): support-inbox wording for this issue to be merged in. -->

## ADB Unauthorized

If the device shows as unauthorized, or Vysor reports the device requires authorization:

1. The device is showing (or has shown) the **Allow USB debugging?** dialog — unlock the device and tap **Allow**, ideally with *Always allow from this computer* checked.
2. If the dialog never appears or the error persists, revoke authorizations on the device (**Developer Options → Revoke USB debugging authorizations**) and reconnect.
3. Restart the ADB service by restarting your computer (or the Vysor app on the desktop).

<!-- TODO(verify): support-inbox wording and any platform-specific fixes to be merged in. -->

## Black Screen When Mirroring

If the mirrored Android screen is black:

1. **Restart** your phone and your computer.
2. Open the device settings in the Vysor window and click **Defaults** to apply conservative settings.
3. If Vysor shows a "video issue detected" prompt, try the **Fix** options it offers.
4. Try switching decoders in device settings: the **WebCodecs** decoder requires modern graphics drivers, so update your graphics drivers (especially on Windows) or switch to a different decoder if video fails to display.
