import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privatePut } from '../../../services/apiCaller';

const initialState = {
    updateAppointments:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchUpdateAppointment = createAsyncThunk(
    'admin/fetchUpdateAppointment',
    async ({data,userToken,_id}) => {
            const appointments = await privatePut(`/admin/appointment/${_id}`,userToken,data);
            return appointments;
    }
);
export const updateAppointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpdateAppointment.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchUpdateAppointment.fulfilled,(state,action)=>{
          state.isLoading=false
          state.updateAppointments=action.payload;
        })
        .addCase(fetchUpdateAppointment.rejected,(state,action)=>{
            state.isLoading=false
            state.updateAppointments={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default updateAppointmentSlice.reducer;