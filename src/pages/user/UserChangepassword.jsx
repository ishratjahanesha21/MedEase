import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import { message } from 'antd';
import { updatePassword } from '../../features/user/changePassword/updatePasswordSlice';

const UserChangepassword = () => {
  const dispatch = useDispatch();
  const { loggeduser } = useSelector(
    (state) => state.userDetails
  );
  const { error } = useSelector(
    (state) => state.updatePassword
  );
  const userToken = loggeduser?.token;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const data = { oldPassword, newPassword, confirmPassword };

  const registerSubmit = (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      message.error("Please fill in all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      message.error("New password and confirm password do not match.");
      return;
    }
    if (userToken) {
      dispatch(updatePassword({ data, userToken }));
      message.success("Password update request sent.");
    } else {
      message.error("User token is missing. Please log in again.");
    }
  };

  return (
    <div className=" mb-20">
      <div className="w-full">

        <div className="w-full m-5 lg:w-full lg:m-0">
          <div className="bg-white lg:w-3/4 lg:ml-12">
            <h2 className="mb-5 text-2xl font-medium text-start mt-10">
              Change Password
            </h2>
            {error ? (
              <Alert severity="error" className="mt-5 mb-5 text-start">
                {error}
              </Alert>
            ) : null}
            <form onSubmit={registerSubmit}>
              <div className="mb-4">
                <input
                  className="border border-gray-200 w-full h-10 rounded p-3"
                  type="password"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Enter Your Old Password"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-gray-200 w-full h-10 rounded p-3"
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter Your New Password"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-gray-200 w-full h-10 rounded p-3"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Your Password"
                  required
                />
              </div>
              <button
               className="border-2 border-violet-500 text-white py-1 w-full rounded-md  font-semibold h-10 bg-violet-500 mt-5 mb-10"
                type="submit"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChangepassword;
