import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_date: Date;

    @Column()
    director_id: number;

    @Column()
    employees: number;

    @Column()
    function_description: string;

    @Column()
    name: string;

    @Column()
    shipping_address_id: number;
}