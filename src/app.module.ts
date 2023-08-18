import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: { user: 'eveline56@ethereal.email', pass: 'JhkTPvRGHvpwVsf4WE' },
        secure: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
