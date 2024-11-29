import { useRef } from "react";
import PropTypes from "prop-types";

const MyConsultants = ({ consultant }) => {
  const componentRef = useRef();

  return (
    <div className="card col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 p-4 border rounded-lg bg-white">
      <div ref={componentRef} className="flex flex-col items-center text-center">
        {/* Doctor Image */}
        <img
          src={consultant?.doctorimage}
          className="w-24 h-24 object-cover rounded-full border border-gray-200 mb-4"
          alt={consultant?.doctorname}
        />

        {/* Doctor Details */}
        <h3 className="text-gray-900 font-semibold text-lg">
          {consultant?.doctortitle} {consultant?.doctorname}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{consultant?.doctordegree}</p>
        <p className="text-sm text-gray-500 mt-1 italic">
          Works at {consultant?.doctorwork}
        </p>
        <p className="text-sm text-gray-700 mt-3 font-semibold">
          Fees: {consultant?.doctorfees} Taka
        </p>

        {/* Prescription */}
        {consultant?.prescription ? (
          <a
            href="#my_modal_8"
            className="mt-4 px-4 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition"
          >
            View Prescription
          </a>
        ) : (
          <p className="text-sm text-gray-500 mt-4 italic">
            No prescription available
          </p>
        )}
      </div>
    </div>
  );
};

MyConsultants.propTypes = {
  consultant: PropTypes.shape({
    doctorname: PropTypes.string.isRequired,
    doctorimage: PropTypes.string.isRequired,
    doctorfees: PropTypes.number.isRequired,
    doctordegree: PropTypes.string.isRequired,
    doctorwork: PropTypes.string.isRequired,
    doctortitle: PropTypes.string.isRequired,
    prescription: PropTypes.string,
  }).isRequired,
};

export default MyConsultants;
