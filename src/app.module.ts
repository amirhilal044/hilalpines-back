import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ItemsModule } from './item/item.module';
import { OrderModule } from './order/order.module';
import { ItemsTypeModule } from './items-type/items-type.module';

@Module({
  imports: [ItemsModule, TypeOrmModule.forRoot(typeOrmConfig), OrderModule, ItemsTypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
