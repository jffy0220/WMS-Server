import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    billing_address_id: number;

    @Column()
    date_created: Date;

    @Column()
    date_deleted: Date;

    @Column()
    email_1: string;

    @Column()
    email_2: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    middle_initial: string;

    @Column()
    phone_1: string;

    @Column()
    phone_2: string;

    @Column()
    shipping_address_id: number;
}