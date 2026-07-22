# frozen_string_literal: true

# Typed models for the KittyNetVpn SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Server entity data model.
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] host
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [Integer, nil]
#
# @!attribute [rw] protocol
#   @return [String, nil]
Server = Struct.new(
  :country,
  :host,
  :id,
  :location,
  :name,
  :port,
  :protocol,
  keyword_init: true
)

# Request payload for Server#list.
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] host
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [Integer, nil]
#
# @!attribute [rw] protocol
#   @return [String, nil]
ServerListMatch = Struct.new(
  :country,
  :host,
  :id,
  :location,
  :name,
  :port,
  :protocol,
  keyword_init: true
)

