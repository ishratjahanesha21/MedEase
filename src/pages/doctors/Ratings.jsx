import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ratingg from './Ratingg';
import { fetchRatings } from '../../features/category/ratingsSlice';


const Ratings = () => {
    const dispatch = useDispatch();
    const { ratings } = useSelector(state => state.ratings.ratings);
    useEffect(() => {
        dispatch(fetchRatings());
    }, [dispatch])
    return (
        <div>
            {ratings?.map((rating)=><Ratingg key={rating._id} title={rating.title}></Ratingg>)}
        </div>
    );
};

export default Ratings;