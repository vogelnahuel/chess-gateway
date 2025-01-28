import { Injectable } from '@nestjs/common';
import { JoinGameRequest } from 'src/Models/Request/GameRequest';
import { GameWebService } from 'src/WebServices/GameWebService';

@Injectable()
export class GameService {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly gameWebService: GameWebService) {}

    async joinGame(game: JoinGameRequest) {
        const result = await this.gameWebService.joinGame(game);
        return new Response(result);
    }
}
