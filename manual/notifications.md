---
description: "Forwarding Android notifications to your desktop with Vysor: enabling Desktop Notifications, the companion app requirement, and clicking a notification to open it on the device."
---

# Desktop Notifications

While a device is connected, its Android notifications can be forwarded to your desktop as system notifications.

## Enabling

Toggle **Desktop Notifications** under **Window Settings** in the [device settings](/manual/customize-window#settings). Vysor also offers to enable notifications the first time you connect a device.

Desktop notifications require the [Vysor Android app](https://github.com/koush/docs.vysor.io/releases/latest/download/Vysor-release.apk) on the device — Vysor grants it notification access automatically over ADB; there is nothing to configure on the device.

## Using

Forwarded notifications appear on your desktop with the app's icon. **Click a notification to open it** — Vysor taps the corresponding notification on the device, launching the app that posted it.