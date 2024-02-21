import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('item')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 20,
  })
  name: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: number;

  @Column({
    type: 'varchar',
    length: 1000,
  })
  description: string;

  @Column()
  image: File;

  @Column({
    type: 'varchar',
  })
  type: string;

}
