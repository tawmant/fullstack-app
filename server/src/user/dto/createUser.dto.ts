import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  readonly username;

  @IsNotEmpty()
  @IsEmail()
  readonly email;

  @IsNotEmpty()
  readonly password;
}
