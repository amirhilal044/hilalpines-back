import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { ItemsTypeService } from 'src/items-type/items-type.service';

@ValidatorConstraint({ async: true })
export class IsItemTypeExistsConstraint implements ValidatorConstraintInterface {
  constructor(private readonly itemsTypeService: ItemsTypeService) {}

  async validate(type: string) {
    // Check if the ItemType with the given name exists
    const itemType = await this.itemsTypeService.getItemTypeByName(type);
    return !!itemType;
  }
}

export function IsItemTypeExists(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isItemTypeExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsItemTypeExistsConstraint,
      async: true,
    });
  };
}
