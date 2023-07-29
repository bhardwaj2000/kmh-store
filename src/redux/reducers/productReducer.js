import { ActionTypes } from "../constants/action-types";

// reducer always take the initial state and action
const initialState = {
    products:[
        {
        id:1,
        title: "manish",
        category: "programmer",
        },
    ],
};

// first argument of reducer is state - which is initial state.
// 2nd argument is action - it have two key:- type and payload
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}