---
description: "A high-level overview of how Vysor mirrors and controls Android and iOS devices."
---

# How Vysor Works

Vysor mirrors and controls devices through the developer access each platform provides. No root or jailbreak is required.

## Android

Vysor starts a small service on the device through the standard USB debugging interface. The service captures the screen and accepts input, and it runs only while Vysor is connected. Nothing persistent is installed and no system changes are made. [USB debugging](/android#enable-usb-debugging) must be enabled and the computer approved once.

## iOS

Vysor uses Apple's developer mode: trust the computer and enable [Developer Mode](/ios#enable-developer-mode) on the device. On first connection, Vysor installs Apple's developer image. No jailbreak or companion app is required.

## Wireless

After an initial USB connection, Vysor can reconnect over the local network. Android uses Wireless debugging; iPhone and iPad work after the device has been trusted over USB. See [Wireless Connections](/manual/wireless).

## Vysor Share

[Vysor Share](/share) gives a remote user encrypted access to a device's screen and input over the internet.
