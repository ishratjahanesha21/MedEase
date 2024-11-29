import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGet } from '../../services/apiCaller';



export const fetchStatus= createAsyncThunk(
    'gender/fetchStatus',
    async () => {
        const status = await publicGet('/status');
        return status;
    }
);
export const statusSlice = createSlice({
    name: 'status',
    initialState:{
        status: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStatus.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchStatus.fulfilled, (state, action) => {
                state.status = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchStatus.rejected, (state, action) => {
                state.isLoading = true
                state.status = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default statusSlice.reducer;