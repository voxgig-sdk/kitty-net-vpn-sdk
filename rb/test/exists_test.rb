# KittyNetVpn SDK exists test

require "minitest/autorun"
require_relative "../KittyNetVpn_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = KittyNetVpnSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
