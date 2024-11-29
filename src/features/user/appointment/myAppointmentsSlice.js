import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../../services/apiCaller';


export const fetchApponitments = createAsyncThunk(
    'doctors/fetchAppointments',
    async ({userToken}, { rejectWithValue }) => {
        const appointments = await privateGet('/mybooking',userToken);
        return appointments;
    }
);
export const myAppointmentsSlice = createSlice({
    name: 'My Appointments',
    initialState:{
        myAppointments: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApponitments.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchApponitments.fulfilled, (state, action) => {
                state.myAppointments = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchApponitments.rejected, (state, action) => {
                state.isLoading = true
                state.myAppointments = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default myAppointmentsSlice.reducer;