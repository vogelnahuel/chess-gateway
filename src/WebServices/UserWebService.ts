import CreateUserDto, { RegisterDto, RegisterMediaDto } from 'src/Models/Request/UserRequest';
import { BadGatewayException } from '@nestjs/common';
import { GrpcWebServices } from './GrpcWebService';

export class UserWebService extends GrpcWebServices {
    async createUser(data: CreateUserDto): Promise<any> {
        let result = null;
        try {
            this.createGrpcClientWebService('User.proto', 'UserService', process.env.AUTH_GRPC_URL || 'localhost:50051');

            result = await this.call('CreateUser', data);
        } catch (error) {
            throw new BadGatewayException(error);
        }
        return result;
    }

    async registerUser(data: RegisterDto): Promise<any> {
        let result = null;

        try {
            this.createGrpcClientWebService('User.proto', 'UserService', process.env.AUTH_GRPC_URL || 'localhost:50051');
            result = this.call<any, typeof data>('RegisterUser', data);
        } catch (error) {
            throw new BadGatewayException(error);
        }
        return result;
    }

    async registerMediaUser(data: RegisterMediaDto): Promise<any> {
        let result = null;

        try {
            this.createGrpcClientWebService('User.proto', 'UserService', process.env.AUTH_GRPC_URL || 'localhost:50051');
            result = this.call<any, typeof data>('RegisterMediaUser', data);
        } catch (error) {
            throw new BadGatewayException(error);
        }
        return result;
    }

    async getUserById(id: number): Promise<any> {
        let result = null;
        try {
            console.log('id', id);
            this.createGrpcClientWebService('User.proto', 'UserService', process.env.AUTH_GRPC_URL || 'localhost:50051');
            result = this.call<any, { id: number }>('GetUserById', { id });
        } catch (error) {
            throw new BadGatewayException(error);
        }
        return result;
    }
}
