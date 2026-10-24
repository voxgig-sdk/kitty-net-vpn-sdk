# KittyNetVpn SDK utility: prepare_body
require_relative 'media'
module KittyNetVpnUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return KittyNetVpnUtilities.raw_body(ctx.reqdata) if KittyNetVpnUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
