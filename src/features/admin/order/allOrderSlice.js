import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../../services/apiCaller';





export const fetchAdminAllOrder = createAsyncThunk(
    'admin/fetchAdminAllOrder',
    async ({userToken }, { rejectWithValue }) => {
        const users = await privateGet('/admin/allorder',userToken);
        return users;
    }
);
export const adminAllOrdersSlice = createSlice({
    name: 'allOrder',
    initialState:{
        allOrders: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminAllOrder.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchAdminAllOrder.fulfilled, (state, action) => {
                state.allOrders = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchAdminAllOrder.rejected, (state, action) => {
                state.isLoading = true
                state.allOrders = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default adminAllOrdersSlice.reducer;