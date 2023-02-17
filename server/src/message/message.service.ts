import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateMessageDto } from "@app/message/dto/createMessage.dto";
import { MessageEntity } from "@app/message/message.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { sign } from "jsonwebtoken";
import { IMessageResponse } from "@app/message/types/IMessageResponse";
import { compare } from "bcrypt";

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>
  ) {}

  async createMessage(
    createMessageDto: CreateMessageDto
  ): Promise<MessageEntity> {
    const newMessage = new MessageEntity();
    Object.assign(newMessage, createMessageDto);
    return await this.messageRepository.save(newMessage);
  }

  buildMessageResponse(message: MessageEntity): IMessageResponse {
    return {
      message: {
        ...message,
      },
    };
  }

  async getMessages(): Promise<MessageEntity[]> {
    return await this.messageRepository.find();
  }
}
