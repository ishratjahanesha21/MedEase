import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // tags gula 
    experts: [],
    fees:[],
    genders:[],
    ratingss:[],
    status:[],
    search: "",
}

const filterSlice = createSlice({
    name: 'filterDoctors',
    initialState,
    reducers: {
        expertSelected: (state, action) => {
            state.experts.push(action.payload);
        },
        expertRemoved: (state, action) => {
            let indexToRemove;
             indexToRemove = state.experts.indexOf(action.payload)
            if (indexToRemove !== -1) {
                state.experts.splice(indexToRemove, 1)
            }
        },
       feesSelected: (state, action) => {
            state.fees.push(action.payload);
        },
        feesRemoved: (state, action) => {
            let indexToRemove;
             indexToRemove = state.fees.indexOf(action.payload)
            if (indexToRemove !== -1) {
                state.fees.splice(indexToRemove, 1)
            }
        },
        genderSelected: (state, action) => {
            state.genders.push(action.payload);
        },
        genderRemoved: (state, action) => {
            let indexToRemove;
             indexToRemove = state.genders.indexOf(action.payload)
            if (indexToRemove !== -1) {
                state.genders.splice(indexToRemove, 1)
            }
        },
        ratingSelected: (state, action) => {
            state.ratingss.push(action.payload);
        },
        ratingRemoved: (state, action) => {
            let indexToRemove;
             indexToRemove = state.ratingss.indexOf(action.payload)
            if (indexToRemove !== -1) {
                state.ratingss.splice(indexToRemove, 1)
            }
        },
        statusSelected: (state, action) => {
            state.status.push(action.payload);
        },
        statusRemoved: (state, action) => {
            let indexToRemove;
             indexToRemove = state.status.indexOf(action.payload)
            if (indexToRemove !== -1) {
                state.status.splice(indexToRemove, 1)
            }
        },
        searched:(state,action)=>{
            state.search=action.payload
        }
    }
});

export default filterSlice.reducer;
export const {statusSelected,statusRemoved,expertSelected,expertRemoved,feesSelected,feesRemoved,genderSelected,genderRemoved,ratingSelected,ratingRemoved,searched}=filterSlice.actions