---
description: "Mirroring device audio to your computer: the Audio Mirroring toggle in the Vysor device window, the Android 10 requirement, and first-time permission prompts."
---

# Audio Mirroring

Click **Audio Mirroring** (the headphones button) in the device window [title bar](/manual/customize-window#title-bar) to toggle device audio mirroring. Device audio plays on your computer while the screen mirror continues.

## Android

Audio mirroring on Android requires:

- **Android 10 or newer.** Vysor captures audio with the system audio capture API introduced in Android 10; older devices cannot mirror audio.
- The [Vysor Android app](https://github.com/koush/docs.vysor.io/releases/latest/download/Vysor-release.apk) installed on the device.

The first time audio is enabled, the device asks for two permissions: **microphone access** for the Vysor app, and a system **audio capture** dialog. Approve both and audio starts streaming. Subsequent sessions connect without prompts.

Some apps opt out of audio capture and will not be audible.

## iOS

iOS audio mirrors over USB through the [Vysor iOS app](https://apps.apple.com/us/app/vysor/id1577813680) — toggle it with the same headphones button.