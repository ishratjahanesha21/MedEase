import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGet } from '../../services/apiCaller';




export const fetchRatings= createAsyncThunk(
    'ratings/fetchRatings',
    async () => {
        const ratings = await publicGet('/ratings');
        return ratings;
    }
);
export const ratingsSlice = createSlice({
    name: 'ratings',
    initialState:{
        ratings: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRatings.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchRatings.fulfilled, (state, action) => {
                state.ratings = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchRatings.rejected, (state, action) => {
                state.isLoading = true
                state.ratings = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default ratingsSlice.reducer;