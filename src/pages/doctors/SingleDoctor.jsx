import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiHospitalCross } from 'react-icons/gi';
import { BiVideoOff } from 'react-icons/bi';
import { fetchDoctor } from '../../features/doctor/doctorSlice';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { createreviews } from '../../features/doctor/reviewSlice';
import Reviews from '../../components/reviews/Reviews';

const SingleDoctor = () => {
  const dispatch = useDispatch();
  const { loggeduser } = useSelector(
    (state) => state.userDetails
);
const user = loggeduser.user;
const userToken = loggeduser.token
  const { doctorId } = useParams();
  const { doctor, isLoading, isError, error } = useSelector((state) => state.doctor.doctor);
  useEffect(() => {
    dispatch(fetchDoctor(doctorId));
  }, [dispatch, doctorId]);

  const renderSkeletonOrData = (data, fallback) => (isLoading ? <Skeleton /> : data || fallback);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const reviewSubmitHandler = () => {
      const myForm = new FormData();
      myForm.set("rating", rating);
      myForm.set("comment", comment);
      myForm.set("doctorId", doctor._id);
      const data = ({ rating, comment, doctorId });
      if (userToken) {
          dispatch(createreviews({ data, userToken }));
      }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow p-3 lg:p-0 lg:w-3/4 mx-auto pt-6 pb-20 mt-12 lg:mt-48">
        <div className="lg:mr-0 lg:w-full mx-auto lg:flex justify-between mt-5  shadow-xl pb-4 md:pb-0">
          {/* Doctor Image and Basic Info */}
          <div className="lg:flex lg:w-2/4 justify-between mb-5">
            {isLoading ? (
              <Skeleton variant="rectangular" width={150} height={150} />
            ) : (
              <img
                src={doctor?.avatar?.url || 'default-avatar.png'}
                className="w-full md:w-48 lg:w-56 h-48"
                alt={doctor?.name}
              />
            )}

            <div className="w-full text-start ml-5">
              <div className="flex mt-3">
                <p className="font-semibold">{renderSkeletonOrData(`${doctor?.title} ${doctor?.name}`, "Doctor's Name")}</p>
                {isLoading ? (
                  <Skeleton variant="rectangular" width={50} height={30} />
                ) : (
                  doctor?.isActive && (
                    <button className="bg-green-500 h-6 w-12 border rounded-lg text-white ml-3 border-green-500">
                      online
                    </button>
                  )
                )}
              </div>
              <p className="text-slate-600 text-md">{renderSkeletonOrData(doctor?.degree, 'Degree Info')}</p>
              <p className="text-slate-400 text-md mt-3">Specialities</p>
              <p className="text-md">{renderSkeletonOrData(doctor?.expert, 'Expertise')}</p>
            </div>
          </div>

          {/* Doctor Additional Info */}
          <div className="lg:w-1/4 ml-5 text-start mr-10 mb-5">
            <p className="text-slate-600 text-md font-semibold mt-3">{renderSkeletonOrData(doctor?.work, 'Workplace')}</p>
            <div className="flex justify-between lg:block">
              <div>
                <p className="text-slate-400 text-md mt-3">Experience</p>
                <p className="text-md text-black">{renderSkeletonOrData(`${doctor?.experience} Years`, 'Experience')}</p>
              </div>
              <div>
                <p className="text-slate-400 text-md mt-3">Total Ratings</p>
                <p className="text-md">{/* Add ratings logic */}</p>
              </div>
            </div>
            <p className="text-slate-600 text-md font-semibold flex gap-2 mt-2">
              <FaRegMoneyBillAlt className="text-2xl" />
              {renderSkeletonOrData(`${doctor?.fees} BDT`, 'Fees')}
            </p>
          </div>

          {/* Doctor Description and Appointment Links */}
          <div className="ml-5 w-full lg:w-1/4 mb-10">
            <p className="text-slate-600 text-md font-semibold text-start mt-3">Description</p>
            {isLoading ? (
              <Skeleton variant="rectangular" width="100%" height={100} />
            ) : (
              <p className="text-gray-900 text-xs text-start">{doctor?.description || 'No description available.'}</p>
            )}

            <div className="mr-12 lg:mr-2">
              <Link to="/onsite/appointment">
              <button
                      className="w-full h-10 mt-5 flex items-center justify-center border rounded-lg text-white mb-10"
                      style={{ backgroundColor: '#EB569A', border: '1px solid #EB569A' }}
                    >
                  <GiHospitalCross className="mr-3 text-white" /> Hospital Visit
                </button>
              </Link>
              {/* {isLoading ? (
                <Skeleton variant="rectangular" width="100%" height={40} />
              ) : (
                doctor?.isActive && (
                  <Link to="/book-appointment">
                    <button
                      className="w-full h-10 mt-5 flex items-center justify-center border rounded-lg text-white mb-10 "  style={{ backgroundColor: '#EB569A', border: '1px solid #EB569A' }}
                      
                    >
                      <BiVideoOff className="mr-2 text-xl" /> See Doctor Now
                    </button>
                  </Link>
                )
              )} */}
            </div>
          </div>
        </div>

        {/* Error Handling */}
        {isError && <p className="text-red-500">{error}</p>}

            <div className="mt-4 mb-8">
             <div className="w-full  mx-auto border p-4">

                    <h2 className="text-start  text-md">Reviews ({doctor?.reviews?.length})</h2>
                     {
                        doctor?.reviews[0] ? doctor?.reviews.map((review) => (<Reviews key={review._id} review={review} />))
                            : <p className="text-2xl text-start mt-10 text-red-700">No Reviews Yet !</p>
                     }
                 </div>
                 {
                     user ? <div className="w-2/4 mt-4 ">
                         <p className="mb-3 text-start font-semibold">Give a review</p>
                         <Rating
                             onChange={(e) => setRating(e.target.value)}
                             value={rating}
                             className='w-full'
                         />
                         <br />
                         <textarea placeholder="Write ..." className="textarea textarea-bordered textarea-sm mt-2 w-full ml-0 border p-2 rounded-lg outline-style-none" value={comment}
                             onChange={(e) => setComment(e.target.value)}></textarea>
                         <br />
                         <button className="w-full border rounded-lg text-white  h-10 mt-2" onClick={reviewSubmitHandler}
                         style={{ backgroundColor: '#EB569A', border: '1px solid #EB569A' }}>Submit</button>
                     </div> : null
                 }
             </div>
      </section>

      {/* Footer stays at bottom */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default SingleDoctor;
