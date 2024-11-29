import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../services/apiCaller';


export const fetchAdminHiredNurses = createAsyncThunk(
    'admin/fetchHiredNurses',
    async ({userToken }, { rejectWithValue }) => {
        const hiredNurses = await privateGet('/getall/hire/nurse',userToken);
        return hiredNurses;
    }
);
export const adminAllHiredNursessSlice = createSlice({
    name: 'allhiredNurses',
    initialState:{
        allhiredNurses: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminHiredNurses.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchAdminHiredNurses.fulfilled, (state, action) => {
                state.allhiredNurses = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchAdminHiredNurses.rejected, (state, action) => {
                state.isLoading = true
                state.allhiredNurses = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default adminAllHiredNursessSlice.reducer;