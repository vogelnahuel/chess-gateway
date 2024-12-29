import { connect, Channel, Connection, Message } from 'amqplib';

export abstract class AmqpWebServices {
    private _connection: Connection | null = null;

    private _channel: Channel | null = null;

    // eslint-disable-next-line no-empty-function
    constructor(private readonly queue: string) {}

    async connect(): Promise<void> {
        if (!this._connection) {
            this._connection = await connect(process.env.AMQP_URL || 'amqp://localhost');
            this._channel = await this._connection.createChannel();
            await this._channel.assertQueue(this.queue);
        }
    }

    async sendMessage<R = any>(message: R): Promise<void> {
        if (!this._channel) {
            throw new Error('Channel is not initialized. Call connect() first.');
        }
        this._channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(message)));
    }

    async consumeMessage<T = any>(callback: (msg: T) => void): Promise<void> {
        if (!this._channel) {
            throw new Error('Channel is not initialized. Call connect() first.');
        }
        await this._channel.consume(this.queue, (message: Message | null) => {
            if (message) {
                const data: T = JSON.parse(message.content.toString());
                callback(data);
                this._channel?.ack(message);
            }
        });
    }
}
