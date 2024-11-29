import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../../services/apiCaller';



export const fetchPrescription = createAsyncThunk(
    'doctors/fetchPrescription',
    async ({userToken}, { rejectWithValue }) => {
        const appointments = await privateGet('/my/prescription',userToken);
        return appointments;
    }
);
export const myPrescriptionsSlice = createSlice({
    name: 'My Appointments',
    initialState:{
        myPrescriptions: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPrescription.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchPrescription.fulfilled, (state, action) => {
                state.myPrescriptions = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchPrescription.rejected, (state, action) => {
                state.isLoading = true
                state.myPrescriptions = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default myPrescriptionsSlice.reducer;