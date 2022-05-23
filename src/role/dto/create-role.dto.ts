export class CreateRoleDto {
    id: number;
    access_level: number;
    admin: boolean;
    created_by: number;
    created_date: Date;
    department_id: number;
    description: string;
    name: string;
    users: number;
}