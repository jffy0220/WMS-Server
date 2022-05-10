export class CreatePurchaseOrderDto {
    id: number;
    po_number: string;
    date_created: Date;
    date_shipped: Date;
    created_by: number;
    approved_by: number;
    status: string;
    date_received: Date;
    recieved_by: number;
    inventory_value: number;
    vendor_id: number;
    business_id: number;
    shipping_address_id: number;
}