import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './item.controller';
import { Item } from './item.entity';
import { ItemService } from './item.service';
import { ItemsType } from 'src/items-type/items-type.entity';
import { ItemsTypeService } from 'src/items-type/items-type.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemService, ItemsTypeService],
  imports: [TypeOrmModule.forFeature([Item, ItemsType])],
})
export class ItemsModule {}
