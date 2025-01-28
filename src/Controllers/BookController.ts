import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import Response from 'src/Helpers/Formatter/Response';
import { CreateBookDto } from 'src/Models/Request/BookRequest';
import ExampleResponse from 'src/Models/Response/ExampleResponse';
import { BookService } from 'src/Services/BookService';

@Controller('book')
export class BookController {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _bookService: BookService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async create(@Body() body: CreateBookDto): Promise<Response<ExampleResponse>> {
        return this._bookService.create(body);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getBooks() {
        return this._bookService.getBooks();
    }
}
