import { EAccountStatus } from './../../../shared/enums/EAccountStatus';
import { EMaritalStatus } from './../../../shared/enums/EMaritalStatus';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';
import { EUserType } from 'src/shared/enums/EUserType';

export class CreateUserDto {
  id: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({
    required: true,
  })
  @IsUrl()
  @IsNotEmpty()
  signature: string;

  @ApiProperty({
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  national_id: number;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  marital_status: EMaritalStatus;

  @ApiProperty({
    required: false,
  })
  @IsNotEmpty()
  account_status: EAccountStatus;

  @ApiProperty({
    required: true,
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    required: false,
  })
  @IsNotEmpty()
  user_type: EUserType;
}
