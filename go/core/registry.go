package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewServerEntityFunc func(client *KittyNetVpnSDK, entopts map[string]any) KittyNetVpnEntity

