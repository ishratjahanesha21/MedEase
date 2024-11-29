import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { publicGet } from '../../services/apiCaller';

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async () => {
        const categories = await publicGet('/category');
        return categories;
    }
);
export const categorySlice = createSlice({
    name: 'category',
    initialState:{
        categories: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.isLoading = true
                state.categories = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default categorySlice.reducer;