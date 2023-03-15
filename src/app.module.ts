import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { configValidationSchema } from '@app/config/config.validation.schema';
import { telegramConfig } from '@app/config/telegram.config';
import { globalConfig } from '@app/config/app.config';
import { AppController } from '@app/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [globalConfig, telegramConfig],
      validationSchema: configValidationSchema,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
