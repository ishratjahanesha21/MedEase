import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  meetUrl: localStorage.getItem("meetUrl")
    ? JSON.parse(localStorage.getItem("meetUrl"))
    : [],

};

const meetUrlSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addMeetToStore(state, action) {
            state.meetUrl=action.payload;
             localStorage.setItem("meetUrl", JSON.stringify(state.meetUrl));
        },

        clearMeet(state) {
            state.meetUrl = [];
            localStorage.setItem("meetUrl", JSON.stringify(state.meetUrl));
        },
    },
});

export const { addMeetToStore,clearMeet} =
meetUrlSlice.actions;

export default meetUrlSlice.reducer;
