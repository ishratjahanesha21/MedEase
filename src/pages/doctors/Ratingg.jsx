import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Rating from '@mui/material/Rating';
import { ratingRemoved, ratingSelected } from '../../features/filter/filterReducer';
const Ratingg = ({title}) => {
    const dispatch = useDispatch();
    const { ratingss } = useSelector(state => state.filter)

    const isSelected =ratingss.includes(title) ? true : false

    const style = isSelected ? 'text-slate-600 w-32 h-8 pt-1  text-start font-semibold  mt-1' : 'w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-1 '
    const handleSelect = () => {
        if (isSelected) {
             dispatch(ratingRemoved(title));
        } else {
             dispatch(ratingSelected(title));
        }
    }

    const options = {
        size: "small",
        value: title,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <div>
          
            <p className={style} onClick={handleSelect} >
                <input type="checkbox" className="mr-3 absolute mt-2" />
                <Rating {...options} size="sm" className="ml-5" />

            </p>
        </div>
    );
};
// PropTypes validation
Ratingg.propTypes = {
    title: PropTypes.string.isRequired
};
export default Ratingg;