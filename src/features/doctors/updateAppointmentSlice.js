import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicPost } from '../../services/apiCaller';



const initialState = {
    newPrescription:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchCreatePrescription = createAsyncThunk(
    'doctor/fetchCreatePrescription',
    async ({data,userToken}) => {
        console.log(data);
            // const appointments = await privatePost(`/create/prescription`,userToken,data);
            const appointments = await publicPost(`/create/prescription`,data);
            return appointments;
    }
);
export const updatePrescriptionSlice = createSlice({
    name: 'appointments',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchCreatePrescription.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchCreatePrescription.fulfilled,(state,action)=>{
          state.isLoading=false
          state.newPrescription=action.payload;
        })
        .addCase(fetchCreatePrescription.rejected,(state,action)=>{
            state.isLoading=false
            state.newPrescription={};
            state.isError=true;
        })
    }
});

export default updatePrescriptionSlice.reducer;