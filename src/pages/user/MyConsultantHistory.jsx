import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApponitments } from "../../features/user/appointment/myAppointmentsSlice";
import { Alert } from "antd";
import { Link } from "react-router-dom";
import MyConsultants from "./MyConsultants";

const MyConsultantHistory = () => {
  const { loggeduser } = useSelector((state) => state.userDetails);
  const userToken = loggeduser?.token;
  const dispatch = useDispatch();
  const { appointment, isLoading, isError, error } = useSelector(
    (state) => state.myAppointments.myAppointments
  );

  useEffect(() => {
    if (userToken) {
      dispatch(fetchApponitments({ userToken }));
    }
  }, [dispatch, userToken]);

  let content;
  if (isLoading) {
    content = (
      <div>
        <p>Loading</p>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="col-span-12">
        <Alert message="Error" description={error} type="error" showIcon />
      </div>
    );
  } else if (!appointment?.length) {
    content = (
      <div className="col-span-12">
        <div className="mt-5 h-12 lg:w-2/4">
          <Alert
            message="No Consultations Found"
            description={
              <span>
                No consultations found. Please{" "}
                <Link to="/doctors">
                  <strong>take consultations!</strong>
                </Link>
              </span>
            }
            type="info"
            showIcon
          />
        </div>
      </div>
    );
  } else {
    content = appointment.map((consultant) => (
      <MyConsultants key={consultant._id} consultant={consultant} />
    ));
  }

  return (
    <div className="bg-white">
      <div className="w-full">
        <div className="w-full lg:full lg:ml-12">
          <h2 className="text-start lg:text-2xl">My Consultations History</h2>
          <div className="w-full grid grid-cols-12 mt-5 lg:mt-10 gap-2">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyConsultantHistory;
