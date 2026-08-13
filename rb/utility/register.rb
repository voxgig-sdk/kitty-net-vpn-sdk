# KittyNetVpn SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

KittyNetVpnUtility.registrar = ->(u) {
  u.clean = KittyNetVpnUtilities::Clean
  u.done = KittyNetVpnUtilities::Done
  u.make_error = KittyNetVpnUtilities::MakeError
  u.feature_add = KittyNetVpnUtilities::FeatureAdd
  u.feature_hook = KittyNetVpnUtilities::FeatureHook
  u.feature_init = KittyNetVpnUtilities::FeatureInit
  u.fetcher = KittyNetVpnUtilities::Fetcher
  u.make_fetch_def = KittyNetVpnUtilities::MakeFetchDef
  u.make_context = KittyNetVpnUtilities::MakeContext
  u.make_options = KittyNetVpnUtilities::MakeOptions
  u.make_request = KittyNetVpnUtilities::MakeRequest
  u.make_response = KittyNetVpnUtilities::MakeResponse
  u.make_result = KittyNetVpnUtilities::MakeResult
  u.make_point = KittyNetVpnUtilities::MakePoint
  u.make_spec = KittyNetVpnUtilities::MakeSpec
  u.make_url = KittyNetVpnUtilities::MakeUrl
  u.param = KittyNetVpnUtilities::Param
  u.prepare_auth = KittyNetVpnUtilities::PrepareAuth
  u.prepare_body = KittyNetVpnUtilities::PrepareBody
  u.prepare_headers = KittyNetVpnUtilities::PrepareHeaders
  u.prepare_method = KittyNetVpnUtilities::PrepareMethod
  u.prepare_params = KittyNetVpnUtilities::PrepareParams
  u.prepare_path = KittyNetVpnUtilities::PreparePath
  u.prepare_query = KittyNetVpnUtilities::PrepareQuery
  u.graphql_body = KittyNetVpnUtilities::GraphqlBody
  u.graphql_errors = KittyNetVpnUtilities::GraphqlErrors
  u.result_basic = KittyNetVpnUtilities::ResultBasic
  u.result_body = KittyNetVpnUtilities::ResultBody
  u.result_headers = KittyNetVpnUtilities::ResultHeaders
  u.transform_request = KittyNetVpnUtilities::TransformRequest
  u.transform_response = KittyNetVpnUtilities::TransformResponse
}
