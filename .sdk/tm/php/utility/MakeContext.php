<?php
declare(strict_types=1);

// KittyNetVpn SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class KittyNetVpnMakeContext
{
    public static function call(array $ctxmap, ?KittyNetVpnContext $basectx): KittyNetVpnContext
    {
        return new KittyNetVpnContext($ctxmap, $basectx);
    }
}
