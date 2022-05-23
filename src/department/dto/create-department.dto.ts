export class CreateDepartmentDto {
    id: number;
    created_date: Date;
    director_id: number;
    employees: number;
    function_description: string;
    name: string;
    shipping_address_id: number;
}