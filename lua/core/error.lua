-- KittyNetVpn SDK error

local KittyNetVpnError = {}
KittyNetVpnError.__index = KittyNetVpnError


function KittyNetVpnError.new(code, msg, ctx)
  local self = setmetatable({}, KittyNetVpnError)
  self.is_sdk_error = true
  self.sdk = "KittyNetVpn"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function KittyNetVpnError:error()
  return self.msg
end


function KittyNetVpnError:__tostring()
  return self.msg
end


return KittyNetVpnError
