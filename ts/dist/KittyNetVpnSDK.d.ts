import { ServerEntity } from './entity/ServerEntity';
export type * from './KittyNetVpnTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { KittyNetVpnEntityBase } from './KittyNetVpnEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class KittyNetVpnSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Server(entopts?: Record<string, any>): ServerEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): KittyNetVpnSDK;
    tester(testopts?: any, sdkopts?: any): KittyNetVpnSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof KittyNetVpnSDK;
export { stdutil, config, BaseFeature, KittyNetVpnEntityBase, KittyNetVpnSDK, SDK, };
export type { DirectResult };
