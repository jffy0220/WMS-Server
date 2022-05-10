import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderLineItems {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_id: number;

    @Column()
    item_id: number;

    @Column()
    qty_ordered: number;

    @Column()
    qty_allocated: number;

    @Column()
    qty_picked: number;

    @Column()
    qty_shipped: number;

    @Column()
    qty_delivered: number;
}