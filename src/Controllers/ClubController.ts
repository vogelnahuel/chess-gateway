import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import CreateClubRequest from 'src/Models/Request/ClubRequest';
import { ClubService } from '../Services/ClubService';

@Controller('club')
export class ClubController {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly clubService: ClubService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createClubDto: CreateClubRequest) {
        return this.clubService.create(createClubDto);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getById(@Param('id') id: string) {
        return this.clubService.getById(id);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async GetClub() {
        return this.clubService.GetClub();
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string) {
        return this.clubService.delete(id);
    }
}
