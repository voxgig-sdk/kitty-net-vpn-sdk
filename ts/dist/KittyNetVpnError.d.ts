import { Context } from './Context';
declare class KittyNetVpnError extends Error {
    isKittyNetVpnError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { KittyNetVpnError };
