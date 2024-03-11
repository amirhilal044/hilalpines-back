import { ItemsType } from "src/items-type/items-type.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  @ManyToOne(() => ItemsType, itemType => itemType.items, {
    nullable: false,
    eager: true // Load the itemsType eagerly when fetching items
  })
  type: ItemsType; // Define the relationship with ItemType entity
}
