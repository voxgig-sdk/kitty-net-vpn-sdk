# ProjectName SDK exists test

import pytest
from kittynetvpn_sdk import KittyNetVpnSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = KittyNetVpnSDK.test(None, None)
        assert testsdk is not None
