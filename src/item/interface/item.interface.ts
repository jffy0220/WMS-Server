export interface Item {
    id: number;
    qty_on_hand: number;
    qty_on_order: number;
    qty_available: number;
    qty_back_ordered: number;
    reorder_point: number;
    safety_stock_level: number;
    lead_time: number;
    last_purchased_price: number;
    average_cost: number;
    value: number;
    reorder_point_auto_calculate: boolean;
    safetystock_auto_calculate: boolean;
    item_name: string;
    display_name: string;
    upc_code: string;
    vendor_id: number;
    purchase_units: string;
    sub_item: boolean;
    sub_item_id: number;
    created_date: Date;
    item_status: string;
    height: number;
    weight: number;
    length: number;
    width: number;
}