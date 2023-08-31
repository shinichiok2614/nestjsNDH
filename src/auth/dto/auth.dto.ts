// dto:data type object

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// export interface AuthDTO {
export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
