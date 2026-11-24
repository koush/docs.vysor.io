---
description: "Using Vysor's MCP server to let AI and automation clients screenshot, tap, swipe, type, and navigate Android and iOS devices."
---

# AI Automation (MCP)

Vysor can expose an open device viewer as a [Model Context Protocol](https://modelcontextprotocol.io/) server. Point an MCP client at the viewer and an AI agent can inspect the device, take screenshots, and send taps, swipes, keystrokes, and text without an emulator.

MCP automation is included with [Vysor Pro](/pro) and is available in the native Vysor desktop app on Windows, macOS, and Linux. The web app does not expose an MCP server.

## Start the Server

The MCP server starts with the device viewer:

1. Connect a device and open it in Vysor.
2. Open **Settings** and expand **Device Settings**.
3. Copy the **MCP Server** URL.

The URL looks like:

```text
http://127.0.0.1:PORT/RANDOM-PATH/mcp
```

The random path is the endpoint's secret. Vysor saves the endpoint for the device, and the server listens only while the viewer is open. Closing the viewer stops the server.

## Connect an MCP Client

Add the URL to your MCP client as a Streamable HTTP server. Configuration varies by client; a typical entry looks like:

```json
{
  "mcpServers": {
    "vysor": {
      "type": "http",
      "url": "http://127.0.0.1:PORT/RANDOM-PATH/mcp"
    }
  }
}
```

Use the `127.0.0.1` URL when the MCP client runs on the same computer as Vysor. For a client on another machine, replace `127.0.0.1` with the Vysor computer's LAN address.

## Security

Treat the full MCP URL as a password. Anyone who can reach the endpoint and knows the random path can control the device.

- Vysor rejects requests that include an `Origin` header, which blocks normal browser pages from calling the server.
- The server uses plain HTTP. Do not expose its port to the public internet; use a trusted local network, VPN, or SSH tunnel instead.
- Close the viewer when you are done to stop the endpoint.

## Tools

The server exposes tools for observing and controlling the active device.

| Tool | Purpose |
|---|---|
| `get_device` | Get device identity, readiness, screenshot dimensions, and supported controls. |
| `screenshot` | Capture the latest decoded device frame as a high-quality JPEG. |
| `tap` | Tap screenshot coordinates. Increase `durationMs` for a long press. |
| `swipe` | Drag between screenshot coordinates and release. |
| `scroll` | Scroll up, down, left, or right by a fraction of the screen. |
| `press_key` | Send a key through Vysor's keyboard handling, including modifiers and configured shortcuts. |
| `type_text` | Type text without changing the device or desktop clipboard. |
| `navigate` | Go home, back, or to recent apps on Android. |

Coordinates use pixels from the most recent screenshot, with the origin at the top left. Take a new screenshot after rotating the device or changing the window size.

## Recommended Workflow

1. Call `get_device` to confirm the device is ready and read the current screenshot dimensions.
2. Call `screenshot` to see the current screen.
3. Send input with `tap`, `swipe`, `scroll`, `press_key`, `type_text`, or `navigate`.
4. Take another screenshot to verify the result.

Input calls return after the event is dispatched; the app may still be updating. Screenshot again before deciding what to do next.

## Platform Notes

- `navigate` is Android-only.
- Typing on iPhone and iPad uses US-layout HID keystrokes for printable ASCII, tabs, and newlines.
- Android text entry depends on the device's active keyboard.
- Gestures are serialized so overlapping input from multiple MCP clients does not interleave.
