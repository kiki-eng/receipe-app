import { createSlice } from "@reduxjs/toolkit";

const emptyState = {
    items : []
};

const FavouriteSlice = createSlice({
    name:"favourite",
    initialState:emptyState,
    reducers:{
        setIsFavourite(state, action){
            state.items = action.payload

        },
    }
})

export const {setIsFavourite} = FavouriteSlice.actions

export const FavouriteRecipe = (state) => state.favourite.items

export default FavouriteSlice.reducer;
