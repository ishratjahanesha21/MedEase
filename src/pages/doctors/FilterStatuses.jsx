import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { statusRemoved, statusSelected } from '../../features/filter/filterReducer';
const FilterStatuses = ({title}) => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.filter)

    const isSelected =status.includes(title) ? true : false

    const style = isSelected ? 'text-slate-600 w-32 h-8 pt-1  text-start font-semibold  mt-1' : 'w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-1 '
    const handleSelect = () => {
        if (isSelected) {
             dispatch(statusRemoved(title));
        } else {
             dispatch(statusSelected(title));
        }
    }
    return (
        <div>
        {/* <p className="w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-3 lg:ml-64">{title}</p> */}
        <p className={style} onClick={handleSelect}>
        <input type="checkbox" className="mr-3"/>
            Online Now
            </p>
    </div>
    );
};
FilterStatuses.propTypes = {
    title: PropTypes.string.isRequired
};
export default FilterStatuses;