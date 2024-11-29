import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../../services/apiCaller';



export const fetchHireNurses = createAsyncThunk(
    'nurses/fetchHireNurses',
    async ({userToken}, { rejectWithValue }) => {
        const hireNurses = await privateGet('/my/hire',userToken);
        return hireNurses;
    }
);
export const myHireNursessSlice = createSlice({
    name: 'My Hire Nurses',
    initialState:{
        myHireNurses: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHireNurses.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchHireNurses.fulfilled, (state, action) => {
                state.myHireNurses = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchHireNurses.rejected, (state, action) => {
                state.isLoading = true
                state.myHireNurses = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default myHireNursessSlice.reducer;