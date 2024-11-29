import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { loginReducer } from "./user/Login";
import signUpSlice from "./user/signupSlice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import doctorsSlice from "./doctor/doctorsSlice";
import doctorSlice from "./doctor/doctorSlice";
import reviewSlice from "./doctor/reviewSlice";
import relatedDoctorsSlice from "./relatedDoctor/relatedDoctorSlice";
import filterdoctorsSlice from "./filter/filterSlice";
import appointmentsSlice from "./appointments/appointmentsSlice";
import myAppointmentsSlice from "./user/appointment/myAppointmentsSlice";
import updateProfileSlice from "./user/updateprofile/updateProfileSlice";
import updatePasswordSlice from './user/changePassword/updatePasswordSlice';
import forgotPasswordSlice from "./user/forgotpassword/forgotPasswordSlice";
import resetPasswordSlice from "./user/forgotpassword/resetPasswordSlice";
import adminAllAppointmentsSlice from "./admin/AdminAppointmentSlices";
import adminAllDoctorsSlice from "./admin/AdminDoctorsSlice";
import adminAllUsersSlice from "./admin/AllUsersSlice";
import filternursesSlice from "./nurses/nursesSlices";
import nurseSlice from "./nurses/nursSlice";
import NurseReviewsSlice from "./nurses/NurseReviewsSlice";
import hireNursesSlice from './nurses/hireNurseSlice';
import myHireNurseSlice from "./user/hirenurse/myHireNurseSlice";
import adminAllNursesSlice from "./admin/AllNursesSlices";
import adminAllHiredNursessSlice from "./admin/AllHiredNursesSlice";
import updateAppointmentSlice from "./admin/update/updateAppointmentsSlice";
import fetchSingleAppointmentsSlice from "./admin/SingleAppointmentSlice";
import createDoctorsSlice from "./admin/create/createDoctorsSlice";
import updateDoctorSlice from "./admin/update/updateDoctorsSlice";
import createNursesSlice from './admin/create/createNurseSlice';
import updateNurseSlice from "./admin/update/updateNurseSlice";
import deleteUsersSlice from './admin/delete/useDeleteSlice';
import updateAvatarSlice from "./user/updateprofile/updateAvatarSlice";
import filterSlice from "./filter/filterReducer";
import categorySlice from "./category/categorySlice";
import feesSlice from "./category/feesSlice";
import gendersSlice from "./category/genderSlice";
import ratingsSlice from "./category/ratingsSlice";
import doctorsignUpSlice from "./doctors/doctorsignupSlice";
import updateLogoutSlice from './user/Login/logOutSlice';
import statusSlice from "./category/statusSlice";
import createBloodRequestSlice from './blood/bloodSlice';
import doctorApponitmentsSlice from "./doctors/appointmentSlice";
import updatePrescriptionSlice from "./doctors/updateAppointmentSlice";
import doctorforgotPasswordSlice from "./doctors/doctorforgotpasswordSlice";
import doctorResetPasswordSlice from "./doctors/resetPAsswordSlice";
import doctorUpdatePasswordSlice from "./doctors/doctorUpdatePasswordSlice";
import updateDoctorUrlSlice from './doctors/updateUrlSlice';
import filtermedicinesSlice from "./medicine/FilterMedicineSlice";
import cartReducer from './medicine/cartSlice';
import createOrderSlice from './order/orderSlice';
import myordersSlice from "./user/order/myOrderSlice";
import adminAllOrdersSlice from "./admin/order/allOrderSlice";
import myPrescriptionsSlice from "./user/prescription/prescriptionSlice";
import userDetailsSlice from "./user/details/userDetailsSlice";
import storeReducer from './appointments/doctorMeetSlice';
import doctorDetailsSlice from "./doctors/doctorDetailsSlice";
import searchReducer from './medicine/searchSlice';

// Persist configuration
const persistConfig = {
  key: "authentication",
  storage
};

// Middleware configuration
import logger from "redux-logger";
const middlewares = [];

// Use Vite's import.meta.env instead of process.env
if (import.meta.env.MODE === "development") {
  middlewares.push(logger);
}

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, loginReducer);

// Combine all reducers
const rootReducer = combineReducers({
  userDetails: persistedReducer,
  signup: signUpSlice,
  userdetails: userDetailsSlice,
  doctors: doctorsSlice,
  doctor: doctorSlice,
  reviews: reviewSlice,
  relatedDoctors: relatedDoctorsSlice,
  filterDoctors: filterdoctorsSlice,
  appointments: appointmentsSlice,
  myAppointments: myAppointmentsSlice,
  updateProfile: updateProfileSlice,
  updatePassword: updatePasswordSlice,
  forgotpassword: forgotPasswordSlice,
  resetPassword: resetPasswordSlice,
  allAppointments: adminAllAppointmentsSlice,
  allDoctors: adminAllDoctorsSlice,
  allUsers: adminAllUsersSlice,
  filterNurses: filternursesSlice,
  nurse: nurseSlice,
  nursesReviews: NurseReviewsSlice,
  hireNurses: hireNursesSlice,
  myHireNurses: myHireNurseSlice,
  allNurses: adminAllNursesSlice,
  allhiredNurses: adminAllHiredNursessSlice,
  singleAppointments: fetchSingleAppointmentsSlice,
  updateAppointments: updateAppointmentSlice,
  createDoctors: createDoctorsSlice,
  updateDoctor: updateDoctorSlice,
  createNurse: createNursesSlice,
  updateNurse: updateNurseSlice,
  deleteUser: deleteUsersSlice,
  updateAvatar: updateAvatarSlice,
  filter: filterSlice,
  categories: categorySlice,
  fees: feesSlice,
  genders: gendersSlice,
  ratings: ratingsSlice,
  status: statusSlice,
  doctorsignup: doctorsignUpSlice,
  logout: updateLogoutSlice,
  bloods: createBloodRequestSlice,
  doctorAppointments: doctorApponitmentsSlice,
  updatePrescription: updatePrescriptionSlice,
  doctorforgotpassword: doctorforgotPasswordSlice,
  doctorResetPassword: doctorResetPasswordSlice,
  doctorupdatePassword: doctorUpdatePasswordSlice,
  updateDoctorUrl: updateDoctorUrlSlice,
  medicines: filtermedicinesSlice,
  cart: cartReducer,
  order: createOrderSlice,
  orders: myordersSlice,
  allOrders: adminAllOrdersSlice,
  myPrescriptions: myPrescriptionsSlice,
  meet: storeReducer,
  doctorDetails: doctorDetailsSlice,
  searchList: searchReducer
});

// Configure store with middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(middlewares),
});

// Export store and persistor
export default store;
export const persistor = persistStore(store);
