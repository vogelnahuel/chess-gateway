import CreateTournamentDto from 'src/Models/Request/TournamentRequest';
import { GrpcWebServices } from './GrpcWebService';

export class TournamentWebService extends GrpcWebServices {
    async createTournament(data: CreateTournamentDto) {
        this.createGrpcClientWebService('Tournament.proto', 'TournamentService', process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, CreateTournamentDto>('CreateTournament', data);
    }

    async getTournament(id: string) {
        this.createGrpcClientWebService('Tournament.proto', 'TournamentService', process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, { id: string }>('GetTournament', { id });
    }

    async deleteTournament(id: string) {
        this.createGrpcClientWebService('Tournament.proto', 'TournamentService', process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<{ message: string }, { id: string }>('DeleteTournament', { id });
    }

    async listTournaments() {
        this.createGrpcClientWebService('Tournament.proto', 'TournamentService', process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<{ tournaments: any[] }, NonNullable<unknown>>('ListTournaments', {});
    }
}
