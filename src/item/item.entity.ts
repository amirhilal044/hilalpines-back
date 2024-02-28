import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('item')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false
  })
  name: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable:false
  })
  price: number;

  @Column({
    length: 1000,
    nullable: false
  })
  description: string;

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: false })
  type: string;

}
