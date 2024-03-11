import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsNumber,
  IsDecimal,
  IsIn,
} from 'class-validator';
import { IsItemTypeExists } from './is-item-type-exists.validator';

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
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsItemTypeExists()
  type: string;
}
