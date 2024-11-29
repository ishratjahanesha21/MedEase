import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import{ message }from "antd";
import { useDispatch } from 'react-redux';
import { addToCart, getTotals } from '../../features/medicine/cartSlice';
const Medicines = ({ medicine }) => {
    const dispatch = useDispatch();
    const handleCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
        message.success("Medicine added to cart")
    }
    return (
        <div className=" col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4  ">
            <div className="w-full flex flex-col bg-white border rounded-lg">
                <div className="relative">
                    <Link >
                        <img
                            src={medicine.image.url}
                            className="w-full h-48 p-4"
                            alt={medicine.name}
                        />
                    </Link>
                </div>

                <div className=" lg:block md:block text-start p-5">
                    <p className="text-slate-400 text-sm font-sm">{medicine.type}</p>
                    <Link to={`/medicine/${medicine._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-2" >
                            {medicine.name}
                        </p>
                    </Link>

                    <div className="flex justify-between gap-2">
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-2" >
                            Price {medicine.price}Tk
                        </p>
                        {
                            medicine?.quantity > 0 ?

                                <button className='text-sm h-8 border rounded-lg p-1 text-white 'style={{backgroundColor:"#EB569A", border:'1px solid #EB569A'}} onClick={() => handleCart(medicine)} > Add to Cart</button>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
Medicines.propTypes = {
    medicine: PropTypes.string.isRequired,
};
export default Medicines;