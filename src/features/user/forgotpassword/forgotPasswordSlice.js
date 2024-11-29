import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../../services/apiCaller";



export const forgotPassword = createAsyncThunk(
    "/forgotPassword",
    async (data, { rejectWithValue }) => {
        try {
            const response = await publicPost("/password/forgot", data);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
   
);

export const forgotPasswordSlice = createSlice({
    name: "forgotPassword",
    initialState: {
        forgotpassword: [],
        isLoading: false,
        success: false,
        error:'',

    },

    extraReducers: (builder) => {
        builder.addCase(forgotPassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.forgotpassword = action.payload.userId;
            state.success = true;
        });
        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error =action.payload;

        });
    },
});

export default forgotPasswordSlice.reducer;