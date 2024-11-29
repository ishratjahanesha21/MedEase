
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FilterStatuses from './FilterStatuses';
import { fetchStatus } from '../../features/category/statusSlice';

const FilterStatus = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.status.status);
    useEffect(() => {
        dispatch(fetchStatus());
    }, [dispatch])
    return (
        <div>
            <div>
            {status?.map((active)=><FilterStatuses key={active._id} title={active.title}></FilterStatuses>)}
        </div>
        </div>
    );
};

export default FilterStatus;