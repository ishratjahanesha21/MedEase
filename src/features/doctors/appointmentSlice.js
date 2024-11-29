import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../services/apiCaller';


export const fetchDoctorApponitments = createAsyncThunk(
    'doctors/fetchDoctorApponitments ',
    async ({userToken}, { rejectWithValue }) => {
        const appointments = await privateGet('/single/doctor/appointment',userToken);
        return appointments;
    }
);
export const doctorApponitmentsSlice = createSlice({
    name: 'My Appointments',
    initialState:{
        doctorAppointments: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDoctorApponitments.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchDoctorApponitments.fulfilled, (state, action) => {
                state.doctorAppointments = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchDoctorApponitments.rejected, (state, action) => {
                state.isLoading = true
                state.doctorAppointments = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default doctorApponitmentsSlice.reducer;