---
description: "Switching an Android device from USB to wireless mirroring over WiFi, connecting by network address, and fixing wireless connection failures."
---

# Wireless Connections

Once a device has been set up over USB, it can be switched to wireless mirroring with no cable, and stays usable on the network — including from remote machines over a [Vysor Share](/share) connection. Switching a device to wireless is a Vysor Pro feature and requires the [desktop app](/download).

## Switching a Device to Wireless

1. Connect the device over USB (see [Android Setup](/android)).
2. Click **Wireless Mode** in the device window, or **View Wirelessly** on the device in the device list.
3. Vysor switches the device's ADB daemon to listen on the network (port 5555), then reconnects over WiFi. The mirroring session moves from USB to the network connection without restarting.

You may disconnect the cable once the wireless session is running.

The device remains available wirelessly until it disconnects from the network or its ADB daemon restarts (for example, after a reboot — reconnect over USB once to switch it back).

## Requirements

- **Vysor Pro**, and the desktop app for switching a device to wireless mode.
- The device and the computer must be able to reach each other on the **same network** (Vysor connects to the device's WiFi address on port **5555**).
- The device must stay on the network it was switched on. If its IP address changes, it must be re-switched over USB. <!-- TODO(verify): document the recommended setup for devices on DHCP (e.g., router-side IP reservation) once confirmed. -->

The in-browser web app can mirror wireless devices shared with you, but switching a local device to wireless is done from the desktop app.

## Connecting by Address

The desktop app can connect directly to a device whose ADB is already listening on the network: use **Connect Network or Shared Device** and enter the device's address (`192.168.1.100:5555`).

In the browser, the connect dialog accepts share links only; use [Vysor Share](/share) to reach devices from the web app.

## Troubleshooting Wireless Failures

- **"This device is not available wirelessly."** The device changed networks or IP addresses, its ADB daemon is no longer listening (it rebooted), or the computer can no longer reach it. Reconnect over USB and switch it again.
- Wireless connects but the computer and device are on **different networks** (for example, a guest WiFi): the connection cannot be established. Put both on the same network, or use [Vysor Share](/share), which tunnels over the internet.
- Corporate networks that block connections between devices on the same WiFi may prevent the direct connection. See [Troubleshooting](/troubleshooting) for more.

<!-- TODO(verify): top support issues for wireless from the support inbox will slot in here. -->