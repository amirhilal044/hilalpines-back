import { Item } from "src/item/item.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('itemsType')
export class ItemsType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable:false
  })
  type: string;

  @OneToMany(() => Item, item => item.type, { nullable: true }) // Define the inverse side of the relationship
  items: Item[]; // Define the property to hold the related items
}
