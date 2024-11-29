import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals, removeFromCart } from '../../features/medicine/cartSlice';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { Button } from '@mui/material';
import cartImg from '../../assets/bag.png'
const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    const handleRemove = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex-grow mt-20 lg:mt-48 lg:w-2/4 mx-auto border rounded-lg p-4 mb-12">
                <h1 className="text-lg font-medium text-gray-900">Shopping cart</h1>
                {cart.cartItems?.length > 0 ? (
                    <div>
                        <div>
                            {cart.cartItems &&
                                cart.cartItems.map((cartItem) => (
                                    <div key={cartItem.id || cartItem.name} className="w-full pl-3 pr-3 lg:w-full 2xl:w-3/4 mx-auto border-b mt-4">
                                        <div className="w-full lg:w-full mx-auto flex justify-between mb-10">
                                            <div className="w-2/4">
                                                <img src={cartItem.image.url} alt={cartItem.name} className="h-32 w-44" />
                                            </div>
                                            <div className="w-full">
                                                <div className="flex justify-between mt-5">
                                                    <h3 className="text-start text-base font-medium text-gray-900">{cartItem.name}</h3>
                                                    <button onClick={() => handleRemove(cartItem)}>
                                                        <RxCross1 className="text-gray-500 text-xl mt-1 mr-2 lg:mr-5" />
                                                    </button>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm mt-4">
                                                    <p className="text-gray-500">Qty {cartItem.cartQuantity}</p>

                                                    <div className="flex">
                                                        <p className="mr-4">{cartItem.price * cartItem.cartQuantity}.00 tk</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            <div className="w-full lg:w-full bg-gray-50 2xl:w-3/4 mx-auto flex justify-between mt-8 ">
                                <div className="p-8 w-full">
                                    <div className="flex justify-between text-base font-medium text-gray-900 border-b">
                                        <p>Shipping Charge </p>
                                        <p>60.00 TK</p>
                                    </div>
                                    <div className="mt-4 flex justify-between text-base font-medium text-gray-900 border-b mb-10">
                                        <p>Subtotal</p>
                                        <p>{cart.cartTotalAmount + 60} TK</p>
                                    </div>
                                    <Link to="/shipping" className="mt-10">
                                        <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 w-full">
                                            Check out
                                        </button>
                                    </Link>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <Link to="/medicine/store"><p>
                                            or{' '}
                                            <button
                                                type="button"

                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p></Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full mb-20 text-center">
                        <img src={cartImg} alt="" className="w-3/4 lg:w-1/4 mx-auto h-48" />
                        <p className="mt-10 text-red-500 font-bold mb-10">Your Cart is Currently Empty</p>
                        <Link to="/medicine/store">
                            <Button color="secondary"
                                variant="contained" className="mt-10">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Cart;
