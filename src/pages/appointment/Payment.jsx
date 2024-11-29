import { useState, useEffect } from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
// import { clearMeet } from '../../state/appointments/doctorMeetSlice';
import { clearMeet } from '../../features/appointments/doctorMeetSlice';

const Payment = () => {
    const dispatch = useDispatch();
    const meeturl = useSelector(state => state.meet.meetUrl);

    // Duration in milliseconds (5 minutes)
    const duration = 5 * 60 * 1000;
    const [time, setTime] = useState(duration);

    // Countdown logic
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 1000) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1000;
            });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Handle formatted time display
    const getFormattedTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return (
            <div className="flex p-5 lg:w-1/4 mx-auto lg:mt-10">
                <div>
                    <p className="text-4xl text-violet-500">{minutes}</p>
                    <p className="font-semibold leading-6 text-gray-900">Minutes</p>
                </div>
                <div className="ml-10">
                    <p className="text-4xl text-violet-500">{seconds.toString().padStart(2, '0')}</p>
                    <p className="font-semibold leading-6 text-gray-900">Seconds</p>
                </div>
            </div>
        );
    };

    // Handle "Done" button click
    const handleMeetUrl = () => {
        dispatch(clearMeet());
        if (meeturl) {
            window.open(meeturl);
        }
    };

    return (
        <div className="w-full mt-24 lg:mt-64 lg:w-3/4 mx-auto mb-32">
            <AiOutlineCheckCircle className="text-9xl w-2/4 mx-auto text-emerald-400" />
            <p className="lg:mt-10 lg:text-xl font-semibold lg:w-2/4 mx-auto text-gray-900 mb-3">
                Please wait 5 minutes. The doctor will call you.
            </p>
            <div className="text-red-800 ml-24 lg:ml-0">
                {getFormattedTime(time)}
            </div>
            <button
                className="mt-5 btn w-40 bg-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:border-emerald-400"
                onClick={handleMeetUrl}
            >
                Done
            </button>
        </div>
    );
};

export default Payment;
