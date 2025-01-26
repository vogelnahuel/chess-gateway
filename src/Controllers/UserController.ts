import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import Response from 'src/Helpers/Formatter/Response';
import CreateUserDto, { RegisterDto, RegisterMediaDto } from 'src/Models/Request/UserRequest';
import ExampleResponse from 'src/Models/Response/ExampleResponse';
import { UserService } from 'src/Services/UserService';

@Controller('user')
export class UserController {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _userService: UserService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async create(@Body() body: CreateUserDto): Promise<Response<ExampleResponse>> {
        return this._userService.create(body);
    }

    @Post('/register')
    @HttpCode(HttpStatus.OK)
    async register(@Body() body: RegisterDto): Promise<Response<ExampleResponse>> {
        return this._userService.register(body);
    }

    @Post('/register-media')
    @HttpCode(HttpStatus.OK)
    async registerMedia(@Body() body: RegisterMediaDto): Promise<Response<ExampleResponse>> {
        return this._userService.registerMedia(body);
    }
}
