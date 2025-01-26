import CreateUserDto, { RegisterDto, RegisterMediaDto } from 'src/Models/Request/UserRequest';
import { GrpcWebServices } from './GrpcWebService';

export class UserWebService extends GrpcWebServices {
    async createUser(data: CreateUserDto): Promise<any> {
        this.createGrpcClientWebService('User.proto', 'UserService', process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, typeof data>('CreateUser', data);
    }

    async registerUser(data: RegisterDto): Promise<any> {
        this.createGrpcClientWebService('User.proto', 'UserService', process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, typeof data>('RegisterUser', data);
    }

    async registerMediaUser(data: RegisterMediaDto): Promise<any> {
        this.createGrpcClientWebService('User.proto', 'UserService', process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, typeof data>('RegisterMediaUser', data);
    }
}
