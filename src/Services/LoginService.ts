import { Injectable } from '@nestjs/common';
import LoginRequest from 'src/Models/Request/LoginRequest';
import { LoginWebService } from 'src/WebServices/LoginWebService';

@Injectable()
export class LoginService {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _loginWebService: LoginWebService) {}

    async login(body: LoginRequest) {
        return this._loginWebService.login(body);
    }
}
