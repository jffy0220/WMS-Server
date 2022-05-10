import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item_id: number;

    @Column()
    serial_number: string;

    @Column()
    warehouse_id: number;

    @Column()
    location_id: number;

    @Column()
    expiration_date: Date;

    @Column()
    condition: string;

    @Column()
    date_created: Date;

    @Column()
    date_received: Date;
}