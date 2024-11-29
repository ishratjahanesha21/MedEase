import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privatePut } from '../../../services/apiCaller';


const initialState = {
    updateDoctors:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchUpdateDoctor = createAsyncThunk(
    'admin/fetchUpdateDoctor',
    async ({data,userToken,_id}) => {
            const doctor = await privatePut(`/doctor/${_id}`,userToken,data);
            return doctor;
    }
);
export const updateDoctorSlice = createSlice({
    name: 'update doctors',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpdateDoctor.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchUpdateDoctor.fulfilled,(state,action)=>{
          state.isLoading=false
          state.updateDoctors=action.payload;
        })
        .addCase(fetchUpdateDoctor.rejected,(state,action)=>{
            state.isLoading=false
            state.updateDoctors={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default updateDoctorSlice.reducer;