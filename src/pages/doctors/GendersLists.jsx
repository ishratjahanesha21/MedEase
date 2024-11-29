
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GenderList from './GenderList';
// import { fetchGenders } from '../../features/category/categorySlice';

const GendersLists = () => {
    const dispatch = useDispatch();
    const { genders } = useSelector(state => state.genders.genders);
    useEffect(() => {
        // dispatch(fetchGenders());
    }, [dispatch])
    return (
        <div>
                {genders?.map((gender)=><GenderList key={gender._id} title={gender.title}></GenderList>)}
        </div>
    );
};

export default GendersLists;