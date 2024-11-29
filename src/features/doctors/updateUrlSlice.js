import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePut } from "../../services/apiCaller";




const initialState={
    updateDoctorUrl:[],
    isLoading:false,
    isError:false,
    error:''
}

export const updateDoctorUrl= createAsyncThunk(
    'user/updateDoctorUrl',
     async ({data,userToken}, { rejectWithValue }) => {
        try{
            const updateUrl = await privatePut('/doctor/update/url', userToken, data);
            return updateUrl;
        }catch(err){
            return rejectWithValue(err);
        }
   
    });

const updateDoctorUrlSlice=createSlice({
    name:'updateDoctorUrl',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(updateDoctorUrl.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(updateDoctorUrl.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.updateDoctorUrl=action.payload;
            })
            .addCase(updateDoctorUrl.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
            
           
    }
});
export default updateDoctorUrlSlice.reducer; 