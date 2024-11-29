import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privateAvatarPut } from "../../../services/apiCaller";




const initialState={
updateAvatar:[],
    isLoading:false,
    isError:false,
    error:''
}

export const updateAvatar = createAsyncThunk(
    'user/updateAvatar',
     async ({data,userToken}, { rejectWithValue }) => {
        try{
            const updateprofile = await privateAvatarPut('/update/avatar', userToken, data);
            return updateprofile;
        }catch(err){
            return rejectWithValue(err);
        }
   
    });

const updateAvatarSlice=createSlice({
    name:'updateAvatar',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(updateAvatar.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(updateAvatar.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.updateAvatar=action.payload;
            })
            .addCase(updateAvatar.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
            
           
    }
});
export default updateAvatarSlice.reducer; 