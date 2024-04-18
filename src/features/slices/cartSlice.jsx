import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            const productId = action.payload;
            try {
                const exist = state.cart.find(
                    (product) =>
                        product.id === productId.id &&
                        product.size === productId.size &&
                        product.color === productId.color
                );
                if (exist) {
                    exist.amount++;
                    exist.totalPrice += productId.price;
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                } else {
                    state.cart.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        amount: 1,
                        img: productId.img,
                        totalPrice: productId.price,
                        name: productId.name,
                        text: productId.text,
                        color: productId.color,
                    });
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                }
            } catch (err) {
                return err;
            }
        },
        removeFromCart(state, action) {
            const productId = action.payload;
            try {
                const exist = state.cart.find(
                    (product) =>
                        product.id === productId.id &&
                        product.size === productId.size &&
                        product.color === productId.color
                );
                if (exist.amount === 1) {
                    state.cart = state.cart.filter(
                        (product) =>
                            product.id !== productId.id ||
                            product.size !== productId.size ||
                            product.color !== productId.color
                    );
                    state.totalAmount--;
                    state.totalPrice -= productId.price;
                } else {
                    exist.amount--;
                    exist.totalPrice -= productId.price;
                    state.totalAmount--;
                    state.totalPrice -= productId.price;
                }
            } catch (err) {
                return err;
            }
        },
        // Add the clearCart action
        clearCart(state) {
            state.cart = [];
            state.totalAmount = 0;
            state.totalPrice = 0;
        },
    },
});

// Export actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
