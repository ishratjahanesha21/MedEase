import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../../services/apiCaller';



export const fetchtuserDetails = createAsyncThunk(
    'fetchtuserDetails ',
    async ({userToken}, { rejectWithValue }) => {
        const details = await privateGet('/currentUserDetails',userToken);
        return details;
    }
);
export const userDetailsSlice = createSlice({
    name: 'user details',
    initialState:{
        userdetails: [],
        isLoading: false,
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchtuserDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchtuserDetails.fulfilled, (state, action) => {
                state.userdetails = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchtuserDetails.rejected, (state, action) => {
                state.isLoading = true
                state.userdetails = [];
               
            })
    }
});

export default userDetailsSlice.reducer;