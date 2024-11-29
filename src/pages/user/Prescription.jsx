import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPrescription } from "../../features/user/prescription/prescriptionSlice";
import { useReactToPrint } from "react-to-print";
import { Alert, Button, Modal, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Prescription = () => {
  const dispatch = useDispatch();
  const { loggeduser } = useSelector((state) => state.userDetails);
  const { prescription, isLoading, isError, error } = useSelector(
    (state) => state.myPrescriptions.myPrescriptions
  );
  const userToken = loggeduser.token;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const componentRef = useRef();

  // Define useReactToPrint at the top level of the functional component
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const showModal = (booking) => {
    setSelectedBooking(booking);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedBooking(null);
  };

  useEffect(() => {
    dispatch(fetchPrescription({ userToken }));
  }, [dispatch, userToken]);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>{error}</div>;
  } else if (!isError && prescription?.length === 0) {
    content = (
      <Alert
        message="Error"
        description={
          <div>
            No Consultations found —{" "}
            <Link to="/doctors">
              <strong>Take consultations!</strong>
            </Link>
          </div>
        }
        type="error"
        icon={<ExclamationCircleOutlined />}
        showIcon
      />
    );
  } else if (!isError && prescription?.length > 0) {
    content = prescription.map((booking) => (
      <Card
        key={booking._id} // Add key prop here
        className="mb-4"
        title={`${booking.doctortitle} ${booking.doctorname}`}
        actions={[
          // Add a key to this button element
          <button
            key={`view-download-${booking._id}`} // Unique key for each button
            type="button"
            onClick={() => showModal(booking)}
          >
            View & Download
          </button>,
        ]}
      >
        <p>{booking.problem}</p>
        <p>Date: {booking.createdAt}</p>
      </Card>
    ));
  }

  return (
    <div className="">
      <div className="w-full lg:w-3/4 ">
        <h2 className="text-2xl mb-5">Previous Prescription History</h2>
        <div className="grid grid-cols-1 gap-4">{content}</div>
      </div>

      <Modal
        title="Medical Prescription"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={[
          <Button key="download" type="primary" onClick={handlePrint}>
            Download
          </Button>,
        ]}
      >
        {selectedBooking && (
          <div ref={componentRef}>
            <div className="text-center">
              <img
                src="/path-to-your-logo.png"
                alt="Logo"
                className="mb-3"
                style={{ height: "50px" }}
              />
              <p className="text-lg font-bold">Medical Prescription</p>
            </div>
            <div className="my-4">
              <p>
                <strong>Patient:</strong> {selectedBooking.name}
              </p>
              <p>
                <strong>Prescription Date:</strong> {selectedBooking.createdAt}
              </p>
              <p>
                <strong>Gender:</strong> {selectedBooking.gender}
              </p>
              <p>
                <strong>Age:</strong> {selectedBooking.age}
              </p>
              <p>
                <strong>Height:</strong> {selectedBooking.height}
              </p>
              <p>
                <strong>Weight:</strong> {selectedBooking.weight}
              </p>
              <p>
                <strong>Health Issue:</strong> {selectedBooking.problem}
              </p>
              <p>
                <strong>Doctor Advice:</strong> {selectedBooking.doctorAdvice}
              </p>
              <p>
                <strong>Next Follow-Up Date:</strong> {selectedBooking.followUp}
              </p>
              <div>
                <p className="font-bold mt-3">Medicines</p>
                {selectedBooking.medicines.map((info, index) => (
                  <div key={index} className="flex justify-between">
                    <p>{info.medname}</p>
                    <p>Daily: {info.dailyUse} times</p>
                    <p>Duration: {info.days} days</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p>
                <strong>Doctor:</strong> {selectedBooking.doctortitle}{" "}
                {selectedBooking.doctorname} ({selectedBooking.doctordegree})
              </p>
              <p>
                <strong>Workplace:</strong> {selectedBooking.doctorwork}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Prescription;
