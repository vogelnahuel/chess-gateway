import { BadGatewayException } from '@nestjs/common';
import { CreateBookDto } from 'src/Models/Request/BookRequest';
import { GrpcWebServices } from './GrpcWebService';

export class BookWebService extends GrpcWebServices {
    private readonly serviceName = 'BookService';

    async createBook(data: CreateBookDto): Promise<any> {
        let result = null;
        try {
            this.createGrpcClientWebService('Book.proto', this.serviceName, process.env.AUTH_GRPC_URL || 'localhost:50051');

            result = await this.call('CreateBook', data);
        } catch (error) {
            throw new BadGatewayException(error);
        }
        return result;
    }

    async getBooks(): Promise<any> {
        let result = null;
        try {
            this.createGrpcClientWebService('Book.proto', this.serviceName, process.env.AUTH_GRPC_URL || 'localhost:50051');
            result = await this.call('GetBooks', {});
        } catch (error) {
            throw new BadGatewayException(error);
        }
        return result.books;
    }
}
