import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePut } from "../../services/apiCaller";



const initialState={
    reviews:[],
    isLoading:false,
    isError:false,
    error:''
}

export const createNursesReviews = createAsyncThunk(
    'user/createNursesReview',
     async ({data,userToken}, { rejectWithValue }) => {
        try{
            const reviews = await privatePut('/create/nurse/review', userToken, data);
            return reviews;
        }catch(err){
            return rejectWithValue(err);
        }
   
    });

const nursesReviewsSlice=createSlice({
    name:'review',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createNursesReviews.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createNursesReviews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.reviews=action.payload;
            })
            .addCase(createNursesReviews.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
            
           
    }
});
export default nursesReviewsSlice.reducer; 