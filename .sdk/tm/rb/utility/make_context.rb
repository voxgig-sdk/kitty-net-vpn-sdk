# KittyNetVpn SDK utility: make_context
require_relative '../core/context'
module KittyNetVpnUtilities
  MakeContext = ->(ctxmap, basectx) {
    KittyNetVpnContext.new(ctxmap, basectx)
  }
end
