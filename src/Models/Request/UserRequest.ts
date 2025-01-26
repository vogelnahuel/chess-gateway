/* eslint-disable max-classes-per-file */
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export default class CreateUserDto {
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

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export class RegisterMediaDto {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    picture: string;

    @IsNotEmpty()
    given_name: string;

    @IsNotEmpty()
    family_name: string;

    @IsNotEmpty()
    sub: string;
}
