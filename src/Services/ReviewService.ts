import { Injectable } from '@nestjs/common';
import CreateReviewRequest from 'src/Models/Request/ReviewRequest';
import { ReviewWebService } from '../WebServices/ReviewWebService';
import Response from '../Helpers/Formatter/Response';

@Injectable()
export class ReviewService {
    // eslint-disable-next-line no-empty-function
    constructor(private readonly reviewWebService: ReviewWebService) {}

    async create(createReviewDto: CreateReviewRequest) {
        const result = await this.reviewWebService.createReview(createReviewDto);
        return new Response(result);
    }

    async getById(id: string) {
        const result = await this.reviewWebService.getReview(id);
        return new Response(result);
    }

    async list(filters: { clubId?: string }) {
        const result = await this.reviewWebService.listReviews(filters.clubId);
        return new Response(result);
    }

    async delete(id: string) {
        const result = await this.reviewWebService.deleteReview(id);
        return new Response(result);
    }
}
