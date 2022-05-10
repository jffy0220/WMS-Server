export interface PurchaseOrderLineItems {
    id: number;
    item_id: number;
    quantity: number;
    po_id: number;
    qty_received: number;
    price_per_item: number;
    total: number;
}