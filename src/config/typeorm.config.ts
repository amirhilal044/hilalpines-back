import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Item } from 'src/item/item.entity';
import { ItemsType } from 'src/items-type/items-type.entity';
import { Order } from 'src/order/order.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'hilalpines',
  entities: [Item,Order, ItemsType],
  synchronize: true,
};
