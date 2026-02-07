import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): object {
        return {
            message: 'Welcome to Matchakai API',
            version: '1.0.0',
            timestamp: new Date().toISOString(),
        };
    }

    getHealth(): object {
        return {
            status: 'ok',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
        };
    }
}
