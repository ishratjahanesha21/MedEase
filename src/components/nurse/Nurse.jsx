import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {  FaRegMoneyBillAlt } from "react-icons/fa";
const Nurse = ({nurse}) => {
    const { name,fees,images } = nurse;

    return (
        <div className="bg-white  col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 ">
        <div className="w-full flex flex-col border rounded-lg">
            <div className="relative">
                <Link to={`/nurse/${nurse._id}`}>
                    <img
                        src={images[0].url}
                        className="mx-auto w-full h-32 lg:h-48"
                        alt={name}
                    />
                </Link>
            </div>

            <div className=" text-start p-5">
                <Link to={`/nurse/${nurse._id}`} >
                    <p className="text-sm font-semibold leading-6 text-gray-900" >
                        {name}
                    </p>
                </Link>
                <div className="flex gap-2">
                < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>
                <p className="text-sm font-semibold leading-6 text-gray-900" >
               {fees} BDT
                </p>
                </div>
            </div>
        </div>
    </div>
    );
};
Nurse.propTypes = {
    nurse: PropTypes.string.isRequired,
};
export default Nurse;