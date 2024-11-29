import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePost } from "../../../services/apiCaller";




const initialState={
  newDoctors:[],
    isLoading:false,
    isError:false,
    error:''
}

export const createDoctors = createAsyncThunk(
    'admin/createDoctors', async ({ data, userToken }, { rejectWithValue }) => {

        try {
            const newDoctors = await privatePost('/doctor', userToken, data);
            return newDoctors;
        } catch (err) {
            return rejectWithValue(err);
        }


    });
const createDoctorsSlice=createSlice({
    name:'create doctor',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createDoctors.pending, (state) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createDoctors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.newDoctors.push(action.payload);
            })
            .addCase(createDoctors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default createDoctorsSlice.reducer; 