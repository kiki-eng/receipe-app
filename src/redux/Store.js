import { configureStore } from '@reduxjs/toolkit';
import FavouriteReducer from './FavouriteSlice';

export const Store = configureStore({
    reducer:{
        favourite:FavouriteReducer
    }
})