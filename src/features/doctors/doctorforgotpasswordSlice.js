import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from '../../services/apiCaller';




export const doctorforgotPassword = createAsyncThunk(
    "/forgotPassword",
    async (data, { rejectWithValue }) => {
        try {
            const response = await publicPost("/doctor/forgotPassword", data);
            return response;
        } catch (err) {
            console.log("error",err.response.data.message);
            return rejectWithValue(err.response.data.message);
        }
    }
   
);

export const doctorforgotPasswordSlice = createSlice({
    name: "forgotPassword",
    initialState: {
        doctorforgotpassword: [],
        isLoading: false,
        success: false,
        error:'',
    },

    extraReducers: (builder) => {
        builder.addCase(doctorforgotPassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(doctorforgotPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.doctorforgotpassword = action.payload.userId;
            state.success = true;
        });
        builder.addCase(doctorforgotPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error=action.payload;
        });
    },
});

export default doctorforgotPasswordSlice.reducer;