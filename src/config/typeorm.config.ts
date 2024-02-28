import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Item } from 'src/item/item.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'hilalpines',
  entities: [Item],
  synchronize: true,
};
