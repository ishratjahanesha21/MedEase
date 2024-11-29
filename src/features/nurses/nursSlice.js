import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGetSingle } from '../../services/apiCaller';



const initialState = {
    nurse:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchNurse = createAsyncThunk(
    'nurse/fetchNurse',
    async (id) => {
        const nurse = await publicGetSingle(`/nurse/${id}`);
        return nurse;
    }
);
export const nurseSlice = createSlice({
    name: 'nurse',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchNurse.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchNurse.fulfilled,(state,action)=>{
          state.isLoading=false
          state.nurse=action.payload;
        })
        .addCase(fetchNurse.rejected,(state,action)=>{
            state.isLoading=false
            state.nurse={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default nurseSlice.reducer;