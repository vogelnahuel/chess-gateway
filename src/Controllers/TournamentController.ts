import { Body, Controller, Get, Param, Post, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import CreateTournamentDto from 'src/Models/Request/TournamentRequest';
import { TournamentService } from 'src/Services/TournamentService';

@Controller('tournament')
export class TournamentController {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly _tournamentService: TournamentService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: CreateTournamentDto) {
        return this._tournamentService.create(body);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async get(@Param('id') id: string) {
        return this._tournamentService.get(id);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string) {
        return this._tournamentService.delete(id);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async list() {
        return this._tournamentService.list();
    }
}
