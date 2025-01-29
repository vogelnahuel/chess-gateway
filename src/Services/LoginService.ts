import { Injectable } from '@nestjs/common';
import LoginRequest from '../Models/Request/LoginRequest';
import { LoginWebService } from '../WebServices/LoginWebService';

@Injectable()
export class LoginService {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _loginWebService: LoginWebService) {}

    async login(body: LoginRequest) {
        return this._loginWebService.login(body);
    }
}
