import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address_1: string;

    @Column()
    address_2: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    department_id: number;

    @Column()
    email_1: string;

    @Column()
    employee_id_number: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    manager_id: number;

    @Column()
    phone_1: string;

    @Column()
    section_id: number;

    @Column()
    state: string;

    @Column()
    work_email_1: string;

    @Column()
    work_phone_1: string;

    @Column()
    zip: string;
}