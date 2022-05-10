export interface Bin {
    id: number;
    warehouse_id: number;
    memo: string;
    max_volume: number;
    max_width: number;
    max_height: number;
    max_length: number;
    max_weight: number;
    zone: string;
    aisle: string;
    rack: string;
}