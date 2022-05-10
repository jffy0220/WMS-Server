export class CreateBillingAddressDto {
    id: number;
    type: string;
    date_created: Date;
    date_deleted: Date;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    phone_1: string;
    email_1: string;
    first_name: string;
    last_name: string;
}