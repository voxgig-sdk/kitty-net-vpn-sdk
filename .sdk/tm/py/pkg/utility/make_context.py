# KittyNetVpn SDK utility: make_context

from projectname_sdk.core.context import KittyNetVpnContext


def make_context_util(ctxmap, basectx):
    return KittyNetVpnContext(ctxmap, basectx)
