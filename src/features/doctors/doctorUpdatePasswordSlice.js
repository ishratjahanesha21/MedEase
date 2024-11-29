import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePut } from '../../services/apiCaller';



const initialState={
    doctorupdatePassword:[],
    isLoading:false,
    isError:false,
    error:'',
    isUpdated:false
}

export const doctorupdatePassword = createAsyncThunk(
    'doctorupdatePassword',
     async ({data,userToken}, { rejectWithValue }) => {
        try{
            const updatepassword = await privatePut('/doctor/updatePassword', userToken, data);
            return updatepassword;
        }catch(err){
            return rejectWithValue(err.response.data.message);
        }
   
    });

const doctorupdatePasswordSlice=createSlice({
    name:'doctorupdatePassword',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(doctorupdatePassword.pending, (state, action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
            .addCase(doctorupdatePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.doctorupdatePassword=action.payload;
                state.isUpdated=true
            })
            .addCase(doctorupdatePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                // state.error = action.error?.message
            })
            
           
    }
});
export default doctorupdatePasswordSlice.reducer; 