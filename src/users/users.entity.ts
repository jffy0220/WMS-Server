import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address_1: string;

    @Column()
    address_2: string;

    @Column()
    assigned_device_id: number;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    department_id: number;

    @Column()
    email_1: string;

    @Column()
    email_2: string;

    @Column()
    first_name: string;

    @Column()
    hire_date: Date;

    @Column()
    last_name: string;

    @Column()
    manager_id: number;

    @Column()
    password_hash: string;

    @Column()
    phone_1: string;

    @Column()
    phone_2: string;

    @Column()
    role_id: number;

    @Column()
    section_id: number;

    @Column()
    section_role: string;

    @Column()
    state: string;

    @Column()
    status: string;

    @Column()
    sub_department_id: number;

    @Column()
    username: string;

    @Column()
    warehouse_id: number;

    @Column()
    warehouse_role: string;

    @Column()
    zip: string;
}