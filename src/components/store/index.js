import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import productSlicer from './modules/productSlicer';

const reducer = combineReducers({
    products: productSlicer,
});

const index = configureStore({
    reducer
})

export default index