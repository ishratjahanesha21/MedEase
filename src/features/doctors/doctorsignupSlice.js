import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from '../../services/apiCaller';


export const createDoctorSignUp = createAsyncThunk(
  "/doctorsignup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/register/doctor",data);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const doctorsignUpSlice = createSlice({
  name: "signup",
  initialState: {
    doctorSignup:[],
    isLoading: false,
    success: false,
    error: false,
    errorMessage:"",
  },

  extraReducers: (builder) => {
    builder.addCase(createDoctorSignUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createDoctorSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.doctorSignup = action.payload.userId;
      state.success = true;
    });
    builder.addCase(createDoctorSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error=action.payload.response?.message;
    });
  },
});

export default doctorsignUpSlice.reducer;