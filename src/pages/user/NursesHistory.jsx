import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { Alert, AlertTitle } from '@mui/material';
import { fetchHireNurses } from '../../features/user/hirenurse/myHireNurseSlice';


const NursesHistory = () => {
    const { loggeduser } = useSelector((state) => state.userDetails);
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { hireNurse, isLoading, isError, error } = useSelector((state) => state.myHireNurses.myHireNurses);

    useEffect(() => {
        dispatch(fetchHireNurses({ userToken }));
    }, [dispatch, userToken]);

    let content;

    if (isLoading) {
        // content = <Loading />;
        content = <div>
            <p>Loading </p>
        </div>;
    }

    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }

    if (!isLoading && !isError && hireNurse?.length === 0) {
        content = (
            <div className="col-span-12">
                <div className="mt-5 h-12 lg:w-2/4">
                    <Alert severity="error">
                        <AlertTitle className="text-start">Error</AlertTitle>
                        No Nurses found — <Link to="/nurses"><strong>take consultations!</strong></Link>
                    </Alert>
                </div>
            </div>
        );
    }

    if (!isLoading && !isError && hireNurse?.length > 0) {
        content = hireNurse.map((hire) => (
            <div key={hire._id} className="card col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 2xl:col-span-4">
                <div className="card-body border">
                    <div className="relative">
                        <Link to={`/nurse/${hire.nurseId}`}>
                            <img src={hire.nurseimage} className="w-full max-h-48" alt={hire.nursename} />
                        </Link>
                    </div>
                    <div className="text-start p-5">
                        <Link to={`/nurse/${hire.nurseId}`}>
                            <p className="text-slate-600 text-md font-semibold">
                                Nurse: {hire.nursename}
                            </p>
                        </Link>
                        <p className="text-slate-600 text-md font-semibold flex gap-2">
                            <FaRegMoneyBillAlt className="text-2xl" /> {hire.nursefees} Tk
                        </p>
                        <p className="text-slate-600 text-md font-semibold">Appointment: {hire.date}</p>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className="w-full m-5 lg:full lg:ml-12">
            <h2 className="text-start lg:text-2xl">My Hired Nurse</h2>
            <div className="w-full grid grid-cols-12 mt-5 lg:mt-10">
                {content}
            </div>
        </div>
    );
};

export default NursesHistory;