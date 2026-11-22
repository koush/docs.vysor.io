---
description: "Troubleshooting Vysor: Android and iOS device setup, licensing, and desktop graphics issues."
---

# Troubleshooting

- [Android Troubleshooting](/troubleshooting/android) — device detection, USB debugging, authorization, and black screens.
- [iOS Troubleshooting](/troubleshooting/ios) — device detection, Trust and Developer Mode, Apple Mobile Device Support, developer image installs, and black screens.

## License Not Recognized

Log in to Vysor with the same account used for the purchase; licenses are automatically recovered from all license sources on login ([Pro](/pro#managing-your-license)).

- Verify your subscription has not expired.
- Purchases are tied to the logged-in account. If you have multiple accounts, log out and sign in with the purchasing account.

## Windows Graphics Crash

A crash on Windows can occur on systems with both Intel integrated graphics and a discrete GPU (NVIDIA or AMD), when the app runs on the wrong GPU:

- **Windows 10/11:** Settings → System → Display → Graphics, add the Vysor desktop app and set it to **High Performance**.
- **NVIDIA:** NVIDIA Control Panel → 3D Settings → Manage 3D Settings → Program Settings, and set the preferred graphics processor to the high performance NVIDIA processor.
- **AMD:** Radeon Settings → Power → Switchable Graphics Application Settings, and add the app to High Performance mode.

## Bug Reports

Bugs are tracked on the [issue tracker](https://github.com/koush/vysor.io/issues).
