import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export default class ExampleRequest {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    refresh_token: string;

    @IsBoolean()
    is_active: boolean;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    location_s3: string;

    @IsNotEmpty()
    @IsString()
    verification_code: string;

    @IsString()
    expire_verification_code: string;
}
