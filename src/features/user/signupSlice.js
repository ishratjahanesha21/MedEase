import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../services/apiCaller";


export const createSignUp = createAsyncThunk(
  "/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/register",data);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    userSignup:[],
    isLoading: false,
    success: false,
    error: false,
    errorMessage:"",
  },

  extraReducers: (builder) => {
    builder.addCase(createSignUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userSignup = action.payload.userId;
      state.success = true;
    });
    builder.addCase(createSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default signUpSlice.reducer;