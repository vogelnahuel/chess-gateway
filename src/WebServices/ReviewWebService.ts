import CreateReviewRequest from 'src/Models/Request/ReviewRequest';
import { GrpcWebServices } from './GrpcWebService';

export class ReviewWebService extends GrpcWebServices {
    private readonly serviceName = 'ReviewService';

    async createReview(data: CreateReviewRequest): Promise<any> {
        this.createGrpcClientWebService('Review.proto', this.serviceName, process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, typeof data>('CreateReview', data);
    }

    async getReview(id: string): Promise<any> {
        this.createGrpcClientWebService('Review.proto', this.serviceName, process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, { id: string }>('GetReview', { id });
    }

    async listReviews(clubId?: string): Promise<any> {
        this.createGrpcClientWebService('Review.proto', this.serviceName, process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, { club_id?: string }>('ListReviews', { club_id: clubId });
    }

    async deleteReview(id: string): Promise<any> {
        this.createGrpcClientWebService('Review.proto', this.serviceName, process.env.AUTH_GRPC_URL || 'localhost:50051');
        return this.call<any, { id: string }>('DeleteReview', { id });
    }
}
