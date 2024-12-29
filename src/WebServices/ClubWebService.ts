import { AmqpWebServices } from './AmqpWebService';

export class ClubsWebService extends AmqpWebServices {
    constructor() {
        super('clubs_queue');
    }

    async sendMediaUploadRequest(data: { userId: string; mediaUrl: string }): Promise<void> {
        await this.connect();
        await this.sendMessage(data);
    }

    async onMediaProcessed(callback: (data: { userId: string; status: string }) => void): Promise<void> {
        await this.connect();
        await this.consumeMessage(callback);
    }
}
