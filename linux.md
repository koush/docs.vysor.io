---
description: "Installing Vysor on Linux with the deb package, and setting up the virtual camera with v4l2loopback and ffmpeg."
---

# Linux Installation

The Vysor desktop app for Linux is the deb package from the [download page](/download).

## Virtual Camera

The Vysor virtual camera makes a connected device available as a system camera on Linux — useful for video conferencing and other camera apps. It needs ffmpeg and Video4Linux (v4l2) to be installed.

```bash
sudo apt install v4l2loopback-dkms v4l-utils ffmpeg
sudo modprobe v4l2loopback devices=2 exclusive_caps=1
```

Once the module is loaded, select the camera device under **Virtual Camera** in the device settings (**Device Settings** panel). The **Virtual Camera Source** setting chooses what the camera shows: the device screen, or its rear or front camera.

The modprobe may error out with:

```
modprobe: ERROR: could not insert 'v4l2loopback': Bad address
```

If it does, uninstall the packaged module and reinstall from source:

```bash
sudo apt remove v4l2loopback-dkms
git clone https://github.com/umlaeute/v4l2loopback.git
cd v4l2loopback
make
sudo make install
# try again
sudo modprobe v4l2loopback devices=2 exclusive_caps=1
```

The v4l2loopback kernel module must be set up to load automatically on boot, or `modprobe` will need to be run manually after every reboot. See [these instructions](https://askubuntu.com/questions/1245212/how-do-i-automatically-run-modprobe-v4l2loopback-on-boot) to automate loading it.