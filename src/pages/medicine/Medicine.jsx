import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterMedicne } from '../../features/medicine/FilterMedicineSlice';
import Medicines from '../../components/medicines/Medicines';
import SkeletonMedicines from '../../components/medicines/SkeletonMedicines';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const Medicine = () => {
    const dispatch = useDispatch();
    const { medicines } = useSelector(state => state.medicines.medicines);
    const { isLoading } = useSelector(state => state.medicines);
    const { search } = useSelector(state => state.filter);

    useEffect(() => {
        dispatch(fetchFilterMedicne({ search }));
    }, [dispatch, search]);

    let content;

    if (medicines?.length === 0) {
        content = (
            <div className="col-span-12">
                <div className="alert alert-error shadow-lg text-start mt-5 h-12 w-1/4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-black">No Medicine Found</span>
                </div>
            </div>
        );
    }

    if (medicines?.length > 0) {
        content = medicines.map(medicine => <Medicines key={medicine._id} medicine={medicine} />);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex-grow pt-12 mb-10 lg:mt-16">
                {isLoading ? (
                    <div className="grid grid-cols-12 gap-4 p-3 lg:p-0 lg:w-3/4 2xl:w-2/4 mx-auto lg:px-0 min-h-[300px]">
                        {/* Show skeleton loaders when loading */}
                        {Array(6).fill().map((_, index) => (
                            <SkeletonMedicines key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-12 gap-4 p-3 lg:p-0 lg:w-3/4 2xl:w-2/4 mx-auto lg:px-0 min-h-[300px]">
                        {content}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Medicine;
