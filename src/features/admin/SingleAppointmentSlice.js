import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGetSingle } from '../../services/apiCaller';




const initialState = {
    singleAppointments:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchSingleAppointments = createAsyncThunk(
    'admin/fetchSingleAppointments',
    async (id) => {
        const appointments= await publicGetSingle(`/appointment/${id}`);
        return appointments
    }
);
export const fetchSingleAppointmentsSlice = createSlice({
    name: 'fetchSingleAppointments',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchSingleAppointments.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchSingleAppointments.fulfilled,(state,action)=>{
          state.isLoading=false
          state.singleAppointments=action.payload;
        })
        .addCase(fetchSingleAppointments.rejected,(state,action)=>{
            state.isLoading=false
            state.singleAppointments={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default fetchSingleAppointmentsSlice.reducer;