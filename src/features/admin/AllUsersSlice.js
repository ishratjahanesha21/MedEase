import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../services/apiCaller';



export const fetchAdminAllUsers = createAsyncThunk(
    'admin/fetchAllUsers',
    async ({userToken }, { rejectWithValue }) => {
        const users = await privateGet('/users',userToken);
        return users;
    }
);
export const adminAllUsersSlice = createSlice({
    name: 'allUsers',
    initialState:{
        allUsers: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminAllUsers.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchAdminAllUsers.fulfilled, (state, action) => {
                state.allUsers = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchAdminAllUsers.rejected, (state, action) => {
                state.isLoading = true
                state.allUsers = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default adminAllUsersSlice.reducer;