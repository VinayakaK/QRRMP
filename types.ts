
export interface Dish {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    available: boolean;
    image: string;
}

export interface Category {
    id: number;
    name: string;
    displayOrder: number;
    active: boolean;
}

export interface Table {
    id: number;
    name: string;
}

export interface CartItem extends Dish {
    quantity: number;
}

export interface Order {
    id: string;
    tableId: number;
    items: CartItem[];
    total: number;
    status: 'preparing' | 'ready' | 'completed' | 'cancelled';
    timestamp: string;
}
