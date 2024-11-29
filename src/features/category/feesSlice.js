import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGet } from '../../services/apiCaller';




export const fetchFees = createAsyncThunk(
    'fees/fetchFees',
    async () => {
        const fees = await publicGet('/fees');
        return fees;
    }
);
export const feesSlice = createSlice({
    name: 'fees',
    initialState:{
        fees: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFees.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchFees.fulfilled, (state, action) => {
                state.fees = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchFees.rejected, (state, action) => {
                state.isLoading = true
                state.fees = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default feesSlice.reducer;