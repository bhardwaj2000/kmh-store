import { legacy_createStore as createStore } from "redux";
import reducers from './reducers/index';

// store will store the data after action and reducer.
// it has 2 argument : all reducer and enhanceReducer
const store = createStore(reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;