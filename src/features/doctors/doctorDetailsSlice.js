import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../services/apiCaller';



export const fetchtDoctorDetails = createAsyncThunk(
    'fetchtdoctorDetails ',
    async ({userToken}, { rejectWithValue }) => {
        const details = await privateGet('/current/Doctor/Details',userToken);
        return details;
    }
);
export const doctorDetailsSlice = createSlice({
    name: 'doctor details',
    initialState:{
        doctordetails: [],
        isLoading: false,
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchtDoctorDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchtDoctorDetails.fulfilled, (state, action) => {
                state.doctordetails = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchtDoctorDetails.rejected, (state, action) => {
                state.isLoading = true
                state.doctordetails = [];
               
            })
    }
});

export default doctorDetailsSlice.reducer;