import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';

const Reviews = ({ review }) => {
    const options = {
        size: "large",
        value: review.rating,
        readOnly: true,
        precision: 0.5,
    };

    return (
        <>
            <div className="flex gap-2 mt-12 w-2/4 ">
                <div className="w-1/4">
                    <img src={review.user.avatar?.url} alt="User" className="border w-24 h-24 rounded-full" />
                </div>
                <div className="w-full">
                    <p className="text-start font-medium">{review.name}</p>
                    <Rating {...options} name="size-small" size="small" className="mr-64 mt-2" />
                    <p className="text-start">{review.comment}</p>
                </div>
            </div>
        </>
    );
};

// Prop type validation
Reviews.propTypes = {
    review: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        user: PropTypes.shape({
            avatar: PropTypes.shape({
                url: PropTypes.string,
            }),
        }),
    }).isRequired,
};

export default Reviews;
