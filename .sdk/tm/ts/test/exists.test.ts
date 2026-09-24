
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KittyNetVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = KittyNetVpnSDK.test()
    equal(testsdk instanceof KittyNetVpnSDK, true,
      'KittyNetVpnSDK.test() must return a client synchronously')
  })

})
