import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShippingAddress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    date_created: Date;

    @Column()
    date_deleted: Date;

    @Column()
    address_1: string;

    @Column()
    address_2: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    zip: string;

    @Column()
    poc: string;

    @Column()
    phone_1: string;

    @Column()
    email_1: string;
}