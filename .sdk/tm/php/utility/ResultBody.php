<?php
declare(strict_types=1);

// KittyNetVpn SDK utility: result_body

class KittyNetVpnResultBody
{
    public static function call(KittyNetVpnContext $ctx): ?KittyNetVpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
