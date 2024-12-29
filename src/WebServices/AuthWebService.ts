import { GrpcWebServices } from './GrpcWebService';

export class AuthWebService extends GrpcWebServices {
    constructor() {
        super('auth.proto', 'AuthService', process.env.AUTH_GRPC_URL || 'localhost:50051');
    }

    async login(email: string, password: string): Promise<any> {
        const payload = { email, password };
        return this.call<any, typeof payload>('Login', payload);
    }

    async validateToken(token: string): Promise<any> {
        const payload = { token };
        return this.call<any, typeof payload>('ValidateToken', payload);
    }
}
