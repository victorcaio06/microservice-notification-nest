import { MailerService } from '@nestjs-modules/mailer';
import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

type NotificationDTO = {
  name: string;
  email: string;
  title: string;
  description: string | null;
  start_at: Date | null;
  end_at: Date | null;
};

@Controller()
export class AppController {
  constructor(private readonly mailerService: MailerService) {}

  @EventPattern('notification-task')
  async taskNotification(data: NotificationDTO) {
    console.log('=== Mensagem recebida ===');

    const result = await this.mailerService.sendMail({
      to: data.email,
      from: 'manager@task.com.br',
      subject: 'Notificação de tarefa',
      text: `Olá ${data.name}! Você tem uma tarefa em inicia às ${data.start_at} até às ${data.end_at} `,
    });

    console.log(
      '🚀 ~ file: app.controller.ts:28 ~ AppController ~ taskNotification ~ result:',
      result,
    );
  }
}
