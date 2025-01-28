/* eslint-disable no-empty-function */
import { Injectable } from '@nestjs/common';
import { BookWebService } from 'src/WebServices/BookWebService';
import { CreateBookDto } from 'src/Models/Request/BookRequest';
import { SupabaseStorageService } from './StorageService';

@Injectable()
export class BookService {
    constructor(
        private readonly _bookWebService: BookWebService,
        private readonly _supabaseStorageService: SupabaseStorageService,
    ) {}

    async create(body: CreateBookDto) {
        return this._bookWebService.createBook(body);
    }

    async getBooks() {
        const books = await this._bookWebService.getBooks();

        const booksLogo = await Promise.all(
            books.map(async (book: any) => {
                let logoBuffer: any = null;
                if (book.image) {
                    logoBuffer = await this._supabaseStorageService.getFile(book.image);
                }
                return {
                    ...book,
                    image: logoBuffer?.toString('base64') || null,
                };
            }),
        );

        return { books: booksLogo };
    }
}
