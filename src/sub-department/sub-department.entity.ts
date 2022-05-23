import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubDepartment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_date: Date;

    @Column()
    department_id: number;

    @Column()
    director_id: number;

    @Column()
    employees: number;

    @Column()
    function_description: string;

    @Column()
    name: string;
}