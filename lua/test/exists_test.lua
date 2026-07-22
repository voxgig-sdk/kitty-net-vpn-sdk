-- KittyNetVpn SDK exists test

local sdk = require("kitty-net-vpn_sdk")

describe("KittyNetVpnSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
