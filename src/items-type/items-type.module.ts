import { Module } from '@nestjs/common';
import { ItemsTypeController } from './items-type.controller';
import { ItemsTypeService } from './items-type.service';
import { ItemsType } from './items-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/item/item.entity';

@Module({
  controllers: [ItemsTypeController],
  providers: [ItemsTypeService],
  imports: [TypeOrmModule.forFeature([ItemsType, Item])],

})
export class ItemsTypeModule {}
