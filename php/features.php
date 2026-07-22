<?php
declare(strict_types=1);

// KittyNetVpn SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class KittyNetVpnFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new KittyNetVpnBaseFeature();
            case "test":
                return new KittyNetVpnTestFeature();
            default:
                return new KittyNetVpnBaseFeature();
        }
    }
}
