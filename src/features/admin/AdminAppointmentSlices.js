import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../services/apiCaller';
export const fetchAllAppointments = createAsyncThunk(
    'admin/fetchAppointments',
    async ({userToken }, { rejectWithValue }) => {
        const appointments = await privateGet('/getall/appointment',userToken);
        return appointments;
    }
);
export const adminAllAppointmentsSlice = createSlice({
    name: 'allAppointments',
    initialState:{
        allAppointments: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllAppointments.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchAllAppointments.fulfilled, (state, action) => {
                state.allAppointments = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchAllAppointments.rejected, (state, action) => {
                state.isLoading = true
                state.allAppointments = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default adminAllAppointmentsSlice.reducer;