import { IsNotEmpty, IsString, MaxLength, IsOptional, IsNumber, IsDecimal, IsIn } from 'class-validator';

export class CreateItem {
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
  image: File;

  @IsNotEmpty()
  @IsString()
  @IsIn(['trainer', 'client'], { message: 'Type must be either "trainer" or "client"' })
  type: string;
}
