import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePut } from "../../../services/apiCaller";





const initialState={
    updateLogout:[],
    isLoading:false,
    isError:false,
    error:'',
}

export const updateLogout = createAsyncThunk(
    'user/updateLogout',
    async ({data,userToken}, { rejectWithValue }) => {
        try{
            const updateprofile = await privatePut('/logout/doctor', userToken, data);
            return updateprofile;
        }catch(err){
            return rejectWithValue(err);
        }
   
});

const updateLogoutSlice=createSlice({
    name:'updateProfile',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(updateLogout.pending, (state) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(updateLogout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.updateLogout=action.payload;
                state.loggeduser=[];
                state.token = null

            })
            .addCase(updateLogout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
            
           
    }
});
export default updateLogoutSlice.reducer; 