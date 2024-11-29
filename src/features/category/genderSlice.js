import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGet } from '../../services/apiCaller';



export const fetchGenders = createAsyncThunk(
    'gender/fetchGenders',
    async () => {
        const genders = await publicGet('/gender');
        return genders;
    }
);
export const gendersSlice = createSlice({
    name: 'genders',
    initialState:{
        genders: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenders.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchGenders.fulfilled, (state, action) => {
                state.genders = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchGenders.rejected, (state, action) => {
                state.isLoading = true
                state.genders = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default gendersSlice.reducer;