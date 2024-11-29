import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   searchList: localStorage.getItem("searchItem")
    ? JSON.parse(localStorage.getItem("searchItem"))
    : [],

};

const storesearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
      
        addsearchToStore(state, action) {

            state.searchList=action.payload;
        //    const type=state.type
            localStorage.setItem("searchItem", JSON.stringify(state.searchList));

        },
        clearStore(state,) {
            state.type = [];
            localStorage.setItem("searchItem", JSON.stringify(state.searchList));

        },
    },
});

export const { addsearchToStore,clearStore } =
storesearchSlice.actions;

export default storesearchSlice.reducer;