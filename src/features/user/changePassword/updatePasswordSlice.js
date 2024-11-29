import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePut } from "../../../services/apiCaller";



const initialState={
    updatepassword:[],
    isLoading:false,
    isError:false,
    error:'',
    isUpdated:false
}

export const updatePassword = createAsyncThunk(
    'user/updatePassword',
     async ({data,userToken}, { rejectWithValue }) => {
        try{
            const updatepassword = await privatePut('/updatePassword', userToken, data);
            return updatepassword;
        }catch(err){
            return rejectWithValue(err.response.data.message);
        }
   
    });

const updatePasswordSlice=createSlice({
    name:'updateProfile',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(updatePassword.pending, (state, action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.updatepassword=action.payload;
                state.isUpdated=true
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                // state.error = action.error?.message
            })
            
           
    }
});
export default updatePasswordSlice.reducer; 