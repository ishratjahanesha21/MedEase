import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilterMedicine } from './filterMedicineApi';



export const fetchFilterMedicne = createAsyncThunk(
    'medicine/fetchFilterMedicne',
    async ({search}) => {
        const medicines = await getFilterMedicine(search)
        return medicines;
    }
);
export const filtermedicinesSlice = createSlice({
    name: 'filtermedicines',
    initialState:{
        medicines: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilterMedicne.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchFilterMedicne.fulfilled, (state, action) => {
                state.medicines = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchFilterMedicne.rejected, (state, action) => {
                state.isLoading = true
                state.medicines = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default filtermedicinesSlice.reducer;