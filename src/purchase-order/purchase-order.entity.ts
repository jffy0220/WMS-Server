import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PurchaseOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    po_number: string;

    @Column()
    date_created: Date;

    @Column()
    date_shipped: Date;

    @Column()
    created_by: number;

    @Column()
    approved_by: number;

    @Column()
    status: string;

    @Column()
    date_received: Date;

    @Column()
    recieved_by: number;

    @Column()
    inventory_value: number;

    @Column()
    vendor_id: number;

    @Column()
    business_id: number;

    @Column()
    shipping_address_id: number;
}