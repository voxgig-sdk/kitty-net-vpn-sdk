
import { Context } from './Context'


class KittyNetVpnError extends Error {

  isKittyNetVpnError = true

  sdk = 'KittyNetVpn'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  KittyNetVpnError
}

