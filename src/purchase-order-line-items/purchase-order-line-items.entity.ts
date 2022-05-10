import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PurchaseOrderLineItems {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item_id: number;

    @Column()
    quantity: number;

    @Column()
    po_id: number;

    @Column()
    qty_received: number;

    @Column()
    price_per_item: number;

    @Column()
    total: number;
}