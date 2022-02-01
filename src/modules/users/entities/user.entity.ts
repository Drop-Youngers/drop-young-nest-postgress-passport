import { EUserType } from './../../../shared/enums/EUserType';
import { EMaritalStatus } from './../../../shared/enums/EMaritalStatus';
import { EAccountStatus } from './../../../shared/enums/EAccountStatus';
import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, Max, Min } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Denyse' })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  firstName: string;

  @ApiProperty({ example: 'Mutoni' })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  lastName: string;

  @ApiProperty({ example: '+250786153667' })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  phone_number: string;

  @ApiProperty({ example: 'mdenyse15@gmail.com' })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Nyagatare' })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  @IsEmail()
  location: string;

  @ApiProperty({ example: 'Female' })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  @IsEmail()
  gender: string;

  @ApiProperty({ example: '123456789123456' })
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @Min(16)
  @Max(16)
  national_id: number;

  @ApiProperty({ example: 'password' })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  @Min(8)
  @Max(16)
  password: string;

  @ApiProperty({ example: 'married' })
  @Column({
    type: 'varchar',
    nullable: true,
    default: EMaritalStatus.SINGLE,
  })
  marital_status: EMaritalStatus;

  @ApiProperty({ example: 'active' })
  @Column({
    type: 'varchar',
    nullable: true,
    default: EAccountStatus.ACTIVE,
  })
  account_status: EAccountStatus;

  @ApiProperty({ example: '14' })
  @Column({
    type: 'int',
    nullable: true,
    default: 18,
  })
  age: number;

  @ApiProperty({ example: '14' })
  @Column('varchar', {
    nullable: false,
    default: EUserType.TENANT,
  })
  user_type: EUserType;

  @ApiProperty({ example: 'https://photos.choose' })
  @Column({
    type: 'varchar',
    nullable: true,
    default: 18,
  })
  signature: string;

  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;

  @Column({ default: true })
  isActive: boolean;
}
