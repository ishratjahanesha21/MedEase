import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePut } from "../../../services/apiCaller";



const initialState={
    updateprofile:[],
    isLoading:false,
    isError:false,
    error:''
}

export const updateProfile = createAsyncThunk(
    'user/updateProfile',
     async ({data,userToken}, { rejectWithValue }) => {
        try{
            const updateprofile = await privatePut('/update/currentUserdetails', userToken, data);
            return updateprofile;
        }catch(err){
            return rejectWithValue(err);
        }
   
    });

const updateProfileSlice=createSlice({
    name:'updateProfile',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(updateProfile.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.updateprofile=action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
            
           
    }
});
export default updateProfileSlice.reducer; 