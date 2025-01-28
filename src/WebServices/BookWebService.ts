import { BadGatewayException } from '@nestjs/common';
import { CreateBookDto } from 'src/Models/Request/BookRequest';
import { GrpcWebServices } from './GrpcWebService';

export class BookWebService extends GrpcWebServices {
    async createBook(data: CreateBookDto): Promise<any> {
        let result = null;
        try {
            this.createGrpcClientWebService('Book.proto', 'BookService', process.env.AUTH_GRPC_URL || 'localhost:50051');

            result = await this.call('CreateBook', data);
        } catch (error) {
            throw new BadGatewayException(error);
        }
        return result;
    }

    async getBooks(): Promise<any> {
        let result = null;
        try {
            this.createGrpcClientWebService('Book.proto', 'BookService', process.env.AUTH_GRPC_URL || 'localhost:50051');
            result = await this.call('GetBooks', {});
        } catch (error) {
            throw new BadGatewayException(error);
        }
        return result;
    }
}
