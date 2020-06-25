export interface Item {
    id: number;
    value: string;
    status?: boolean;
}

export interface Items {
     items: Item[];
}
