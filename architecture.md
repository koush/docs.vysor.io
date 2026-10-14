---
description: "How Vysor works internally: ADB-based video streaming, no root required, the temporary streaming server, wireless switching, and the iOS mirroring model."
---

# How Vysor Works

This page describes what Vysor actually does on your device and on your computer. No steps here are required reading to use Vysor; it exists to answer the common questions about what the app installs, what permissions it uses, and whether it requires privileged access.

## Android

Vysor mirrors Android over the [ADB](https://developer.android.com/tools/adb) debugging interface, the same mechanism used by Android development tools. This is why [USB debugging must be enabled](/android#enable-usb-debugging) and why the device shows an **Allow USB debugging?** prompt on first connection.

**No root is required.** Vysor uses the debug bridge's ability to start a process on the device:

1. Over ADB, Vysor starts a small server process on the device in the temporary directory `/data/local/tmp`. Nothing is installed and no system changes are made.
2. The server captures the device screen and encodes the video with the device's **hardware encoder**, then streams it to your computer over the ADB connection.
3. Your computer decodes and displays the stream. Mouse and keyboard input is sent back over the same connection and injected as touch events.

The on-device server exists only while the mirroring session is running. Nothing persistent is installed on the device beyond this temporary streaming server — disconnect the device and there is no remaining Vysor software on it.

Video decoding on the computer is done in one of three ways, selectable in the device settings: the **WebCodecs** hardware decoder (default on modern systems), a **WebAssembly** software decoder, or a bundled native decoder. If one decoder misbehaves on your system, switch decoders in device settings; Vysor will also prompt to switch automatically when it detects a video issue.

### The Android Companion App

The [Vysor Android app](https://github.com/koush/docs.vysor.io/releases/latest/download/Vysor-release.apk) is a companion app. **It is not required for USB mirroring** — a stock Android device with USB debugging enabled is fully supported. Installing it adds:

- **Audio mirroring** on Android 10 and newer: the app captures device audio and streams it to your computer ([Audio Mirroring](/manual/audio)).
- **Desktop notifications**: Android notifications are forwarded to your desktop ([Desktop Notifications](/manual/notifications)).
- **International keyboard**: a Vysor input method for typing non-English characters directly from your desktop keyboard.
- **Wireless onboarding** conveniences.

### Multiple Displays

Devices with multiple displays (for example, an app presented on a secondary display, or desktop-mode devices) enumerate their displays to Vysor. Click the device name in the title bar while mirroring to switch between the device's displays. See [Vysor Pro](/pro#free-vs-pro).

## Wireless

Wireless mirroring uses **ADB over TCP/IP**: after an initial USB connection, Vysor instructs the device's ADB daemon to listen on the network (port 5555) and reconnects to the device over the local network. The session migrates from USB to the network connection without restarting. See [Android Setup: Wireless](/manual/wireless).

Because this is a plain network connection to the ADB daemon, the device and the computer must be able to reach each other on the network. Connections across different networks are handled by [Vysor Share](/share).

## iOS

iOS does not have an ADB-like debugging interface, so Vysor mirrors iOS through the [Vysor iOS app](https://apps.apple.com/us/app/vysor/id1577813680): the app records the screen (a permission iOS requires the user to grant) and streams it to the computer over USB.

iOS mirroring is **view-only**: the screen is streamed and audio can be mirrored, but iOS does not allow an app to inject touch input. As a companion feature, Vysor can control iOS through a **Bluetooth HID connection**: the iOS device is paired to a [Vysor Dongle](/manual/ios-control#vysor-dongle) as a Bluetooth keyboard and mouse, and Vysor uses that connection to move the iOS pointer. iOS then interprets the input as assistive-input, which is why an accessibility control cursor appears on the device.

Follow the in-app prompts to pair and [calibrate the control cursor](/manual/ios-control#calibrating-the-control-cursor). This is optional — Vysor can be used for mirroring only.

## Vysor Share

[Vysor Share](/share) tunnels the full device connection — screen, input, and ADB — to a remote user over a WebRTC data connection, so device screens and debugging can be shared across networks.

## Security Relevant Facts

- Android mirroring requires the user to explicitly enable USB debugging and approve the computer.
- The on-device streaming server writes to `/data/local/tmp` only, and every connection to the video and control sockets must present a session password that ADB delivers to Vysor.
- Vysor Share connections are transported over WebRTC, which encrypts media and data in transit (DTLS). See [Vysor Share: security](/share#security).
- iOS mirroring works with the permissions granted by the device owner to the Vysor iOS app (screen recording, and optionally Bluetooth pairing).