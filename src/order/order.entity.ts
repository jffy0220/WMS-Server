import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_number: string;

    @Column()
    customer_id: number;

    @Column()
    created_date: Date;

    @Column()
    status: string;

    @Column()
    date_cancelled: Date;

    @Column()
    shipping_address_id: number;

    @Column()
    seller_notes: string;

    @Column()
    customer_notes: string;

    @Column()
    date_shipped: Date;

    @Column()
    date_delivered: Date;
}