/* eslint-disable no-empty-function */
import { Injectable } from '@nestjs/common';
import CreateClubRequest from 'src/Models/Request/ClubRequest';
import { ClubWebService } from '../WebServices/ClubWebService';
import { SupabaseStorageService } from './StorageService';

@Injectable()
export class ClubService {
    constructor(
        private readonly clubWebService: ClubWebService,
        private readonly _supabaseStorageService: SupabaseStorageService,
    ) {}

    async create(data: CreateClubRequest): Promise<any> {
        return this.clubWebService.createClub(data);
    }

    async GetClub(): Promise<any> {
        const clubs = await this.clubWebService.GetClub();

        const clubsLogo = await Promise.all(
            clubs.map(async (club) => {
                let logoBuffer: any = null;
                if (club.logo) {
                    logoBuffer = await this._supabaseStorageService.getFile(club.logo);
                }
                return {
                    ...club,
                    logo: logoBuffer?.toString('base64') || null, // Convertir el Buffer a base64 para enviarlo en JSON
                };
            }),
        );

        return { clubs: clubsLogo };
    }

    async delete(id: string): Promise<any> {
        return this.clubWebService.deleteClub(id);
    }
}
