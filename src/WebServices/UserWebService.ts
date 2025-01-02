import UserRequest from 'src/Models/Request/UserRequest';
import { GrpcWebServices } from './GrpcWebService';

export class UserWebService extends GrpcWebServices {
    constructor() {
        super('auth.proto', 'UserService', process.env.AUTH_GRPC_URL || 'localhost:50051');
    }

    async createUser(data: UserRequest): Promise<any> {
        return this.call<any, typeof data>('CreateUser', data);
    }
}
