<?php
declare(strict_types=1);

// KittyNetVpn SDK exists test

require_once __DIR__ . '/../kittynetvpn_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = KittyNetVpnSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
