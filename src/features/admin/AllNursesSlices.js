import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../services/apiCaller';




export const fetchAdminAllNurses = createAsyncThunk(
    'admin/fetchAllNurses',
    async ({userToken }, { rejectWithValue }) => {
        const users = await privateGet('/admin/nurses',userToken);
        return users;
    }
);
export const adminAllNursesSlice = createSlice({
    name: 'allNurses',
    initialState:{
        allNurses: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminAllNurses.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchAdminAllNurses.fulfilled, (state, action) => {
                state.allNurses = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchAdminAllNurses.rejected, (state, action) => {
                state.isLoading = true
                state.allNurses = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default adminAllNursesSlice.reducer;