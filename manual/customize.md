---
description: "Customizing Vysor: remapping keyboard keys to Android key events, and editing the navigation bar buttons, via the Customize settings JSON."
---

# Customizing Vysor

Customizing Vysor (app menu → **Customize**) lets you change how key events are mapped from your desktop to your Android device, and modify the navigation bar along the bottom of the Vysor device window to add or remove buttons.

## Defaults

These are the default settings Vysor uses:

```json
{
  "keydown": {
    "ArrowDown": "KEYCODE_DOWN",
    "ArrowLeft": "KEYCODE_LEFT",
    "ArrowRight": "KEYCODE_RIGHT",
    "ArrowUp": "KEYCODE_UP",
    "Backspace": "KEYCODE_DEL",
    "Delete": "KEYCODE_FORWARD_DEL",
    "Enter": "KEYCODE_ENTER",
    "Escape": "KEYCODE_BACK",
    "F1": "KEYCODE_MENU",
    "F2": "VYSOR_SHOW_TITLE_BAR",
    "Home": "KEYCODE_HOME",
    "Tab": {
      "keyevent": "KEYCODE_TAB",
      "shiftKey": true
    }
  },
  "navigationBar": {
    "buttons": [
      {
        "class": "fa fa-lg fa-chevron-left",
        "event": "KEYCODE_BACK",
        "title": "Back"
      },
      {
        "class": "fa fa-lg fa-circle-o",
        "event": "KEYCODE_HOME",
        "title": "Home"
      },
      {
        "class": "fa fa-lg fa-navicon",
        "event": "KEYCODE_APP_SWITCH",
        "title": "Recent Tasks"
      }
    ]
  },
  "devices": {
    "example-device-serial": {
      "keydown": {
        "F3": "KEYCODE_BACK"
      },
      "navigationBar": {
        "buttons": [
          {
            "class": "fa fa-lg fa-circle-o",
            "event": "KEYCODE_HOME",
            "title": "Home"
          }
        ]
      }
    }
  }
}
```

## Key Entries

A `keydown` entry maps a JavaScript [KeyboardEvent key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) to an [Android KeyEvent keycode](https://developer.android.com/reference/android/view/KeyEvent). The syntax for an entry is:

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

For example, `"ArrowDown": "KEYCODE_DOWN"` maps the JavaScript `ArrowDown` key to Android's `KEYCODE_DOWN`.

To send a shift modifier along with the key event, map to an object instead of a string. This maps the `Tab` key — with the shift modifier — to `KEYCODE_TAB`, which moves between on-screen controls in Android:

```json
"Tab": {
  "keyevent": "KEYCODE_TAB",
  "shiftKey": true
}
```

## Navigation Bar Buttons

The `navigationBar.buttons` array defines the buttons drawn along the bottom of the device window. Each button has a `title`, an `event` (an Android keycode dispatched when pressed), and a `class` (a [Font Awesome](https://fontawesome.com/icons) icon class to draw). The default set above gives **Back**, **Home**, and **Recent Tasks** buttons.

## Per-Device Overrides

Entries under `devices` keyed by device serial number override the global `keydown` and `navigationBar` settings for that device only.