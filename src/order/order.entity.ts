import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable:false
  })
  items: string;

  @Column({
    nullable: false
  })
  ordreInfo: string;


  @Column({
    nullable: false
  })
  date: string;
}
