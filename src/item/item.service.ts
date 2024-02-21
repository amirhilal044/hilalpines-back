import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItem } from '../dto/create-item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly productsRepository: Repository<Item>,
  ) {}

  async getAllProducts(): Promise<Item[]> {
    return await this.productsRepository.find();
  }

  async getProductById(id: number): Promise<Item> {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async createProduct(
    createProductDto: CreateItem,
  ): Promise<Item> {
    const newProduct = this.productsRepository.create(createProductDto);
    return await this.productsRepository.save(newProduct);
  }

  async updateProduct(
    id: number,
    updateProductDto: CreateItem,
  ): Promise<Item> {
    const product = await this.getProductById(id);
    this.productsRepository.merge(product, updateProductDto);
    return await this.productsRepository.save(product);
  }

  async deleteProduct(id: number): Promise<void> {
    const product = await this.getProductById(id);
    await this.productsRepository.remove(product);
  }
}
