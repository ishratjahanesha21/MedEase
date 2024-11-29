import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { expertRemoved, expertSelected } from '../../features/filter/filterReducer';

const Consultations = ({ title, image }) => {
    const dispatch = useDispatch();
    const { experts } = useSelector(state => state.filter);

    const isSelected = experts.includes(title);

    const handleSelect = () => {
        if (isSelected) {
            dispatch(expertRemoved(title));
        } else {
            dispatch(expertSelected(title));
        }
    };

    return (
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
    <button
        className="flex items-center md:w-40 md:h-20 card shadow-xl hover:bg-gray-200 p-2"
        onClick={handleSelect}
    >
        <img
            src={image?.url}
            alt=""
            className="h-12 w-12 border rounded-full m-2"
        />
        <p
            className="text-xs md:text-sm lg:text-sm font-bold text-start bg-base-100"
            style={{ color: '#EB569A' }}
        >
            {title}
        </p>
    </button>
</div>
    );
};

// PropTypes validation
Consultations.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        url: PropTypes.string
    }).isRequired
};

export default Consultations;
