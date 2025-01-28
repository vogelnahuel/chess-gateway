import { IsNotEmpty } from 'class-validator';

export class JoinGameRequest {
    @IsNotEmpty()
    playerId: number;
}
