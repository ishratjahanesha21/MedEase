import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import imgAvatar from '../../assets/avatar.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DoctorsLists = ({ doctor }) => {
    const { name, work, expert, degree, fees, avatar, isActive, experience, ratings } = doctor;

    return (
        <Link to={`/doctor/${doctor._id}`}>
            <div className="mt-5 border bg-white rounded-lg p-4">
                <div className="w-full mb-5">
                    {
                        avatar?.url ? <img
                            src={avatar.url || <Skeleton />}
                            className="w-full h-36 border rounded-lg"
                            alt={name}
                        /> : <img
                            src={imgAvatar}
                            className="w-full h-36"
                            alt={name}
                        />
                    }
                </div>
                <div className="w-full text-start">
                    <div className="flex items-center mt-3">
                        <p className="font-medium"> {name || <Skeleton />} </p>
                        {
                            isActive === true ? (
                                <BsDot className="text-green-500 text-3xl ml-2" />
                            ) : null
                        }
                    </div>
                    <p className="text-gray-900 text-sm">
                        {degree || <Skeleton />}
                    </p>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-gray-400 text-sm mt-3">
                                Specialities
                            </p>
                            <p className="text-sm">
                                {expert || <Skeleton />}
                            </p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm mt-3">
                                Fees
                            </p>
                            <p className="text-sm">
                                {fees || <Skeleton />}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-start mt-5 mb-5">
                    <p className="text-slate-600 text-md font-medium flex items-center gap-2">
                        <FaMapMarkerAlt className="text-md text-red-500" />
                        Works at {work || <Skeleton />}
                    </p>

                    <div className="flex justify-between mt-4">
                        <div>
                            <p className="text-slate-400 text-sm">
                                Experience
                            </p>
                            <p className="text-md text-black">
                                {experience || <Skeleton />} Years
                            </p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm">
                                Total Ratings
                            </p>
                            <p className="text-md">
                                {ratings}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

DoctorsLists.propTypes = {
    doctor: PropTypes.object.isRequired // Changed from string to object
};

export default DoctorsLists;
