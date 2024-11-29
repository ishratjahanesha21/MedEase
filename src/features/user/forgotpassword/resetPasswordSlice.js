import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPut } from "../../../services/apiCaller";



export const resetPassword = createAsyncThunk(
    "/resetPassword",
    async ({data,token} ,{ rejectWithValue }) => {
        try {
            const response = await publicPut(`/password/reset/${token}`, data);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const resetPasswordSlice = createSlice({
    name: "resetPassword",
    initialState: {
        resetPassword: [],
        isLoading: false,
        success: false,
        error: '',
    },

    extraReducers: (builder) => {
        builder.addCase(resetPassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.forgotPassword = action.payload.userId;
            state.success = true;
        });
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.success = false;
            // state.errorMessage = action.payload.data.message;
        });
    },
});

export default resetPasswordSlice.reducer;