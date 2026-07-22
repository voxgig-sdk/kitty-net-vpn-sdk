# KittyNetVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module KittyNetVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      KittyNetVpnBaseFeature.new
    when "test"
      KittyNetVpnTestFeature.new
    else
      KittyNetVpnBaseFeature.new
    end
  end
end
