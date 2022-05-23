import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    access_level: number;

    @Column()
    admin: boolean;

    @Column()
    created_by: number;

    @Column()
    created_date: Date;

    @Column()
    department_id: number;

    @Column()
    description: string;

    @Column()
    name: string;

    @Column()
    users: number;
}