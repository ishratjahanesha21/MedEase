
import { AiOutlineCheckCircle } from "react-icons/ai";
import {  useParams } from 'react-router-dom';
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const OrderPayment = () => {
    const { tran_Id } = useParams();

    return (
        <div>
            <Navbar/>
            <div className="mt-24 lg:mt-64 w-3/4 mx-auto mb-32 text-center">
            <AiOutlineCheckCircle className="text-9xl mx-auto text-green-400" />
            <p className="lg:mt-10 text-4xl text-green-400">Payment Success</p>
            {tran_Id && (
                <p className="text-gray-500 mt-4">Transaction ID: <span className="font-semibold">{tran_Id}</span></p>
            )}
        </div>
        <Footer/>
        </div>
    );
};

export default OrderPayment;
