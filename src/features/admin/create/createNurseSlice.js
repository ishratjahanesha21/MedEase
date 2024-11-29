import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePost } from "../../../services/apiCaller";




const initialState={
  newNurses:[],
    isLoading:false,
    isError:false,
    error:''
}

export const createNurses = createAsyncThunk(
    'admin/createNurses', async ({ data, userToken }, { rejectWithValue }) => {

        try {
            const newNurse = await privatePost('/create/nurse', userToken, data);
            return newNurse;
        } catch (err) {
            return rejectWithValue(err);
        }


    });
const createNursesSlice=createSlice({
    name:'create doctor',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createNurses.pending, (state) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createNurses.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.newNurses.push(action.payload);
            })
            .addCase(createNurses.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default createNursesSlice.reducer; 