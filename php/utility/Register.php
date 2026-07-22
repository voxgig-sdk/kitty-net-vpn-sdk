<?php
declare(strict_types=1);

// KittyNetVpn SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

KittyNetVpnUtility::setRegistrar(function (KittyNetVpnUtility $u): void {
    $u->clean = [KittyNetVpnClean::class, 'call'];
    $u->done = [KittyNetVpnDone::class, 'call'];
    $u->make_error = [KittyNetVpnMakeError::class, 'call'];
    $u->feature_add = [KittyNetVpnFeatureAdd::class, 'call'];
    $u->feature_hook = [KittyNetVpnFeatureHook::class, 'call'];
    $u->feature_init = [KittyNetVpnFeatureInit::class, 'call'];
    $u->fetcher = [KittyNetVpnFetcher::class, 'call'];
    $u->make_fetch_def = [KittyNetVpnMakeFetchDef::class, 'call'];
    $u->make_context = [KittyNetVpnMakeContext::class, 'call'];
    $u->make_options = [KittyNetVpnMakeOptions::class, 'call'];
    $u->make_request = [KittyNetVpnMakeRequest::class, 'call'];
    $u->make_response = [KittyNetVpnMakeResponse::class, 'call'];
    $u->make_result = [KittyNetVpnMakeResult::class, 'call'];
    $u->make_point = [KittyNetVpnMakePoint::class, 'call'];
    $u->make_spec = [KittyNetVpnMakeSpec::class, 'call'];
    $u->make_url = [KittyNetVpnMakeUrl::class, 'call'];
    $u->param = [KittyNetVpnParam::class, 'call'];
    $u->prepare_auth = [KittyNetVpnPrepareAuth::class, 'call'];
    $u->prepare_body = [KittyNetVpnPrepareBody::class, 'call'];
    $u->prepare_headers = [KittyNetVpnPrepareHeaders::class, 'call'];
    $u->prepare_method = [KittyNetVpnPrepareMethod::class, 'call'];
    $u->prepare_params = [KittyNetVpnPrepareParams::class, 'call'];
    $u->prepare_path = [KittyNetVpnPreparePath::class, 'call'];
    $u->prepare_query = [KittyNetVpnPrepareQuery::class, 'call'];
    $u->result_basic = [KittyNetVpnResultBasic::class, 'call'];
    $u->result_body = [KittyNetVpnResultBody::class, 'call'];
    $u->result_headers = [KittyNetVpnResultHeaders::class, 'call'];
    $u->transform_request = [KittyNetVpnTransformRequest::class, 'call'];
    $u->transform_response = [KittyNetVpnTransformResponse::class, 'call'];
});
