
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../features/medicine/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import cartImg from '../../assets/bag.png'
import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { createOrder } from '../../features/order/orderSlice';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { RxCross1 } from "react-icons/rx";
const Shipping = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    const handleRemove = (product) => {
        dispatch(removeFromCart(product));
    };

    const itemsPrice = cart.cartItems.reduce(
        (acc, item) => acc + item.cartQuantity * item.price,
        0
    );
    const shippingPrice = 60;
    const totalPrice = itemsPrice + shippingPrice;
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');
    const shippingInfo = { name, phone, address, city, }
    const orderItems = cart.cartItems;
    const data = { shippingInfo, orderItems, itemsPrice, shippingPrice, totalPrice, paymentInfo }
    const CreateOrder = (e) => {
        e.preventDefault();
        if (name && address && phone && city) {
            dispatch(createOrder({ data, userToken }));
            dispatch(clearCart());
        } else {
            toast.error('Please enter your details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    }
    const paymentInfos = [
        {

            label: 'Select Payment Method ',
        },

        {
            value: 'Bkash',
            label: 'Bkash',
        },
        {
            value: 'Nagad',
            label: 'Nagad',
        },
    ];
    const { order } = useSelector(state => state.order);
    useEffect(() => {
        if (paymentInfo === 'Bkash' || paymentInfo === 'Nagad') {
            if (order[0]) {
                window.location.replace(order[0].url);
            }
        }
    }, [order, paymentInfo])

    return (
        <div>
            <Navbar/>
            <div className="mt-20 lg:mt-52 lg:w-3/4 mx-auto mb-20 lg:flex border p-4">
                <form action="" className="p-3 lg:p-0  w-full mx-auto lg:w-2/4 " onSubmit={CreateOrder}>
                    <p className="text-start text-2xl">Shipping Details</p>
                    <div className="mt-10">
                        <TextField
                            id="filled-basic"
                            select
                            // label="Gender"
                            defaultValue="EUR"
                            SelectProps={{
                                native: true,
                            }}
                            variant="filled"
                            className="bg-white w-full "
                            onChange={(e) => setPaymentInfo(e.target.value)}
                        >
                            {paymentInfos.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div className="mt-10">
                        <TextField id="filled-basic" label="Your Name" variant="filled" className="w-full" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mt-5">
                        <TextField id="filled-basic" label="Location (house,road,sector)" variant="filled" className="w-full" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="mt-5">
                        <TextField id="filled-basic" label="City" variant="filled" className="w-full mt-5" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="mt-5">
                        <TextField id="filled-basic" label="Phone No" variant="filled" className="w-full mt-5" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mt-5 w-full">
                        <button  className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 h-10" onClick={CreateOrder}>Confirm</button>
                    </div>
                </form>

                {cart.cartItems?.length > 0 ?
                    <div>
                        <div className="w-full">
                            <p className="text-start text-2xl  ml-3">Order Review</p>
                            {cart.cartItems &&
                                cart.cartItems.map((cartItem) => (
                                    <div key={cartItem.id || cartItem.name} className=" pl-3 pr-3 w-full mx-auto mt-5">
                                        <div className="w-full  mx-auto border-b flex justify-between mb-10">
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

                    </div> : <div className="w-ful mb-20">
                        <img src={cartImg} alt="" className="w-3/4 lg:w-1/4 mx-auto h-52" />
                        <p className="mt-10 text-red-500 font-bold">Your Cart is Currently Empty</p>
                    </div>
                }
                <ToastContainer
                    position="top-right"
                    autoClose={500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"

                />
                {/* Same as */}
                <ToastContainer />
            </div>
            <Footer/>
        </div>
    );
};

export default Shipping;