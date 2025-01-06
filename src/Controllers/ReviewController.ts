import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import CreateReviewRequest from 'src/Models/Request/ReviewRequest';
import { ReviewService } from '../Services/ReviewService';

@Controller('review')
export class ReviewController {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly reviewService: ReviewService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createReviewDto: CreateReviewRequest) {
        return this.reviewService.create(createReviewDto);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getById(@Param('id') id: string) {
        return this.reviewService.getById(id);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async list(@Query('club_id') clubId: string) {
        return this.reviewService.list({ clubId });
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string) {
        return this.reviewService.delete(id);
    }
}
