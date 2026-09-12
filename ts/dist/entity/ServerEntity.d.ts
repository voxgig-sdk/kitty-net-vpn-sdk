import { KittyNetVpnEntityBase } from '../KittyNetVpnEntityBase';
import type { KittyNetVpnSDK } from '../KittyNetVpnSDK';
import type { Control } from '../types';
import type { Server, ServerListMatch } from '../KittyNetVpnTypes';
declare class ServerEntity extends KittyNetVpnEntityBase<Server> {
    constructor(client: KittyNetVpnSDK, entopts: any);
    make(this: ServerEntity): ServerEntity;
    list(this: any, reqmatch?: ServerListMatch, ctrl?: Control): Promise<ServerEntity[]>;
}
export { ServerEntity };
