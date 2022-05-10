export class CreateOrderDto {
    id: number;
    order_number: string;
    customer_id: number;
    created_date: Date;
    status: string;
    date_cancelled: Date;
    shipping_address_id: number;
    seller_notes: string;
    customer_notes: string;
    date_shipped: Date;
    date_delivered: Date;
}