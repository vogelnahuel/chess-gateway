import LoginRequest from 'src/Models/Request/LoginRequest';
import { BadGatewayException } from '@nestjs/common';
import { GrpcWebServices } from './GrpcWebService';

export class LoginWebService extends GrpcWebServices {
    async login(data: LoginRequest): Promise<any> {
        let result = null;
        try {
            this.createGrpcClientWebService('Login.proto', 'AuthService', process.env.AUTH_GRPC_URL || 'localhost:50051');
            result = await this.call('Login', data);
        } catch (error) {
            throw new BadGatewayException(error);
        }
        return result;
    }
}
