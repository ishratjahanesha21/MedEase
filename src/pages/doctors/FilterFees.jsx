import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { feesRemoved, feesSelected } from '../../features/filter/filterReducer';


const FilterFees = ({title}) => {
    const dispatch = useDispatch();
    const { fees } = useSelector(state => state.filter)

    const isSelected =fees.includes(title) ? true : false

    const style = isSelected ? 'text-slate-600 w-32 h-8 pt-1  text-start font-semibold  mt-1 ' : 'w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-1 '
    const handleSelect = () => {
        if (isSelected) {
             dispatch(feesRemoved(title));
        } else {
             dispatch(feesSelected(title));
        }
    }
    return (
        <div>
        <p className={style} onClick={handleSelect}>
        <input type="checkbox" className="mr-3"/>
            {title} BDT
            
            </p>
    </div>
    );
};
FilterFees.propTypes = {
    title: PropTypes.string.isRequired
};
export default FilterFees;