import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { MessageService } from "@app/message/message.service";
import { CreateMessageDto } from "@app/message/dto/createMessage.dto";
import { IMessageResponse } from "./types/IMessageResponse";
import { TMessage } from "@app/message/types/TMessage";

@Controller("messages")
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post("message")
  @UsePipes(new ValidationPipe())
  async createMessage(
    @Body()
    createMessageDto: CreateMessageDto
  ): Promise<IMessageResponse> {
    const message = await this.messageService.createMessage(createMessageDto);
    return this.messageService.buildMessageResponse(message);
  }

  @Get()
  async getMessages(): Promise<TMessage[]> {
    return await this.messageService.getMessages();
  }
}
