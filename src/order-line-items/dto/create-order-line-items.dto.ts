export class CreateOrderLineItemsDto {
    id: number;
    order_id: number;
    item_id: number;
    qty_ordered: number;
    qty_allocated: number;
    qty_picked: number;
    qty_shipped: number;
    qty_delivered: number;
}