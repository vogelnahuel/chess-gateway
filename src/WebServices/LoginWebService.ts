import LoginRequest from 'src/Models/Request/LoginRequest';
import { GrpcWebServices } from './GrpcWebService';

export class LoginWebService extends GrpcWebServices {
    async login(data: LoginRequest): Promise<any> {
        this.createGrpcClientWebService('Login.proto', 'AuthService', process.env.AUTH_GRPC_URL || 'localhost:50051');
        const result = await this.call('Login', data);
        console.log('result', result);
        return result;
    }
}
