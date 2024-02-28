import { IsNotEmpty, IsString, MaxLength, IsOptional, IsNumber, IsDecimal, IsIn } from 'class-validator';

export class ItemsBoughtDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20) // Adjust the maximum length as needed
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsDecimal({ decimal_digits: '2' }) // Validate that it has two decimal places
  price: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1000) // Adjust the maximum length as needed
  description: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['product', 'offer'], { message: 'Type must be either "product" or "offer"' })
  type: string;
}
