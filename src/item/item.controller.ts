import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItem } from '../dto/create-item.dto';
import { Item } from './item.entity';
import { ItemService } from './item.service';

@Controller('item')
export class ItemsController {
  constructor(public itemService: ItemService) {}
  @Get()
  async getAllProducts(): Promise<Item[]> {
    return await this.itemService.getAllItems();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<Item> {
    const product = await this.itemService.getItemById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Post()
  async createProduct(@Body() createItemDto: CreateItem): Promise<Item> {
    console.log(createItemDto)
    return await this.itemService.createItem(createItemDto);
  }

  // @Put(':id')
  // async updateProduct(
  //   @Param('id') id: number,
  //   @Body() updateProductDto: CreateItem,
  // ): Promise<Item> {
  //   const product = await this.itemService.getItemById(id);
  //   if (!product) {
  //     throw new NotFoundException('Product not found');
  //   }
  //   return await this.itemService.updateProduct(id, updateProductDto);
  // }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    console.log(id)
    const item = await this.itemService.getItemById(id);
    console.log(item)
    if (!item) {
      throw new NotFoundException('Product not found');
    }
    await this.itemService.deleteItem(id);
  }
}
