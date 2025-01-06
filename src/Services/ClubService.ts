import { Injectable } from '@nestjs/common';
import CreateClubRequest from 'src/Models/Request/ClubRequest';
import { ClubWebService } from '../WebServices/ClubWebService';

@Injectable()
export class ClubService {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly clubWebService: ClubWebService) {}

    async create(data: CreateClubRequest): Promise<any> {
        return this.clubWebService.createClub(data);
    }

    async getById(id: string): Promise<any> {
        return this.clubWebService.getClub(id);
    }

    async list(filters: { city?: string; province?: string }): Promise<any> {
        return this.clubWebService.listClubs(filters.city, filters.province);
    }

    async delete(id: string): Promise<any> {
        return this.clubWebService.deleteClub(id);
    }
}
