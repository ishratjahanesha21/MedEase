import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { privatePost } from "../../services/apiCaller";
const initialState = {
    appointments: [],
    isLoading: false,
    isError: false,
    success: false,
    error: ''
}
export const createAppointments = createAsyncThunk(
    'appointment/createAppointment', async ({ data, userToken }, { rejectWithValue }) => {

        try {
            const appointments = await privatePost('/new/appointment', userToken, data);
            return appointments;
        } catch (err) {
            return rejectWithValue(err);
        }


    });
const appointmentsSlice = createSlice({
    name: 'appointment',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createAppointments.pending, (state, action) => {
            state.isLoading = true;
            state.isError = true
        });
        builder.addCase(createAppointments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.success = true;
            state.isError = false;
            state.appointments.push(action.payload);
        });
        builder.addCase(createAppointments.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});
export default appointmentsSlice.reducer; 