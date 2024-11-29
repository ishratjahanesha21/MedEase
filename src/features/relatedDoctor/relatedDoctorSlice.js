import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRelatedDoctors } from './relatedDoctorApi';



const initialState = {
    relatedDoctors: [],
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchRelatedDoctors = createAsyncThunk(
    'relatedoctors/fetchRelatedDoctors',
    async ({expert,id}) => {
        const relatedDoctors = await getRelatedDoctors({expert,id})
        return relatedDoctors
    }
);
const relatedDoctorsSlice = createSlice({
    name: 'relatedDoctors',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchRelatedDoctors.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchRelatedDoctors.fulfilled,(state,action)=>{
          state.isLoading=false
          state.relatedDoctors=action.payload;
        })
        .addCase(fetchRelatedDoctors.rejected,(state,action)=>{
            state.isLoading=false
            state.relatedDoctors=[];
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default relatedDoctorsSlice.reducer;