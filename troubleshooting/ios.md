---
description: "Fixes for common Vysor iOS problems: device not detected, Trust and Developer Mode, Apple Mobile Device Support on Windows, developer image installs, and black screens."
---

# iOS Troubleshooting

## Device Not Detected

If your iPhone or iPad does not appear in the device list:

1. Unlock the device and reconnect the USB cable.
2. Use a **USB data cable** and, if possible, a direct USB port rather than a hub or adapter.
3. Tap **Trust** on the device if prompted.
4. Make sure [Developer Mode](/ios#enable-developer-mode) is enabled.
5. Make sure the device is running a supported iOS version (currently iOS 27). Update Vysor if the device is newer.
6. On Windows, install [Apple Mobile Device Support](#apple-mobile-device-support-on-windows). macOS and Linux need no additional software.

## Apple Mobile Device Support on Windows

Windows requires Apple Mobile Device Support to connect to iOS devices:

1. Download the latest `AppleMobileDeviceSupport64.msi` from the [releases page](https://github.com/koush/AppleMobileDeviceSupport/releases/latest).
2. Run the MSI and complete the installer.
3. Reconnect the iPhone or iPad.

If the device still does not appear, open **Services** on Windows and confirm **Apple Mobile Device Service** is running. If it is not, start it or restart Windows and reconnect the device.

## Trust Prompt Does Not Appear

1. Unlock the device and reconnect the USB cable.
2. If the computer was previously denied, reset trust on the device: **Settings → General → Transfer or Reset iPhone → Reset → Reset Location & Privacy**. Then reconnect and tap **Trust**.
3. Try a different USB cable or port.

## Developer Mode Not Available

Developer Mode appears after the device has been connected and trusted by a computer:

1. Connect the device over USB and tap **Trust**.
2. Open **Settings → Privacy & Security → Developer Mode**.
3. Turn it on, restart the device, unlock it, and confirm **Turn On**.

## Developer Image Install Fails

On the first connection, Vysor downloads and installs Apple's developer image. If this fails:

- Keep the device unlocked and connected; the install can take several minutes.
- Check the computer's internet connection.
- Reconnect the device and try again.
- Confirm the device is running a supported iOS version (currently iOS 27).
- If Vysor reports that the developer image is already installed but the required services are unavailable, restart the device and Vysor, then reconnect.

## Black Screen When Mirroring

If the mirrored iOS screen is black:

1. Restart the iPhone or iPad and your computer.
2. Reconnect the USB cable, unlock the device, and open it in Vysor again.
3. If the device is connected wirelessly, try USB to confirm it mirrors.
4. Open the device settings and try a different decoder.
