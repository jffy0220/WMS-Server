import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    qty_on_hand: number;

    @Column()
    qty_on_order: number;

    @Column()
    qty_available: number;

    @Column()
    qty_back_ordered: number;

    @Column()
    reorder_point: number;

    @Column()
    safety_stock_level: number;

    @Column()
    lead_time: number;

    @Column()
    last_purchased_price: number;

    @Column()
    average_cost: number;

    @Column()
    value: number;

    @Column()
    reorder_point_auto_calculate: boolean;

    @Column()
    safetystock_auto_calculate: boolean;

    @Column()
    item_name: string;

    @Column()
    display_name: string;

    @Column()
    upc_code: string;

    @Column()
    vendor_id: number;

    @Column()
    purchase_units: string;

    @Column()
    sub_item: boolean;

    @Column()
    sub_item_id: number;

    @Column()
    created_date: Date;

    @Column()
    item_status: string;

    @Column()
    height: number;

    @Column()
    weight: number;

    @Column()
    length: number;

    @Column()
    width: number;
}