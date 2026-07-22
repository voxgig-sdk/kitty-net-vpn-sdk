package core

type KittyNetVpnError struct {
	IsKittyNetVpnError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewKittyNetVpnError(code string, msg string, ctx *Context) *KittyNetVpnError {
	return &KittyNetVpnError{
		IsKittyNetVpnError: true,
		Sdk:              "KittyNetVpn",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *KittyNetVpnError) Error() string {
	return e.Msg
}
