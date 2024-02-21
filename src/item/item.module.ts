import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './item.controller';
import { ItemService } from './item.service';
import { Item } from './item.entity';

@Module({
  controllers: [ProductsController],
  providers: [ItemService],
  imports: [TypeOrmModule.forFeature([Item])],
})
export class ProductsModule {}
