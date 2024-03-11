import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItem } from '../dto/create-item.dto';
import { Item } from './item.entity';
import { ItemsType } from 'src/items-type/items-type.entity';
import { ItemsTypeService } from 'src/items-type/items-type.service';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
    @InjectRepository(ItemsType) // Inject ItemType repository
    private readonly itemsTypeRepository: Repository<ItemsType>,
    private readonly itemsTypeService:ItemsTypeService
  ) {}

  async getAllItems(): Promise<Item[]> {
    return await this.itemsRepository.find();
  }

  async getItemById(id: number): Promise<Item> {
    const item = await this.itemsRepository.findOne({ where: { id }, relations: ['type'] }); // Eager load ItemType
    if (!item) {
      throw new NotFoundException('Item not found');
    }
    return item;
  }

  async createItem(createItemDto: CreateItem): Promise<Item> {
    const { type, ...itemData } = createItemDto; // Extract typeId from createItemDto
    const itemType = await this.itemsTypeService.getItemTypeByName(type); // Find ItemType by typeId
    if (!itemType) {
      throw new NotFoundException('ItemType not found');
    }
    const newItem = this.itemsRepository.create({ ...itemData, type: itemType }); // Create new Item with associated ItemType
    return await this.itemsRepository.save(newItem);
  }

  async deleteItem(id: number): Promise<void> {
    const item = await this.getItemById(id);
    await this.itemsRepository.remove(item);
  }
}
