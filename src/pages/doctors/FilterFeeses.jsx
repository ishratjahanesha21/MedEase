import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterFees from './FilterFees';
import { fetchFees } from '../../features/category/feesSlice';

const FilterFeeses = () => {
    const dispatch = useDispatch();
    const { fees } = useSelector(state => state.fees.fees);
    useEffect(() => {
        dispatch(fetchFees());
    }, [dispatch])
    return (
        <div>
             {fees?.map((fee)=><FilterFees key={fee._id} title={fee.title}></FilterFees>)}
        </div>
    );
};

export default FilterFeeses;


