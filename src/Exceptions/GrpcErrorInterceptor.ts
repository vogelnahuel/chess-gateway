import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RpcException } from '@nestjs/microservices';
import * as grpc from '@grpc/grpc-js';

@Injectable()
export class GrpcErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError((error) => {
                if (error instanceof RpcException) {
                    // Propagar el error gRPC directamente
                    return throwError(() => error.getError());
                }

                // Mapear errores de Nest.js a códigos gRPC
                return throwError(() => ({
                    code: grpc.status.INTERNAL,
                    message: error.message || 'Internal server error',
                }));
            }),
        );
    }
}
