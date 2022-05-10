import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Warehouse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    shipping_address_id: number;

    @Column()
    num_items: number;

    @Column()
    director_id: number;
}