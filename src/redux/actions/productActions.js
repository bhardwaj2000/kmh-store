import { ActionTypes } from "../constants/action-types"

// it is an arrow function which take a product in arguments and 
//action always return plain javascript object which has key as type - which action want to perform
// and payload - it will be data on which action have to perform.
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products, 
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product, 
    };
};

export const removeSelectedProduct = (products) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: products, 
    };
};