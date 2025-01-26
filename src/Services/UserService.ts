import { Injectable } from '@nestjs/common';
import CreateUserDto, { RegisterDto, RegisterMediaDto } from 'src/Models/Request/UserRequest';
import { UserWebService } from 'src/WebServices/UserWebService';

@Injectable()
export class UserService {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _userWebService: UserWebService) {}

    async create(body: CreateUserDto) {
        return this._userWebService.createUser(body);
    }

    async register(body: RegisterDto) {
        return this._userWebService.registerUser(body);
    }

    async registerMedia(body: RegisterMediaDto) {
        return this._userWebService.registerMediaUser(body);
    }
}
