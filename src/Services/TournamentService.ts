import { Injectable } from '@nestjs/common';
import CreateTournamentDto from 'src/Models/Request/TournamentRequest';
import { TournamentWebService } from 'src/WebServices/TournamentWebService';

@Injectable()
export class TournamentService {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _tournamentWebService: TournamentWebService) {}

    async create(body: CreateTournamentDto) {
        return this._tournamentWebService.createTournament(body);
    }

    async get(id: string) {
        return this._tournamentWebService.getTournament(id);
    }

    async delete(id: string) {
        return this._tournamentWebService.deleteTournament(id);
    }

    async list() {
        return this._tournamentWebService.listTournaments();
    }
}
