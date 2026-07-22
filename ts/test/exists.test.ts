
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KittyNetVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await KittyNetVpnSDK.test()
    equal(null !== testsdk, true)
  })

})
