import { JoinGameRequest } from 'src/Models/Request/GameRequest';
import { AxiosWebServices } from './AxiosWebServices';

export class GameWebService extends AxiosWebServices {
    async joinGame(data: JoinGameRequest): Promise<any> {
        const url: string = `http://localhost:33004/api/v1/chess-games-ms/matchmaking/join`;
        const config = this.buildAxiosRequestConfig();
        const response = await this.post(url, data, config);
        return response.result;
    }
}
