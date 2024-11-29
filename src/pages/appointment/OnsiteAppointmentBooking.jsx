import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { Skeleton } from '@mui/material';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { createAppointments } from '../../features/appointments/appointmentsSlice';
import Navbar from '../../components/common/Navbar';
import { message } from 'antd';
import { useEffect } from 'react';
const OnsiteAppointmentBooking = () => {
    const dispatch = useDispatch();
    const { token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const { doctor } = useSelector(state => state.doctor.doctor);
    const userToken = loggeduser.token
    const [patientname, setPname] = useState('');
    const [patientemail, setEmail] = useState('');
    const [patientgender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [schedule, setSchedule] = useState('');
    const doctortitle = doctor.title;
    const doctorname = doctor.name;
    const doctoremail = doctor.email;
    const doctorfees = doctor.fees;
    const doctorimage = doctor.avatar?.url;
    const doctorId = doctor._id;
    const doctordegree = doctor.degree;
    const doctorwork = doctor.work;
    const url = doctor.url
    const data = ({ doctortitle, doctorname, doctoremail, doctorfees, doctorimage, doctorId, doctordegree, doctorwork, patientname, patientgender, phone, date, schedule, url ,patientemail});
    const handleCreate = (e) => {
        e.preventDefault();
        if (patientname && phone && date && schedule) {
            dispatch(createAppointments({
                data, userToken
            }));
        }
    }
    const { success } = useSelector(state => state.appointments);
    useEffect(() => {
        if (success) {
            message.success("Onsite Appointment Booked Successfully")
        }
    }, [success]);
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="lg:flex justify-between gap-8 lg:w-11/12 mx-auto mt-16 lg:mt-48">
                <div className='w-full'>
                    <div className="lg:hidden w-full flex mt-4 border rounded-lg p-4">
                        {
                            doctor?.avatar?.url ? <img
                                src={doctor?.avatar.url}
                                className="h-24 w-24  lg:h-40 lg:w-40 border rounded-lg ml-5 "
                                alt={doctor.name}
                            /> : null
                        }
                        <div>
                            <p className="ml-5 text-start font-semibold text-md lg:text-xl">{doctor?.title}{doctor?.name}</p>
                            <p className="ml-5 text-start ">{doctor?.degree}</p>
                            <p className="ml-5 text-start ">{doctor?.expert} | consultant</p>
                            <p className="ml-5 text-start ">Consultation fees : {doctor?.fees}TK</p>
                            <div className="lg:hidden flex ml-4 mt-3">
                                <CiLocationOn className="text-xl"></CiLocationOn>
                                <p className="text-start">{doctor?.work}</p>
                            </div>
                        </div>
                    </div>


                    <Link to={`/doctor/${doctor._id}`} >
                        <div className="hidden lg:flex justify-between  border border-inherit rounded">
                            <div className="w-full flex md:flex lg:flex justify-between  mb-5 ">

                                {
                                    doctor?.avatar?.url ? <img
                                        src={doctor?.avatar.url || <Skeleton />}
                                        className="w-48 h-24 m-3 ml-3 border rounded"
                                        alt={doctor?.name}
                                    /> : null
                                }
                                <div className=" w-full text-start ml-5 lg:ml-3 md:ml-3 ">
                                    <div className="flex mt-3">
                                        <p className="font-semibold"> {doctor?.name || <Skeleton />} </p>
                                    </div>
                                    <p className="text-slate-600  text-md " >
                                        {doctor?.degree || <Skeleton />}
                                    </p>
                                    <p className="text-slate-400  text-md mt-3" >
                                        Specialities
                                    </p>
                                    <p className=" text-md " >
                                        {doctor?.expert || <Skeleton />}
                                    </p>
                                    <div className="mt-5">
                                        <div className="ml-5 lg:ml-0 text-start mr-10 mt-5 mb-5 ">
                                            <p className="text-slate-600  text-md font-semibold" >
                                                Works at {doctor?.work || <Skeleton />}
                                            </p>
                                            <div className="flex justify-between lg:block">
                                                <div>
                                                    <p className="text-slate-400  text-md mt-3" >
                                                        Experience
                                                    </p>
                                                    <p className=" text-md text-black" >
                                                        {doctor?.experience || <Skeleton />} Years
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-slate-400  text-md mt-3" >
                                                        Total Ratings
                                                    </p>
                                                    <p className=" text-md " >
                                                        {/* {ratings} */}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-slate-600  text-md font-semibold flex gap-2 mt-2" >
                                                < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{doctor?.fees || <Skeleton />} BDT
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='w-full lg:w-3/4 border rounded mt-4 lg:mt-0'>
                    {
                        token ?

                            <div className="w-full lg:w-3/4 mx-auto  mb-12 mt-5">
                                <p className="text-start  mx-auto text-sm text-violet-300 ml-3  lg:text-xl">In-hospital Consultation</p>
                                <form action="" className="p-3" onSubmit={handleCreate}>
                                    <div className="">
                                        <input type="text" value={patientname} onChange={(e) => setPname(e.target.value)} placeholder="Enter Patient Name" className="border border-gray-300 rounded mx-auto w-full p-2 h-12" />
                                    </div>
                                    <div>
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Patient Phone " className="border border-gray-200 rounded w-full  p-2 h-12 mx-auto mt-5" />
                                    </div>
                                    <div className="mt-4 ">
                                        <input type="text" value={patientemail} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="border border-gray-300 rounded mx-auto w-full p-2 h-12" />
                                    </div>
                                    <div>
                                        <select name="Gender" className="w-full  h-12 border rounded mt-5" value={patientgender} onChange={(e) => setGender(e.target.value)}>
                                            <option  >Select Gender </option>
                                            <option  >Male </option>
                                            <option >Female </option>
                                        </select>
                                    </div>

                                    <div>
                                        <select className="w-full  h-12 border rounded mt-5" value={schedule} onChange={(e) => setSchedule(e.target.value)}  >
                                            <option  >Select Slots</option>
                                            <option >Morning </option>
                                            <option >Afternoon </option>
                                            <option >Evening </option>
                                        </select>
                                    </div>
                                    <div>
                                        <p className="text-start  mx-auto text-sm text-violet-300 mt-5">Select  Date?</p>
                                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Appoinment Date" className="border border-gray-200 rounded w-full  p-2 h-12 mx-auto  text-black" />
                                    </div>

                                    <button className="btn btn-md bg-violet-500 hover:bg-violet-500 border-violet-500 hover:border-violet-500 mt-5 h-12  w-full text-white font-semibold text-center mb-5 ">Book Appointment </button>
                                </form>
                            </div>
                            : null
                    }
                </div>
            </div>
        </div>
    );
};
export default OnsiteAppointmentBooking;