---
description: "Share your Android device with anyone over a link: full screen mirroring, control, and ADB debugging over the network, with whitelist-based access control."
---

# Vysor Share

Vysor Share lets you give another person full access to an Android device over the network with a link: they can **view the screen, control the device, and debug it with ADB** — as if it were plugged into their computer. Share works across networks; a device on your office network can be debugged from home.

Sharing requires a Vysor Pro license.

## Sharing a Device

1. With the device connected, click the **Share Device** button on the device's entry in the device list.
2. Vysor puts a share link on your clipboard and notifies you: sharing the link will allow other people to **view, control, and debug (ADB)** your Android device.
3. Send the link to whoever needs access.

The recipient opens the link (or pastes it under **Connect Shared Device**) and the device appears for them in the device list, ready to mirror. This works from both the desktop app and the [web app](https://app.vysor.io).

To stop sharing, click **Unshare Device** on the device. This immediately terminates the share channel; active sessions are disconnected.

## Sharing All Devices (Device Servers)

For ongoing access to a set of devices — a test bench or a **device farm** — enable **Share All Devices** in Vysor's settings. This runs a device server that publishes every Android device currently connected to your computer:

- Use **Copy Share Link** to get the server link, and distribute it to your team.
- Recipients that open the server link see a list labeled *{Your name}'s Shared Devices*, and can open any of the devices on it.
- Anyone currently using a device is shown next to it in your device list, so you can see who is using what.
- Toggling **Share All Devices** off stops the server and disconnects everyone.

## Access Control

By default, anyone with your server link can connect. You can restrict who is allowed three ways, configured on the **Whitelist** screen (Server Access):

- **Whitelist.** Only the listed users may connect. Whitelisting uses email addresses, one per line; a domain entry like `@yourcompany.com` allows every user with that email domain.
- **Open Server.** Anyone with the link may connect.
- **Vysor Enterprise.** Users belonging to your [Enterprise organization](/enterprise) are allowed; membership is managed with the organization's account tools at [billing.vysor.io](https://billing.vysor.io).

Users authenticate by signing in to Vysor with their account, and the server verifies each connection against the whitelist before any device access is offered. Removing someone from the whitelist revokes their server access going forward.

## Remote ADB

A shared device is not screen-only: the recipient's connection carries the **full ADB tunnel**, so they can run `adb` against the device as if it were locally connected — install a build, inspect logcat, pull files, use Android Studio or any other ADB-based tool. This is what makes Share usable for remote debugging and CI/QA workflows, not just demos.

## Typical Workflows

- **Remote debugging.** Share a single device with a teammate or an external tester; they debug over ADB from their machine.
- **Device farm access.** Run **Share All Devices** on a bench machine in the office; the team connects from wherever they are, as needed, with whitelist access control and usage visibility.
- **Helping someone.** A friend or family member shares their device with you; you see what they see and can control it to walk them through a problem.

## Security

- **What a recipient can do is what the link grants:** view the screen, control input, and full ADB access to the shared device. Treat share links like physical access to the device.
- **Transport.** Connections between the two sides are carried over WebRTC, whose data channels are encrypted in transit (DTLS). The on-device streaming server additionally requires a per-session password on every socket, delivered over the ADB connection, so a machine on the device's local network cannot attach to a session.
- **Signaling and relay.** Setting up a connection uses Vysor's signaling service (push.vysor.io) and, when a direct peer-to-peer connection is not possible, a TURN relay (turn.vysor.io). <!-- TODO(verify): confirm the precise statement for what the signaling service and TURN relay can and cannot see, and whether TURN is always required or only a fallback. -->
- **Authentication for servers.** Every device-server connection must pass a nonce challenge: the server issues a random value, the client answers with a token signed by Vysor's billing backend (billing.vysor.io), and the server verifies the signature, the nonce, and the whitelist before granting access.
- **Revoking access.** Unshare a device to kill its share channel immediately. Turn off Share All Devices to shut down the server and disconnect everyone. Edit the whitelist to remove a person's ongoing access. Recipients can always remove your server from their own device list themselves.

<!-- TODO(verify): user to provide the definitive security details to replace the flagged items above before final review. -->