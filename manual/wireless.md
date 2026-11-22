---
description: "Switching a device from USB to wireless mirroring over Wi-Fi."
---

# Wireless Connections

Once a device has been set up over USB, it can be switched to wireless mirroring with no cable, and stays usable on the network — including from remote machines over a [Vysor Share](/share) connection.

## Android

Android wireless mirroring uses Android 11+'s **Wireless debugging**.

1. On the device, open **Settings → System → Developer options** and enable **Wireless debugging**. Connect the device to the same Wi-Fi network as your computer and accept the prompt to trust that network.
2. Connect the device over USB once (see [Android Setup](/android)) and open it in Vysor.
3. Click **Wireless Mode** in the device window, or **View Wirelessly** on the device in the device list.
4. Vysor reconnects over Wi-Fi. You may disconnect the USB cable once the wireless session is running.

This setup is one-time; after the first connection, Vysor can reconnect wirelessly.

If the device cannot be found later, for example after a reboot or a network change, reconnect over USB and switch it to wireless again.

## iOS

Wireless mirroring on iPhone and iPad works after the device has been set up over USB once with [Developer Mode](/ios#enable-developer-mode) enabled. Keep the device on the same Wi-Fi network as your computer, then click **Wireless Mode** in the device window or **View Wirelessly** in the device list. Vysor finds the device on the local network and reconnects over Wi-Fi; you may disconnect the USB cable once the wireless session is running.
