import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGetSingle } from '../../services/apiCaller';


const initialState = {
    doctor:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchDoctor = createAsyncThunk(
    'doctor/fetchDoctor',
    async (id) => {
        const doctor = await publicGetSingle(`/doctor/${id}`);
        return doctor
    }
);
export const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchDoctor.pending,(state)=>{
            state.isError=false;
           state.isLoading=true
        })
        .addCase(fetchDoctor.fulfilled,(state,action)=>{
          state.isLoading=false
          state.doctor=action.payload;
        })
        .addCase(fetchDoctor.rejected,(state,action)=>{
            state.isLoading=false
            state.doctor={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default doctorSlice.reducer;