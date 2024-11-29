import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { privatePost } from '../../services/apiCaller';




const initialState = {
    order: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const createOrder = createAsyncThunk(
    'order/createOrder', async ({ data, userToken }, { rejectWithValue }) => {

        try {
            const order = await privatePost('/create/order', userToken, data);
            return order ;
        } catch (err) {
            return rejectWithValue(err);
        }


    });

const createOrderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(createOrder.pending, (state, action) => {
            state.isLoading = true;
            state.isError = true
        });
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.order.push(action.payload);
        });
        builder.addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message
        });
    }
});

export default createOrderSlice.reducer; 