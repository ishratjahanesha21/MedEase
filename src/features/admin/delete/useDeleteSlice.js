import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privateDelete } from "../../../services/apiCaller";




const initialState={
  deleteUser:[],
    isLoading:false,
    isError:false,
    error:''
}

export const deleteUser = createAsyncThunk(
    'admin/deleteUser', async (_id , { rejectWithValue }) => {

        try {
            const deleteUser = await privateDelete(`/admin/user/${_id}`);
            return deleteUser;
        } catch (err) {
            return rejectWithValue(err);
        }


    });
const deleteUsersSlice=createSlice({
    name:'delete User',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.deleteUser.push(action.payload);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default deleteUsersSlice.reducer; 