---
description: "Customizing Vysor: changing the theme, remapping keyboard keys and mouse buttons, editing title bar and navigation bar buttons, and per-device overrides."
---

# Customizing Vysor

Customizing Vysor lets you change the theme, buttons, mouse behavior, and key bindings.

## Opening the Editor

In the Vysor **Devices** window, find the **Preferences** section and click **Customize Vysor**.

The editor shows the configuration as a JSON document. Appearance settings sit at the top, and the key and mouse mappings are grouped into a section per device platform: `android` and `apple` (iOS). Other top-level sections control desktop notifications and per-device overrides. Use **Restore Defaults** to reset the current settings, or **Use Accessibility Defaults** to load the accessibility-friendly bindings. Click **Save** to apply your changes.

## Appearance

The top-level appearance settings control the look of the device window, and can be overridden per device:

- `dark` — use the dark theme.
- `dense` — use the denser layout.
- `themeColor`, `accentColor`, and `backgroundColor` — colors for the UI.

```json
{
  "dark": false,
  "dense": true,
  "themeColor": "#3949AB",
  "accentColor": "#FF9800",
  "backgroundColor": "#000000"
}
```

## Events

Settings that trigger a key accept an event in one of two forms. A plain string is an [Android KeyEvent keycode](https://developer.android.com/reference/android/view/KeyEvent) or a `VYSOR_*` app event, such as `"KEYCODE_BACK"` or `"VYSOR_ENTER_FULLSCREEN"`.

An object describes a key plus modifiers:

- `keyevent` (Android) — the Android keycode to send.
- `code` (iOS) — the physical key code to send, for example `KeyH`.
- `shiftKey`, `meta` — modifier flags. On iOS, `meta` is the Command key.

## Key Entries

A `keydown` entry maps a JavaScript [KeyboardEvent key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) to an event. Android accepts either a string or an object; iOS uses the object form.

```json
"android": {
  "keydown": {
    "ArrowDown": "KEYCODE_DPAD_DOWN",
    "Tab": {
      "keyevent": "KEYCODE_TAB",
      "shiftKey": true
    }
  }
}
```

The `Tab` entry above sends the shift modifier with `KEYCODE_TAB`, which moves between on-screen controls in Android.

## Mouse Buttons

A `mousedown` entry maps a mouse button to an event, where `1` is the middle button and `2` is the right button.

```json
"android": {
  "mousedown": {
    "1": "KEYCODE_HOME",
    "2": "KEYCODE_BACK"
  }
},
"apple": {
  "mousedown": {
    "1": { "code": "KeyH", "meta": true },
    "2": { "code": "BracketLeft", "meta": true }
  }
}
```

## Navigation Bar Buttons

The `navigationBar.buttons` array defines the buttons drawn along the bottom of the device window. Each button has a `title`, an `event`, and a `class` (a [Font Awesome](https://fontawesome.com/icons) icon class to draw). The `event` can be a string or an object.

```json
"android": {
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
```

On iOS, use an event object to send a key chord, such as Command-H for the Home screen:

```json
"apple": {
  "navigationBar": {
    "buttons": [
      {
        "class": "fa-circle",
        "event": { "code": "KeyH", "meta": true },
        "title": "Home"
      }
    ]
  }
}
```

## Title Bar Buttons

The `titleBar.buttonGroups` array defines the buttons drawn in the title bar of the device window. Each group is either a set of `buttons` shown inline, or a dropdown menu with a `menuClass` icon and its `buttons` inside.

```json
"android": {
  "titleBar": {
    "buttonGroups": [
      {
        "buttons": [
          {
            "class": "fa-camera",
            "title": "Take Screenshot",
            "event": "VYSOR_SCREENSHOT"
          }
        ]
      },
      {
        "menuClass": "fa-cog",
        "buttons": [
          {
            "class": "fa-clipboard-list",
            "title": "Copy Logcat",
            "event": "VYSOR_SHELL_COMMAND",
            "command": "logcat -t 500"
          }
        ]
      }
    ]
  }
}
```

A button entry supports these fields:

- `class` — the Font Awesome icon to draw.
- `title` — the tooltip shown on hover.
- `event` — the event dispatched when the button is pressed.
- `stopClass` and `stopColor` — an alternate icon and color shown while a toggle is active, used for the record and audio buttons.
- `command` — for `VYSOR_SHELL_COMMAND` events, the shell command to run on the device. The output is copied to your clipboard.

The iOS section uses the same title bar structure, minus Android-only buttons such as **Copy Logcat**.

## Android adb Override

The `android.adb` settings point Vysor at a specific adb binary and pass extra arguments to it. Set `path` to `null` to use the bundled adb.

```json
"android": {
  "adb": {
    "path": "/path/to/adb",
    "arguments": []
  }
}
```

## Desktop Notification Blocklist

The `notifications.blocklist` array lists notification text that Vysor should not forward to your desktop, matched against the notification title or message.

```json
"notifications": {
  "blocklist": [
    "Vysor is hiding your keyboard"
  ]
}
```

## Per-Device Overrides

Entries under `devices` are keyed by device serial number and override any global setting for that device only — including appearance settings such as `themeColor`, plus `keydown`, `navigationBar`, and the rest.

```json
"devices": {
  "example-device-serial": {
    "themeColor": "#AA00FF",
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
```

To see a device's serial number in the **Devices** window, enable **Show serial numbers** under **Preferences**.
