import { Injectable } from '@nestjs/common';
import { BookWebService } from 'src/WebServices/BookWebService';
import { CreateBookDto } from 'src/Models/Request/BookRequest';

@Injectable()
export class BookService {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _bookWebService: BookWebService) {}

    async create(body: CreateBookDto) {
        return this._bookWebService.createBook(body);
    }

    async getBooks() {
        return this._bookWebService.getBooks();
    }
}
