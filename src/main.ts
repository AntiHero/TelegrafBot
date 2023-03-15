import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.listen(PORT || 8000, '0.0.0.0');
}

bootstrap();
