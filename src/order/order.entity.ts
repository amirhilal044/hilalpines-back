import { ItemsBoughtDto } from 'src/dto/items-bought.dto';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  clientName: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: number;

  @Column({
    type: 'varchar',
    length: 1000,
  })
  additionalInfo: string;

  @Column()
  itemsBought: ItemsBoughtDto[];

  @Column()
  totalPrice: number;
}
