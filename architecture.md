---
description: "A high-level overview of how Vysor mirrors and controls Android and iOS devices."
---

# How Vysor Works

Vysor mirrors and controls devices through the developer access each platform provides. No root or jailbreak is required.

## Android

Vysor sets up the device automatically over the standard USB debugging interface. It captures the screen and accepts input while Vysor is connected, without root or system modifications. [USB debugging](/android#enable-usb-debugging) must be enabled and the computer approved once.

## iOS

Vysor uses Apple's developer mode: trust the computer and enable [Developer Mode](/ios#enable-developer-mode) on the device. On first connection, Vysor installs Apple's developer image. No iOS app or jailbreak is required. On Windows, install Apple Mobile Device Support; macOS and Linux need no additional software.

## Wireless

After an initial USB connection, Vysor can reconnect over the local network. Android uses Wireless debugging; iPhone and iPad work after the device has been trusted over USB. See [Wireless Connections](/manual/wireless).

## Vysor Share

[Vysor Share](/share) gives a remote user encrypted access to a device's screen and input over the internet.

## AI Automation (MCP)

The native desktop app can expose the open device viewer as a local [MCP server](/manual/mcp). AI clients use screenshots and input tool calls to operate the device, and the endpoint stops when the viewer closes.
