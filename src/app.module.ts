import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import Joi from 'joi';

import { telegramConfig } from '@app/config/telegram.config';
import { globalConfig } from '@app/config/app.config';
import { AppController } from '@app/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [globalConfig, telegramConfig],
      validationSchema: Joi.object({
        ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        TELEGRAM_TOKEN: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
