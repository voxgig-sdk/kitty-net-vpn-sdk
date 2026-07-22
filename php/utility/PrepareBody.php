<?php
declare(strict_types=1);

// KittyNetVpn SDK utility: prepare_body

class KittyNetVpnPrepareBody
{
    public static function call(KittyNetVpnContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
