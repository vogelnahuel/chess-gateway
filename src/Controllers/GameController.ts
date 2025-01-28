import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { JoinGameRequest } from 'src/Models/Request/GameRequest';
import { GameService } from 'src/Services/GameService';

@Controller('game')
export class GameController {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _gameService: GameService) {}

    @Post('join')
    @HttpCode(HttpStatus.OK)
    async joinGame(@Body() body: JoinGameRequest) {
        return this._gameService.joinGame(body);
    }
}
