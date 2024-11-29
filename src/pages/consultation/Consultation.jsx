import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Consultations from '../../components/consultations/Consultations';
import { fetchCategory } from '../../features/category/categorySlice';
const SkeletonConsultation = () => {
    return (
        <div className="col-span-12 md:col-span-3 lg:col-span-3 ">
            <div className="flex items-center w-40 h-20 card shadow-xl animate-pulse">
                <div className="h-12 w-12 bg-gray-300 rounded-full m-2"></div>
                <p className="lg:text-sm font-bold text-start bg-gray-300 w-20 h-6 rounded-md"></p>
            </div>
        </div>
    );
};

const Consultation = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories.categories);
    const { isLoading } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    let content;

    if (!isLoading && categories) {
        content = categories?.map((category) => (
            <Consultations key={category._id} title={category.title} image={category.image} />
        ));
    } else {
        // Render skeletons while loading
        content = Array(6).fill().map((_, index) => <SkeletonConsultation key={index} />);
    }

    return (
        <div className="">
            <p className="text-start text-xl lg:text-xl 2xl:text-2xl text-gray-900 font-bold mt-4">
                Please select a speciality
            </p>
            <div className="grid grid-cols-12 gap-2 m-3 md:m-0 lg:m-0 lg:w-full 2xl:w-full mx-auto lg:mt-8">
                {content}
            </div>
        </div>
    );
};

export default Consultation;
