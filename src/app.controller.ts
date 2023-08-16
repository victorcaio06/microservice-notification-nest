import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('notification-task')
  taskNotification(data: any) {
    console.log('Mensagem recebida');
    console.log(
      '🚀 ~ file: app.controller.ts:16 ~ AppController ~ taskNotification ~ data:',
      data,
    );
  }
}
