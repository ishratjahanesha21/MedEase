import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGet } from '../../services/apiCaller';
// import { getDoctors } from '../../utilities/apiCaller';


export const fetchDoctors = createAsyncThunk(
    'doctors/fetchDoctors',
    async () => {
        const doctors = await publicGet('/doctors');
        // const doctors = await getDoctors();
        return doctors;
    }
);
export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState:{
        doctors: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDoctors.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchDoctors.fulfilled, (state, action) => {
                state.doctors = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchDoctors.rejected, (state, action) => {
                state.isLoading = true
                state.doctors = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default doctorsSlice.reducer;