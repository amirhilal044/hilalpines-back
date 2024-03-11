import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderDto {
  @IsNotEmpty()
  @IsString()
  items: string;

  @IsNotEmpty()
  @IsNumber()
  ordreInfo: number;

  @IsNotEmpty()
  @IsString()
  date: string;
}
