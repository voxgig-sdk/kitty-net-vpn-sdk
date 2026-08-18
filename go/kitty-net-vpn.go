package voxgigkittynetvpnsdk

import (
	"github.com/voxgig-sdk/kitty-net-vpn-sdk/go/core"
	"github.com/voxgig-sdk/kitty-net-vpn-sdk/go/entity"
	"github.com/voxgig-sdk/kitty-net-vpn-sdk/go/feature"
	_ "github.com/voxgig-sdk/kitty-net-vpn-sdk/go/utility"
)

// Type aliases preserve external API.
type KittyNetVpnSDK = core.KittyNetVpnSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type KittyNetVpnEntity = core.KittyNetVpnEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type KittyNetVpnError = core.KittyNetVpnError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewServerEntityFunc = func(client *core.KittyNetVpnSDK, entopts map[string]any) core.KittyNetVpnEntity {
		return entity.NewServerEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewKittyNetVpnSDK = core.NewKittyNetVpnSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewKittyNetVpnSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *KittyNetVpnSDK  { return NewKittyNetVpnSDK(nil) }
func Test() *KittyNetVpnSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
