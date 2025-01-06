import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsUrl, IsEmail } from 'class-validator';

export default class CreateClubRequest {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    province: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsEmail()
    email: string;

    @IsUrl()
    @IsOptional()
    website?: string;

    @IsBoolean()
    isFederated: boolean;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    openingHours?: string;

    @IsString()
    @IsOptional()
    mapLocation?: string;
}
