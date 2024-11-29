import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyOrders } from '../../features/user/order/myOrderSlice';
// import Loading from '../../loader/Loading';
import { Alert, AlertTitle } from '@mui/material';
import { Link } from 'react-router-dom';
// import { fetchMyOrders } from 'src\features\user\order\myOrderSlice';

const OrderHistory = () => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector((state) => state.userDetails);
    const { orders, isLoading, isError, error } = useSelector((state) => state.orders.orders);

    const userToken = loggeduser.token;

    useEffect(() => {
        dispatch(fetchMyOrders({ userToken }));
    }, [dispatch, userToken]);

    let content;

    if (isLoading) {
        // content = <Loading />;

        content = <div>
            <p>Loading </p>

        </div>;
    } else if (isError) {
        content = <div className="col-span-12">{error}</div>;
    } else if (orders?.length === 0) {
        content = (
            <div className="col-span-12">
                <div className="mt-5 h-12 lg:w-2/4">
                    <Alert severity="error">
                        <AlertTitle className="text-start">Error</AlertTitle>
                        No order found —{' '}
                        <Link to="/medicine">
                            <strong>Order some medicine!</strong>
                        </Link>
                    </Alert>
                </div>
            </div>
        );
    } else if (orders?.length > 0) {
        content = orders.map((order) => (
            <div
                key={order._id}
                className="col-span-12 md:col-span-3 gap-4 lg:col-span-6 2xl:col-span-4"
            >
                {order.orderItems.map((item) => (
                    <div
                        key={item._id}
                        className="p-4 border rounded shadow-sm bg-gray-100"
                    >
                         <img src={item?.image?.url} alt="" />
                        <div className='mt-4'>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p>Quantity: {item.qty}</p>
                        <p>Price: ${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        ));
    }
    return (
        <div className="w-full lg:full lg:ml-12">
            <h2 className="text-start lg:text-2xl">My Order History</h2>
            <div className="w-full grid grid-cols-12 mt-5 lg:mt-10 gap-5">
                {content}
            </div>
        </div>
    );
};

export default OrderHistory;