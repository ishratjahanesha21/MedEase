import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { token } = useSelector((state) => state.userDetails);
    const location = useLocation();

    return token ? (
        children
    ) : (
        <Navigate to="/user/login" state={{ from: location }} replace />
    );
}

// Prop validation
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
