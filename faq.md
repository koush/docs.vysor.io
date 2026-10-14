---
description: "Frequently asked questions about Vysor: root requirements, safety, licensing, the companion app, and what works in the web app versus the desktop app."
---

# FAQ

## Does Vysor require root?

No. Android mirroring uses the standard [ADB debugging interface](/architecture#android) — enable [USB debugging](/android#enable-usb-debugging) and that is the whole requirement. iOS mirroring does not require a jailbreak either; it uses the permissions granted to the Vysor iOS app.

## Is Vysor safe to use?

Vysor works through the same developer channel that Android development tools use (ADB):
- You explicitly enable USB debugging and approve each computer on the device.
- The streaming server that runs on the device is temporary ([how it works](/architecture#android)), and its sockets require a connection password delivered over the ADB connection.
- Vysor Share connections are encrypted WebRTC connections, and remote device servers verify each user's identity against your access rules before granting any device access ([security details](/share#security)).

<!-- TODO(verify): user to confirm any additional security/privacy commitments (data retention, telemetry, etc.) before this answer is considered final. -->

## Which features are free, and which need Pro?

Screen mirroring and control of Android devices, and screenshots, work without a license. The remaining features — high quality mirroring, fullscreen, wireless, screen recording, audio mirroring, drag-and-drop file transfer, and Vysor Share — require [Vysor Pro](/pro). A one-time trial of Pro features is offered.

<!-- TODO(verify): trial details and current purchase options (monthly/annual/lifetime) to be confirmed. -->

## What's the difference between Pro and Enterprise?

Vysor Pro is a per-user license that unlocks all the product features. Enterprise is per-seat licensing for teams and adds organizational controls — web-based management of who can access your shared device servers, and organization-managed seats. See [Enterprise](/enterprise).

## Do I need the Android companion app?

Not for USB mirroring — a stock device with USB debugging works. The [Vysor app](https://github.com/koush/docs.vysor.io/releases/latest/download/Vysor-release.apk) adds [audio mirroring](/manual/audio), [desktop notifications](/manual/notifications), the international keyboard, and wireless onboarding conveniences. See [How Vysor Works](/architecture#the-android-companion-app).

## Does Vysor work without Google Play Services?

The desktop app's Android connectivity goes through ADB and does not require Play Services on the device. <!-- TODO(verify): confirm what, specifically, does and does not work on devices without Play Services (e.g., Fire OS) before publishing this answer. -->

## What works in the web app versus the desktop app?

The [web app](https://app.vysor.io) mirrors and controls devices, including devices shared with you ([Vysor Share](/share)). Switching a local device to [wireless](/manual/wireless) and connecting by network address are desktop app features. iOS mirroring is available in the desktop app. <!-- TODO(verify): clarify current iOS support in the web app. -->

## Where do I report bugs?

On the [issue tracker](https://github.com/koush/vysor.io/issues).