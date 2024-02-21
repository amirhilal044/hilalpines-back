import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from 'src/item/product.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'hilalpines',
  entities: [Product],
  synchronize: true,
};
