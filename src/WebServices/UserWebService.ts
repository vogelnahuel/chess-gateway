import CreateUserDto from 'src/Models/Request/UserRequest';
import { GrpcWebServices } from './GrpcWebService';

export class UserWebService extends GrpcWebServices {
    async createUser(data: CreateUserDto): Promise<any> {
        console.log('data', data);
        this.createGrpcClientWebService('User.proto', 'UserService', process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, typeof data>('CreateUser', data);
    }
}
