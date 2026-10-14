---
description: "The Vysor device window: title bar buttons for screenshots, recording, and audio, the navigation bar, window options, and the device settings panels."
---

# Device Window

The mirrored device is shown in the Vysor device window. A title bar sits above the screen, an optional navigation bar below it, and the device settings are opened from the title bar menu.

## Title Bar

By default the title bar contains **Take Screenshot**, **Record Screen**, **Audio Mirroring** (toggle), and **Full Screen** buttons, plus a menu with **Wireless Mode**, **Rotate Screen**, **Screen On/Off**, **Copy Logcat**, and **Settings**. Clicking the device name in the title bar switches between the device's displays on devices that have more than one.

The title bar hides when not in use; hover the top of the window to reveal it.

The buttons themselves can be changed — see [Customizing Vysor](/manual/customize#title-bar-buttons).

## Navigation Bar

The navigation bar along the bottom of the window provides **Back**, **Home**, and **Recent Tasks** buttons. If your Android device already has a built-in navigation bar, Vysor's can be turned off with the **Navigation Bar** setting. The buttons can also be customized — see [Customizing Vysor](/manual/customize#navigation-bar-buttons).

## Always On Top

Keep the Vysor device window on top of other windows. Desktop app only.

## Pin Title Bar

Toggle this to make the title bar stay pinned, or to have it disappear when not in use.

## Settings

Open the settings dialog with **Settings** in the title bar menu. Settings are per-device, organized into three panels:

### Window Settings

- **Window Title:** set a custom title for the device window.
- **When device is connected:** show a notification, connect automatically, or do nothing (desktop app only).
- **When screenshot is taken:** show a preview, save to a file, or copy to the clipboard — see [Screenshots](/manual/screenshots).
- **Pin Title Bar**, **Navigation Bar**, and **Always On Top:** as described above.
- **International Keyboard:** send characters from non-English keyboards directly, and hide the soft keyboard on the device. Uses the input method from the [Vysor Android app](https://github.com/koush/docs.vysor.io/releases/latest/download/Vysor-release.apk).
- **Desktop Notifications:** forward Android notifications to your desktop — see [Desktop Notifications](/manual/notifications).

### Image Quality

Bitrate, resolution, decoder, and quality presets — see [Video Quality](/manual/video-quality) for tuning tips. **Force H264 Baseline Profile** can fix black screens on some devices.

### Device Settings

- **Display Power:** dim or turn off the device's display while using Vysor.
- **Web Video Stream:** a video stream URL for broadcast software — see [Video Broadcasting (OBS)](/manual/obs).
- **Virtual Camera** (Linux): expose the device as a system camera — see [Linux Installation](/linux).