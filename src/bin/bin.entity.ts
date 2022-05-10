import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    warehouse_id: number;

    @Column()
    memo: string;

    @Column()
    max_volume: number;

    @Column()
    max_width: number;

    @Column()
    max_height: number;

    @Column()
    max_length: number;

    @Column()
    max_weight: number;

    @Column()
    zone: string;

    @Column()
    aisle: string;

    @Column()
    rack: string;
}