import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePost } from '../../services/apiCaller';




const initialState={
  hireNurses:[],
    isLoading:false,
    isError:false,
    error:''
}

export const createHireNurse=createAsyncThunk(
    'nurse/createHireNurse',async({data,userToken}, { rejectWithValue })=>{

        try {
            const hireNurses = await privatePost('/new/hire/nurse',userToken, data);
            return hireNurses;
        } catch (err) {
            return rejectWithValue(err);
        }
   
 
});
const hireNursesSlice=createSlice({
    name:'hireNurses',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createHireNurse.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createHireNurse.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.hireNurses.push(action.payload);
            })
            .addCase(createHireNurse.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default hireNursesSlice.reducer; 