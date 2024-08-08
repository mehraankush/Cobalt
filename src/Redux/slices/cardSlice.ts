import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    imageUrl: string;
    title: string;
}

interface CartState {
    items: CartItem[];
    count: number;
}

const initialState: CartState = {
    items: [],
    count: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
            state.count += 1;
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.title !== action.payload);
            state.count -= 1;
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;