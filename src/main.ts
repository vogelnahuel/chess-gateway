import helmet from 'helmet';
import * as BodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './AppModule';
// import { GrpcErrorInterceptor } from './Exceptions/GrpcErrorInterceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // app.useGlobalInterceptors(new GrpcErrorInterceptor());
    const configService = app.get(ConfigService);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );
    app.use(helmet());

    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({ extended: true }));
    app.setGlobalPrefix('api/v1/chess-gateway');
    app.enableCors();
    await app.listen(configService.get<string>('PORT'));
}
bootstrap();
