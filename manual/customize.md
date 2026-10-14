---
description: "Customizing Vysor: remapping keyboard keys and mouse buttons to Android key events, and editing the title bar and navigation bar buttons, via the Customize settings JSON."
---

# Customizing Vysor

Customizing Vysor (app menu → **Customize**) lets you change how key and mouse events are mapped from your desktop to your device, and modify the buttons on the title bar and navigation bar of the device window.

The customization is a JSON document. These are the default settings for Android devices:

```json
{
  "adb": {
    "path": null,
    "arguments": []
  },
  "mousedown": {
    "1": "KEYCODE_HOME",
    "2": "KEYCODE_BACK"
  },
  "keydown": {
    "AltLeft": "KEYCODE_ALT_LEFT",
    "AltRight": "KEYCODE_ALT_RIGHT",
    "ShiftLeft": "KEYCODE_SHIFT_LEFT",
    "ShiftRight": "KEYCODE_SHIFT_RIGHT",
    "ControlLeft": "KEYCODE_CTRL_LEFT",
    "ControlRight": "KEYCODE_CTRL_RIGHT",
    "ArrowDown": "KEYCODE_DPAD_DOWN",
    "ArrowLeft": "KEYCODE_DPAD_LEFT",
    "ArrowRight": "KEYCODE_DPAD_RIGHT",
    "ArrowUp": "KEYCODE_DPAD_UP",
    "Backspace": "KEYCODE_DEL",
    "Delete": "KEYCODE_FORWARD_DEL",
    "Enter": "KEYCODE_ENTER",
    "Escape": "KEYCODE_BACK",
    "F1": "KEYCODE_MENU",
    "F2": "VYSOR_SHOW_TITLE_BAR",
    "F3": "VYSOR_ENTER_FULLSCREEN",
    "F4": "VYSOR_EXIT_FULLSCREEN",
    "Home": "KEYCODE_HOME",
    "Tab": "KEYCODE_TAB"
  },
  "navigationBar": {
    "buttons": [
      {
        "class": "fa-chevron-left",
        "event": "KEYCODE_BACK",
        "title": "Back"
      },
      {
        "class": "fa-circle",
        "event": "KEYCODE_HOME",
        "title": "Home"
      },
      {
        "class": "fa-bars",
        "event": "KEYCODE_APP_SWITCH",
        "title": "Recent Tasks"
      }
    ]
  },
  "titleBar": {
    "buttonGroups": [
      {
        "buttons": [
          {
            "class": "fa-camera",
            "title": "Take Screenshot",
            "event": "VYSOR_SCREENSHOT"
          },
          {
            "class": "fa-video",
            "stopClass": "fa-video-slash fa-spin",
            "stopColor": "red",
            "title": "Record Screen",
            "event": "VYSOR_RECORD_SCREEN"
          },
          {
            "class": "fa-headphones",
            "stopColor": "green",
            "title": "Toggle Audio",
            "event": "VYSOR_TOGGLE_AUDIO"
          },
          {
            "class": "fa-expand",
            "title": "Full Screen",
            "event": "VYSOR_ENTER_FULLSCREEN"
          }
        ]
      },
      {
        "menuClass": "fa-cog",
        "buttons": [
          {
            "class": "fa-wifi",
            "title": "Wireless Mode",
            "event": "VYSOR_WIRELESS_MODE"
          },
          {
            "class": "fa-redo",
            "title": "Rotate Screen",
            "event": "VYSOR_ROTATE_SCREEN"
          },
          {
            "class": "fa-power-off",
            "title": "Screen On/Off",
            "event": "KEYCODE_POWER"
          },
          {
            "class": "fa-clipboard-list",
            "title": "Copy Logcat",
            "event": "VYSOR_SHELL_COMMAND",
            "command": "logcat -t 500"
          },
          {
            "class": "fa-cog",
            "title": "Settings",
            "event": "VYSOR_OPEN_DEVICE_SETTINGS"
          }
        ]
      }
    ]
  }
}
```

The editor also holds an `apple` section with the equivalent defaults for iOS devices, and appearance settings.

## Key Entries

A `keydown` entry maps a JavaScript [KeyboardEvent key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) to an [Android KeyEvent keycode](https://developer.android.com/reference/android/view/KeyEvent) or a `VYSOR_*` app event (for example, `VYSOR_ENTER_FULLSCREEN`). The syntax for an entry is:

```
[Keycode Number | Key String]: [KeyEvent String | Key Event Object]
```

A Key Event Object is:

```
{
  [keycode | keyevent]: [number | string],
  shiftKey: [true | false | undefined]
}
```

For example, `"ArrowDown": "KEYCODE_DPAD_DOWN"` maps the JavaScript `ArrowDown` key to Android's `KEYCODE_DPAD_DOWN`.

To send a shift modifier along with the key event, map to an object instead of a string. This maps the `Tab` key — with the shift modifier — to `KEYCODE_TAB`, which moves between on-screen controls in Android:

```json
"Tab": {
  "keyevent": "KEYCODE_TAB",
  "shiftKey": true
}
```

## Mouse Buttons

A `mousedown` entry maps a mouse button to a key event, where `1` is the middle button and `2` is the right button. The default sends **Home** on middle click and **Back** on right click.

## Navigation Bar Buttons

The `navigationBar.buttons` array defines the buttons drawn along the bottom of the device window. Each button has a `title`, an `event` (an Android keycode or app event dispatched when pressed), and a `class` (a [Font Awesome](https://fontawesome.com/icons) icon class to draw). The default set above gives **Back**, **Home**, and **Recent Tasks** buttons.

## Title Bar Buttons

The `titleBar.buttonGroups` array defines the buttons drawn in the title bar of the device window. Each group is either a set of `buttons` shown inline, or a dropdown menu with a `menuClass` icon and its `buttons` inside — like the default cog menu holding **Wireless Mode** and friends.

Besides button entries with `event`, a `VYSOR_SHELL_COMMAND` button runs a `command` in a shell on the device and copies the output to your clipboard, as the default **Copy Logcat** button does.

## Per-Device Overrides

Entries under `devices` keyed by device serial number override the global `keydown`, `navigationBar`, and other settings for that device only:

```json
{
  "devices": {
    "example-device-serial": {
      "keydown": {
        "F3": "KEYCODE_BACK"
      },
      "navigationBar": {
        "buttons": [
          {
            "class": "fa-circle",
            "event": "KEYCODE_HOME",
            "title": "Home"
          }
        ]
      }
    }
  }
}
```