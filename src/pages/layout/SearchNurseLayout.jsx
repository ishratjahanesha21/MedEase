import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { fetchFilterNurses } from '../../features/nurses/nursesSlices';
const locations = ["Uttara", "Dhanmondi", "Mirpur", "Banani", "Gulshan"];
const SearchNurseLayout = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState("");
    useEffect(() => {
        dispatch(fetchFilterNurses({ location }));
    }, [dispatch, location]);
    return (
        <div className='w-11/12 md:w-3/4 lg:w-3/4 xl:w-7/12 2xl:w-6/12 mx-auto border border-white shadow-md bg-white rounded-md lg:h-48 p-6'>
            <p>Search Nurses</p>
            <hr/>
            <div className="md:flex justify-between pl-2 lg:pl-0 pr-5 mt-3 w-full lg:w-full 2xl:w-2/4 mx-auto">
            {locations.map((loc) => (
                    <button
                        className="w-full hover:bg-gray-200 h-10  mt-5 lg:mt-0 md:mt-0 ml-1 text-sm font-semibold leading-6 text-black"
                        key={loc}
                        onClick={() => setLocation(loc)}
                    >
                        {loc}
                    </button>
                ))}
                </div>
        </div>
    );
};

export default SearchNurseLayout;