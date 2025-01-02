import { Injectable } from '@nestjs/common';
import UserRequest from 'src/Models/Request/UserRequest';
import { UserWebService } from 'src/WebServices/UserWebService';

@Injectable()
export class UserService {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _userWebService: UserWebService) {}

    async create(body: UserRequest) {
        return this._userWebService.createUser(body);
    }
}
