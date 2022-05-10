export class CreateItemDetailsDto {
    id: number;
    item_id: number;
    serial_number: string;
    warehouse_id: number;
    location_id: number;
    expiration_date: Date;
    condition: string;
    date_created: Date;
    date_received: Date;
}