import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { join } from 'path';

export abstract class GrpcWebServices {
    private _client: any;

    constructor(protoFileName: string, serviceName: string, address: string) {
        const protoPath = join(__dirname, '../protos', protoFileName);
        const packageDefinition = protoLoader.loadSync(protoPath, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
        });

        const proto = grpc.loadPackageDefinition(packageDefinition) as any;

        const Service = proto[serviceName];
        if (!Service) {
            throw new Error(`Service ${serviceName} not found in proto file.`);
        }

        this._client = new Service(address, grpc.credentials.createInsecure());
    }

    protected async call<R = any, P = any>(method: string, payload: P): Promise<R> {
        return new Promise((resolve, reject) => {
            this._client[method](payload, (err: grpc.ServiceError, response: R) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });
    }
}
