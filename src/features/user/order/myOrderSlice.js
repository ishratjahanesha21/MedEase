import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../../services/apiCaller';



export const fetchMyOrders = createAsyncThunk(
    'orders/fetchMyOrders',
    async ({userToken}, { rejectWithValue }) => {
        const orders = await privateGet('/orders/myorders',userToken);
        return orders;
    }
);
export const myordersSlice = createSlice({
    name: 'My orders',
    initialState:{
        orders: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMyOrders.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchMyOrders.fulfilled, (state, action) => {
                state.orders = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchMyOrders.rejected, (state, action) => {
                state.isLoading = true
                state.orders = [];
                state.isError = true;
            })
    }
});

export default myordersSlice.reducer;