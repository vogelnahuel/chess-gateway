import { IsNotEmpty, IsString, IsInt, Max, Min, IsUUID } from 'class-validator';

export default class CreateReviewRequest {
    @IsInt()
    @Min(1)
    @Max(5)
    rating: number;

    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsInt()
    @IsNotEmpty()
    userId: number;

    @IsUUID()
    @IsNotEmpty()
    clubId: string;
}
