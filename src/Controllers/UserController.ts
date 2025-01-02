import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import Response from 'src/Helpers/Formatter/Response';
import UserRequest from 'src/Models/Request/UserRequest';
import ExampleResponse from 'src/Models/Response/ExampleResponse';
import { UserService } from 'src/Services/UserService';

@Controller('user')
export class UserController {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _userService: UserService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async getPong(@Body() body: UserRequest): Promise<Response<ExampleResponse>> {
        return this._userService.create(body);
    }
}
