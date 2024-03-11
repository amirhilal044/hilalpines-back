import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ItemsType } from './items-type.entity';
import { ItemsTypeService } from './items-type.service';

@Controller('items-type')
export class ItemsTypeController {
  constructor(private readonly itemsTypeService: ItemsTypeService) {}

  @Post()
  async createItemType(@Body() itemTypeData: ItemsType): Promise<ItemsType> {
    return this.itemsTypeService.createItemType(itemTypeData);
  }

  @Delete(':id')
  async deleteItemType(@Param('id') id: number): Promise<void> {
    await this.itemsTypeService.deleteItemType(id);
  }

  @Get()
  async getAllItemTypes(): Promise<ItemsType[]> {
    return this.itemsTypeService.getAllItemTypes();
  }
}
