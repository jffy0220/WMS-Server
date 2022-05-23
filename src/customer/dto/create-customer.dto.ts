export class CreateCustomerDto {
    id: number;
    billing_address_id: number;
    date_created: Date;
    date_deleted: Date;
    email_1: string;
    email_2: string;
    first_name: string;
    last_name: string;
    middle_initial: string;
    phone_1: string;
    phone_2: string;
    shipping_address_id: number;
}