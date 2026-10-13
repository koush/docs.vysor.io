# Troubleshooting

## Device Not Detected

If your Android device does not appear in the device list:

1. Restart your phone and restart your computer.
2. Make sure you are using a **USB data cable**. Charge-only cables cannot transfer data.
3. [Enable USB debugging](/android#enable-usb-debugging) on the device.
4. Set the device's USB mode to **PTP** (it is usually MTP or Charge Only).
5. On Windows, install the [Universal ADB Drivers](https://adb.clockworkmod.com/). If that doesn't work, try your manufacturer's drivers.

For iOS devices, ensure the device is unlocked, you have tapped **Trust**, and the Vysor iOS app has been granted screen recording permission.

## Black or Blank Screen

If the mirrored Android screen is black:

1. **Restart** your phone and your computer.
2. Open the device settings in the Vysor window and click **Defaults** to apply conservative settings.
3. If Vysor shows a "video issue detected" prompt, try the **Fix** options it offers.
4. Try switching the decoder in the device settings: the **WebCodecs** decoder requires modern graphics drivers, so update your graphics drivers (especially on Windows) or switch to the **Native** decoder if video fails to display.

## License Not Recognized

Log in to Vysor with the same account used for the purchase; licenses are automatically recovered from all license sources on login.

- Verify your subscription has not expired.
- Purchases are tied to the logged-in account. If you have multiple accounts, log out and sign in with the purchasing account.

## Wrong Account

If you are logged into the wrong account, log out of Vysor and sign in again with the correct Google or Apple account. Your devices and settings are stored locally and will still be there after logging back in.

## Windows Graphics Crash

A crash on Windows can occur on systems with both Intel integrated graphics and a discrete GPU (NVIDIA or AMD), when the app is run on the wrong GPU:

- **Windows 10/11:** Settings → System → Display → Graphics, add the Vysor desktop app and set it to **High Performance**.
- **NVIDIA:** NVIDIA Control Panel → 3D Settings → Manage 3D Settings → Program Settings, and set the preferred graphics processor to the high performance NVIDIA processor.
- **AMD:** Radeon Settings → Power → Switchable Graphics Application Settings, and add the app to High Performance mode.

## Bug Reports

Bugs are tracked on the [Vysor issue tracker](https://github.com/koush/vysor.io/issues).