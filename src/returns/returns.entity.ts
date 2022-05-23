import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Returns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    associate_id: number;

    @Column()
    carrier: string;

    @Column()
    condition: string;

    @Column()
    created_date: number;

    @Column()
    customer_id: number;

    @Column()
    customer_name: string;

    @Column()
    image_id: number;

    @Column()
    purchase_order_id: number;

    @Column()
    serial_number: string;
}