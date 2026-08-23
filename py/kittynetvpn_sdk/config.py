# KittyNetVpn SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "KittyNetVpn",
            "slug": "kitty-net-vpn",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://s3.ru1.storage.beget.cloud",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "server": {},
            },
        },
        "entity": {
      "server": {
        "fields": [
          {
            "name": "country",
            "short": "Country code of the server location",
            "type": "`$STRING`",
          },
          {
            "name": "host",
            "short": "Server hostname or IP address",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the server",
            "type": "`$STRING`",
          },
          {
            "name": "location",
            "short": "Geographic location of the server",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Display name of the server",
            "type": "`$STRING`",
          },
          {
            "name": "port",
            "short": "Server port number",
            "type": "`$INTEGER`",
          },
          {
            "name": "protocol",
            "short": "VPN protocol used by the server",
            "type": "`$STRING`",
          },
        ],
        "name": "server",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/01c6b4d1fccf-thankful-aisling/ext_config/remote-config.json",
                "parts": [
                  "01c6b4d1fccf-thankful-aisling",
                  "ext_config",
                  "remote-config.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.servers`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
