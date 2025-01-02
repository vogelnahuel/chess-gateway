// src/Services/GrpcWebServices.ts
import * as grpc from '@grpc/grpc-js';
import { createGrpcClient } from '../Helpers/Utils/interceptedGrpc';

export abstract class GrpcWebServices {
    private client: any;

    createGrpcClientWebService(protoFileName: string, serviceName: string, address: string): any {
        return createGrpcClient(protoFileName, serviceName, address);
    }

    protected async call<R = any, P = any>(method: string, payload: P): Promise<R> {
        return new Promise((resolve, reject) => {
            this.client[method](payload, (err: grpc.ServiceError, response: R) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });
    }
}
