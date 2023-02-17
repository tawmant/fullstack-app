import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly message: string;
}
