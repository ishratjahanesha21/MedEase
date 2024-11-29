import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPut } from "../../services/apiCaller";




export const doctorResetPassword = createAsyncThunk(
    "/doctorResetPassword",
    async ({data,token} ,{ rejectWithValue }) => {
        try {
            const response = await publicPut(`/forgot/password/reset/${token}`, data);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const doctorResetPasswordSlice = createSlice({
    name: "doctorResetPassword",
    initialState: {
        doctorResetPassword: [],
        isLoading: false,
        success: false,
        error: '',
    },

    extraReducers: (builder) => {
        builder.addCase(doctorResetPassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(doctorResetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.doctorResetPassword = action.payload.userId;
            state.success = true;
        });
        builder.addCase(doctorResetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error =action.payload;
            state.success=false
        });
    },
});

export default doctorResetPasswordSlice.reducer;