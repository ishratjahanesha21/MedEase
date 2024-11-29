import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { privateGet } from '../../services/apiCaller';

export const fetchAdminAllDoctors = createAsyncThunk(
    'admin/fetchAllDoctors',
    async ({userToken }, { rejectWithValue }) => {
        const doctors = await privateGet('/admin/doctors',userToken);
        return doctors;
    }
);
export const adminAllDoctorsSlice = createSlice({
    name: 'alldoctors',
    initialState:{
        allDoctors: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminAllDoctors.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchAdminAllDoctors.fulfilled, (state, action) => {
                state.allDoctors = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchAdminAllDoctors.rejected, (state, action) => {
                state.isLoading = true
                state.allDoctors = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default adminAllDoctorsSlice.reducer;