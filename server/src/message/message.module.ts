import { Module } from '@nestjs/common';
import { MessageController } from '@app/message/message.controller';
import { MessageService } from '@app/message/message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from '@app/message/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
