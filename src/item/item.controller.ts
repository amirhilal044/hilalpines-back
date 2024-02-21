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

@Controller('product')
export class ProductsController {
  constructor(public itemService: ItemService) {}
  @Get()
  async getAllProducts(): Promise<Item[]> {
    return await this.itemService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<Item> {
    const product = await this.itemService.getProductById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Post()
  async createProduct(
    @Body() createProductDto: CreateItem,
  ): Promise<Item> {
    return await this.itemService.createProduct(createProductDto);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() updateProductDto: CreateItem,
  ): Promise<Item> {
    const product = await this.itemService.getProductById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return await this.itemService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    const product = await this.itemService.getProductById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    await this.itemService.deleteProduct(id);
  }
}
