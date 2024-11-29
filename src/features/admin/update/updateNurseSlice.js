import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privatePut } from '../../../services/apiCaller';



const initialState = {
    updateNurse:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchUpdateNurse = createAsyncThunk(
    'admin/fetchUpdateNurse',
    async ({data,userToken,_id}) => {
            const nurse = await privatePut(`/nurse/${_id}`,userToken,data);
            return nurse;
    }
);
export const updateNurseSlice = createSlice({
    name: 'update nurse',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpdateNurse.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchUpdateNurse.fulfilled,(state,action)=>{
          state.isLoading=false
          state.updateNurse=action.payload;
        })
        .addCase(fetchUpdateNurse.rejected,(state,action)=>{
            state.isLoading=false
            state.updateNurse={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default updateNurseSlice.reducer;