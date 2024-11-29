import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { publicPost } from "../../services/apiCaller";



const initialState={
   bloods:[],
    isLoading:false,
    isError:false,
    error:''
}

export const createBloodRequest=createAsyncThunk(
    'bloods/createBloodRequest', async (data, { rejectWithValue }) => {
        try {
          const response = await publicPost("/blood/booking",data);
          return response;
        } catch (err) {
          return rejectWithValue(err);
        }
      });
const createBloodRequestSlice=createSlice({
    name:'blood',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createBloodRequest.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createBloodRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.bloods.push(action.payload);
            })
            .addCase(createBloodRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default createBloodRequestSlice.reducer; 