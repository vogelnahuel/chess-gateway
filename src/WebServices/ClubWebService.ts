import { Injectable } from '@nestjs/common';
import CreateClubRequest from 'src/Models/Request/ClubRequest';
import { GrpcWebServices } from './GrpcWebService';

@Injectable()
export class ClubWebService extends GrpcWebServices {
    private readonly serviceName = 'ClubService';

    async createClub(data: CreateClubRequest): Promise<any> {
        this.createGrpcClientWebService('Club.proto', this.serviceName, process.env.CLUB_GRPC_URL || 'localhost:50052');
        return this.call<any, CreateClubRequest>('CreateClub', data);
    }

    async GetClub(): Promise<any[]> {
        try {
            this.createGrpcClientWebService('Club.proto', this.serviceName, process.env.CLUB_GRPC_URL || 'localhost:50052');
            const response = await this.call<any, void>('GetClubs', {} as any);
            return response.clubs;
        } catch (error) {
            console.log(error);
        }
        return [];
    }

    async deleteClub(id: string): Promise<any> {
        this.createGrpcClientWebService('Club.proto', this.serviceName, process.env.CLUB_GRPC_URL || 'localhost:50052');
        return this.call<any, { id: string }>('DeleteClub', { id });
    }
}
