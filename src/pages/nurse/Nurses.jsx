import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterNurses } from '../../features/nurses/nursesSlices';
import Nurse from '../../components/nurse/Nurse';
import SkeletonNurse from '../../components/nurse/SkeletonNurse';

const Nurses = () => {
    const dispatch = useDispatch();
    const { nurses, isError, error } = useSelector((state) => state.filterNurses.filterNurses);
    const { isLoading } = useSelector((state) => state.filterNurses);
    const [location, setLocation] = useState('');
    const [visibleCount, setVisibleCount] = useState(6); // Number of items initially visible

    useEffect(() => {
        dispatch(fetchFilterNurses({ location }));
    }, [dispatch, location]);

    const handleSeeMore = () => {
        setVisibleCount((prevCount) => prevCount + 6); // Show 6 more items on each click
    };

    let content;
    if (isLoading) {
        content = Array.from({ length: 4 }).map((_, idx) => <SkeletonNurse key={idx} />);
    }

    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }

    if (!isLoading && !isError && nurses?.length === 0) {
        content = (
            <div className="col-span-12">
                <div className="alert alert-error shadow-lg text-start mt-5 h-12 w-1/4 mx-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="text-white">No Nurses Found</span>
                </div>
            </div>
        );
    }

    if (!isLoading && !isError && nurses?.length > 0) {
        content = nurses.slice(0, visibleCount).map((nurse) => <Nurse key={nurse._id} nurse={nurse} />);
    }

    return (
        <section id="#nurses" className="doctors-section mb-10 mt-4">
            <div className="grid grid-cols-12 gap-4 m-3 md:m-0 lg:m-0 lg:w-3/4 lg:mx-auto lg:px-0 min-h-[300px] ">
                {content}
            </div>
            {/* See More Button */}
            {!isLoading && !isError && nurses?.length > visibleCount && (
                <div className="text-center mt-4">
                    <button
                        onClick={handleSeeMore}
                        className="bg-violet-500 text-white px-4 py-2 rounded-lg"
                    >
                        See More
                    </button>
                </div>
            )}
        </section>
    );
};

export default Nurses;
