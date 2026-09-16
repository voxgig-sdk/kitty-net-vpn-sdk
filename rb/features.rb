# KittyNetVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module KittyNetVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      KittyNetVpnBaseFeature.new
    when "ratelimit"
      KittyNetVpnRatelimitFeature.new
    when "retry"
      KittyNetVpnRetryFeature.new
    when "test"
      KittyNetVpnTestFeature.new
    when "timeout"
      KittyNetVpnTimeoutFeature.new
    else
      KittyNetVpnBaseFeature.new
    end
  end
end
