import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePut } from "../../services/apiCaller";


const initialState={
    reviews:[],
    isLoading:false,
    isError:false,
    error:''
}

export const createreviews = createAsyncThunk(
    'user/createReview',
     async ({data,userToken}, { rejectWithValue }) => {
        try{
            const reviews = await privatePut('/create/review', userToken, data);
            return reviews;
        }catch(err){
            return rejectWithValue(err);
        }
   
    });

const reviewSlice=createSlice({
    name:'review',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createreviews.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createreviews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.reviews=action.payload;
            })
            .addCase(createreviews.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
            
           
    }
});
export default reviewSlice.reducer; 