-- KittyNetVpn SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "KittyNetVpn",
      slug = "kitty-net-vpn",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://s3.ru1.storage.beget.cloud",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["server"] = {},
      },
    },
    entity = {
      ["server"] = {
        ["fields"] = {
          {
            ["name"] = "country",
            ["short"] = "Country code of the server location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "host",
            ["short"] = "Server hostname or IP address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the server",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["short"] = "Geographic location of the server",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Display name of the server",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "port",
            ["short"] = "Server port number",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "protocol",
            ["short"] = "VPN protocol used by the server",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "server",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/01c6b4d1fccf-thankful-aisling/ext_config/remote-config.json",
                ["parts"] = {
                  "01c6b4d1fccf-thankful-aisling",
                  "ext_config",
                  "remote-config.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.servers`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
