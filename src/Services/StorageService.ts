/* eslint-disable no-restricted-syntax */
import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

@Injectable()
export class SupabaseStorageService {
    private readonly s3Client: S3Client;

    private readonly bucketName = 'chess'; // Cambia por el nombre de tu bucket

    constructor() {
        this.s3Client = new S3Client({
            forcePathStyle: true,
            region: 'us-west-1', // Cambia por la región de tu bucket
            endpoint: 'https://grdxxwzlttwcpntlfide.supabase.co/storage/v1/s3', // Endpoint de Supabase
            credentials: {
                accessKeyId: '82d6f0e7ed33fdfa6623194004f04ccd', // Access Key
                secretAccessKey: 'f7cefeddd578efcb61309b27fd79dbbeb0816d1aefa23fc2c16a9cede7ccf72e', // Secret Key
            },
        });
    }

    async uploadFile(key: string, file: Buffer, contentType: string) {
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: key,
            Body: file,
            ContentType: contentType,
        });
        return this.s3Client.send(command);
    }

    async getFile(key: string): Promise<Buffer> {
        const command = new GetObjectCommand({
            Bucket: this.bucketName,
            Key: key,
        });

        const response = await this.s3Client.send(command);

        // Convertir el ReadableStream en un Buffer
        const chunks: any[] = [];
        const stream = response.Body as Readable;
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        return Buffer.concat(chunks);
    }

    async deleteFile(key: string) {
        const command = new DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: key,
        });
        return this.s3Client.send(command);
    }
}
