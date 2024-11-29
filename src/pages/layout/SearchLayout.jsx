import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsBag, BsSearch } from "react-icons/bs";
import { fetchFilterMedicne } from '../../features/medicine/FilterMedicineSlice';
import { addsearchToStore } from '../../features/medicine/searchSlice';
import { searched } from '../../features/filter/filterReducer';

const SearchLayout = () => {
    const dispatch = useDispatch();
    const { search } = useSelector(state => state.filter);
    const [input, setInput] = useState(search);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searched(input));
        dispatch(addsearchToStore(input));
    };

    useEffect(() => {
        dispatch(fetchFilterMedicne({ search }));
    }, [dispatch, search]);
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const { searchList } = useSelector(state => state.searchList);

    return (
        <div className='w-11/12 md:w-3/4 lg:w-3/4 xl:w-7/12 2xl:w-6/12 mx-auto border border-white shadow-md bg-white rounded-md lg:h-84 p-6'>
            <p>Search Medicine</p>
            <hr/>
            <div className="flex justify-between pl-2 lg:pl-0 pr-5 mt-3 w-full lg:w-full 2xl:w-2/4 mx-auto">
                    <form className="w-3/4 lg:w-3/4 2xl:w-2/4 flex">
                        <input
                            className="outline-none border border-pink-200 w-full h-10 pl-5"
                            type="search"
                            name="search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Search"
                        />
                        <button onClick={handleSearch} className="h-10 w-20" style={{ backgroundColor: "#EB569A", border: '1px solid #EB569A' }}>
                            <BsSearch className="text-white font-bold ml-5" />
                        </button>
                    </form>
                    <div>
                        <Link to="/cart" className="text-sm leading-6 me-10">
                            <div className="flex mt-3 lg:mt-1">
                                <BsBag className="h-4 w-4 lg:h-6 lg:w-6" style={{ color: "#EB569A" }} />
                                <span className="ml-1 text-sm" style={{ color: "#EB569A" }}>{cartTotalQuantity}</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="">
                    <p className="text-start">Search History</p>
                    <p className="text-start text-gray-400 min-w-fit">{searchList}</p>
                </div>
        </div>
    );
};

export default SearchLayout;
