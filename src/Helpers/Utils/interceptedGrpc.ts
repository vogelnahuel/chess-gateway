// src/Helpers/GrpcClient.ts
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { join } from 'path';

export function createGrpcClient(protoFileName: string, serviceName: string, address: string): any {
    if (!protoFileName || typeof protoFileName !== 'string') {
        throw new Error('Invalid protoFileName: Must be a non-empty string.');
    }
    if (!serviceName || typeof serviceName !== 'string') {
        throw new Error('Invalid serviceName: Must be a non-empty string.');
    }
    if (!address || typeof address !== 'string') {
        throw new Error('Invalid address: Must be a non-empty string.');
    }

    const protoPath = join(__dirname, '../Protos', protoFileName);
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

    return new Service(address, grpc.credentials.createInsecure());
}
