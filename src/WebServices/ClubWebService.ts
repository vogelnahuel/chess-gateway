import { Injectable } from '@nestjs/common';
import CreateClubRequest from 'src/Models/Request/ClubRequest';
import { GrpcWebServices } from './GrpcWebService';

@Injectable()
export class ClubWebService extends GrpcWebServices {
    private readonly serviceName = 'ClubService';

    async createClub(data: CreateClubRequest): Promise<any> {
        this.createGrpcClientWebService('Club.proto', this.serviceName, process.env.CLUB_GRPC_URL || 'localhost:50051');
        return this.call<any, CreateClubRequest>('CreateClub', data);
    }

    async getClub(id: string): Promise<any> {
        this.createGrpcClientWebService('Club.proto', this.serviceName, process.env.CLUB_GRPC_URL || 'localhost:50051');
        return this.call<any, { id: string }>('GetClub', { id });
    }

    async GetClub(): Promise<any[]> {
        this.createGrpcClientWebService('Club.proto', this.serviceName, process.env.CLUB_GRPC_URL || 'localhost:50051');
        return this.call<any, void>('GetClub', null);
    }

    async deleteClub(id: string): Promise<any> {
        this.createGrpcClientWebService('Club.proto', this.serviceName, process.env.CLUB_GRPC_URL || 'localhost:50051');
        return this.call<any, { id: string }>('DeleteClub', { id });
    }
}
