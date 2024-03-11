import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemsType } from './items-type.entity';

@Injectable()
export class ItemsTypeService {
  constructor(
    @InjectRepository(ItemsType)
    private itemsTypeRepository: Repository<ItemsType>,
  ) {}

  async createItemType(itemTypeData: Partial<ItemsType>): Promise<ItemsType> {
    const itemType = this.itemsTypeRepository.create(itemTypeData);
    return this.itemsTypeRepository.save(itemType);
  }

  async deleteItemType(id: number): Promise<void> {
    const result = await this.itemsTypeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ItemType with ID ${id} not found.`);
    }
  }

  async getAllItemTypes(): Promise<ItemsType[]> {
    return this.itemsTypeRepository.find();
  }


  async getItemTypeByName(name: string): Promise<ItemsType> {
    const itemType = await this.itemsTypeRepository.findOne({ where: { type: name } });
    if (!itemType) {
      throw new NotFoundException('ItemType not found');
    }
    return itemType;
  }
}
