import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import Response from '../Helpers/Formatter/Response';
import LoginRequest from '../Models/Request/LoginRequest';
import ExampleResponse from '../Models/Response/ExampleResponse';
import { LoginService } from '../Services/LoginService';

@Controller('login')
export class LoginController {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _loginService: LoginService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async login(@Body() body: LoginRequest): Promise<Response<ExampleResponse>> {
        return this._loginService.login(body);
    }
}
