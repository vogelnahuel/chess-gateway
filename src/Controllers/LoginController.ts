import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import Response from 'src/Helpers/Formatter/Response';
import LoginRequest from 'src/Models/Request/LoginRequest';
import ExampleResponse from 'src/Models/Response/ExampleResponse';
import { LoginService } from 'src/Services/LoginService';

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
