# KittyNetVpn SDK feature factory

from kittynetvpn_sdk.feature.base_feature import KittyNetVpnBaseFeature
from kittynetvpn_sdk.feature.ratelimit_feature import KittyNetVpnRatelimitFeature
from kittynetvpn_sdk.feature.retry_feature import KittyNetVpnRetryFeature
from kittynetvpn_sdk.feature.test_feature import KittyNetVpnTestFeature
from kittynetvpn_sdk.feature.timeout_feature import KittyNetVpnTimeoutFeature


_FEATURES = {
    "base": lambda: KittyNetVpnBaseFeature(),
    "ratelimit": lambda: KittyNetVpnRatelimitFeature(),
    "retry": lambda: KittyNetVpnRetryFeature(),
    "test": lambda: KittyNetVpnTestFeature(),
    "timeout": lambda: KittyNetVpnTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
