# KittyNetVpn SDK feature factory

from kittynetvpn_sdk.feature.base_feature import KittyNetVpnBaseFeature
from kittynetvpn_sdk.feature.test_feature import KittyNetVpnTestFeature


def _make_feature(name):
    features = {
        "base": lambda: KittyNetVpnBaseFeature(),
        "test": lambda: KittyNetVpnTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
