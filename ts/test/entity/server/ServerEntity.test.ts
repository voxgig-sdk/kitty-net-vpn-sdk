

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { KittyNetVpnSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ServerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KITTY_NET_VPN_TEST_LIVE=TRUE.
  afterEach(liveDelay('KITTY_NET_VPN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KittyNetVpnSDK.test()
    const ent = testsdk.Server()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KITTY_NET_VPN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'server.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Country code of the server location","t":"`$STRING`","key$":"country","index$":0},"host":{"a":true,"h":"Host","n":"host","r":false,"sh":"Server hostname or IP address","t":"`$STRING`","key$":"host","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the server","t":"`$STRING`","key$":"id","index$":2},"location":{"a":true,"h":"Location","n":"location","r":false,"sh":"Geographic location of the server","t":"`$STRING`","key$":"location","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Display name of the server","t":"`$STRING`","key$":"name","index$":4},"port":{"a":true,"h":"Port","n":"port","r":false,"sh":"Server port number","t":"`$INTEGER`","key$":"port","index$":5},"protocol":{"a":true,"h":"Protocol","n":"protocol","r":false,"sh":"VPN protocol used by the server","t":"`$STRING`","key$":"protocol","index$":6}},"id":{"field":"id","name":"id"},"name":"server","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /01c6b4d1fccf-thankful-aisling/ext_config/remote-config.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/01c6b4d1fccf-thankful-aisling/ext_config/remote-config.json","q":{},"r":{},"s":[{"lit":"01c6b4d1fccf-thankful-aisling"},{"lit":"ext_config"},{"lit":"remote-config.json"}],"t":{"req":"`reqdata`","res":"`body.servers`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"server","name__orig":"server","Name":"Server","name_":"server","name-":"server","NAME":"SERVER","index$":0}, {"active":true,"entity":"server","key$":"BasicServerFlow","kind":"basic","name":"BasicServerFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"server_ref01"}}],"index$":0}]}, 'Server', {"GET /01c6b4d1fccf-thankful-aisling/ext_config/remote-config.json":{"protocol":"http","operationId":"getServersList","responses":{"200":{"description":"Successful response containing the list of VPN servers","content":{"application/json":{"schema":{"type":"object","description":"Remote configuration containing VPN server list","properties":{"servers":{"description":"List of available VPN servers","items":{"properties":{"country":{"description":"Country code of the server location","type":"string","key$":"country"},"host":{"description":"Server hostname or IP address","type":"string","key$":"host"},"id":{"description":"Unique identifier for the server","type":"string","key$":"id"},"location":{"description":"Geographic location of the server","type":"string","key$":"location"},"name":{"description":"Display name of the server","type":"string","key$":"name"},"port":{"description":"Server port number","type":"integer","key$":"port"},"protocol":{"description":"VPN protocol used by the server","type":"string","key$":"protocol"}},"type":"object","index$":0},"key$":"servers","type":"array"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let server_ref01_data = Object.values(setup.data.existing.server)[0] as any

    // LIST
    const server_ref01_ent = client.Server()
    const server_ref01_match: any = {}

    const server_ref01_list = (await server_ref01_ent.list(server_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/server/ServerTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = KittyNetVpnSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['server01','server02','server03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KITTY_NET_VPN_TEST_SERVER_ENTID': idmap,
    'KITTY_NET_VPN_TEST_LIVE': 'FALSE',
    'KITTY_NET_VPN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['KITTY_NET_VPN_TEST_SERVER_ENTID']

  const live = 'TRUE' === env.KITTY_NET_VPN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KITTY_NET_VPN_TEST_SERVER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new KittyNetVpnSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.KITTY_NET_VPN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
