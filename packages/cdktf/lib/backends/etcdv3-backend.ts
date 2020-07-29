import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, TerraformRemoteStateConfig } from "../terraform-remote-state";

export class EtcdV3Backend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: EtcdV3BackendProps) {
        super(scope, "backend", "etcdv3");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class DataTerraformRemoteStateEtcdV3 extends TerraformRemoteState {
    constructor(scope: Construct, id: string, private readonly props: EtcdV3BackendProps, config?: TerraformRemoteStateConfig) {
        super(scope, id, "etcdv3", config);
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface EtcdV3BackendProps {
    readonly endpoints: string[];
    readonly username?: string;
    readonly password?: string;
    readonly prefix?: string;
    readonly lock?: boolean;
    readonly cacertPath?: string;
    readonly certPath?: string;
    readonly keyPath?: string;
}