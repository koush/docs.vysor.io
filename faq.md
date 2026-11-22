---
description: "Frequently asked questions about Vysor: root requirements, safety, licensing, and device support."
---

# FAQ

## Does Vysor require root?

No. Neither platform requires root or a jailbreak.

- **Android:** enable [USB debugging](/android#enable-usb-debugging) in Developer options. USB debugging is an Android-only setting and is the whole requirement.
- **iOS:** enable [Developer Mode](/ios#enable-developer-mode) on the device.

## Is Vysor safe to use?

Vysor uses the developer access you explicitly enable on the device:
- You enable USB debugging on Android or Developer Mode on iOS, and approve or trust each computer on the device.
- On Android, Vysor installs its companion app automatically; the mirroring service runs only while Vysor is connected. On iOS, Vysor installs Apple's developer image but no app.
- Android mirroring requires no root, and iOS mirroring and control require no jailbreak.
- Vysor Share connections are encrypted, and device servers verify each user's identity against your access rules before granting access ([security details](/share#security)).

<!-- TODO(verify): user to confirm any additional security/privacy commitments (data retention, telemetry, etc.) before this answer is considered final. -->

## Which features are free, and which need Pro?

Screen mirroring and control of Android and iOS devices, and screenshots, work without a license. The remaining features — high quality mirroring, fullscreen, wireless, screen recording, audio mirroring, and Vysor Share — require [Vysor Pro](/pro). Desktop notifications, drag-and-drop file transfer, and multiple displays are Android-only. A one-time trial of Pro features is offered.

<!-- TODO(verify): trial details and current purchase options (monthly/annual/lifetime) to be confirmed. -->

## What's the difference between Pro and Enterprise?

Vysor Pro is a per-user license that unlocks all the product features. Enterprise is per-seat licensing for teams and adds organizational controls — web-based management of who can access your shared device servers, and organization-managed seats. See [Enterprise](/enterprise).

## Do I need to install an app?

- **Android:** No need to install one manually. Vysor installs its Android companion app automatically when you connect.
- **iOS:** No. Vysor uses Apple's developer mode, and no app is installed on the device.

## Do I need the Android companion app?

Yes. The Vysor app is required, but it is installed automatically when mirroring.

## Does Vysor work without Google Play Services?

The desktop app's Android connectivity uses the standard USB debugging interface and does not require Play Services on the device. <!-- TODO(verify): confirm what, specifically, does and does not work on devices without Play Services (e.g., Fire OS) before publishing this answer. -->

## Where do I report bugs?

On the [issue tracker](https://github.com/koush/vysor.io/issues).
