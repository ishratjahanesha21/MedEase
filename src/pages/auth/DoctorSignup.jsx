import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createDoctorSignUp } from '../../features/doctors/doctorsignupSlice';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { message } from 'antd';
import { FaCamera } from 'react-icons/fa';
import './Auth.css'
const DoctorSignup = () => {
    const dispatch = useDispatch();
    const { success,isLoading } = useSelector(
        (state) => state.doctorsignup
    );
    const navigate = useNavigate()
    const [avatar, setAvatar] = useState("/Doctor.png");
    const [avatarPreview, setAvatarPreview] = useState("/Doctor.png");
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [fees, setFees] = useState('');
    const [nid_No, setnid_No] = useState('');
    const [bmdc_No, setbmdc_No] = useState('');
    const [type, setType] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [degree, setDegree] = useState("");
    const [expert, setExpert] = useState("");
    const [experience, setExperience] = useState("");
    const [work, setWork] = useState("");
    const data = ({ title, gender, fees, nid_No, bmdc_No, type, phone, name, email, password, degree, expert, work, experience, avatar });
    const registerSubmit = (e) => {
        e.preventDefault();
        if (title && gender && fees && nid_No && bmdc_No && type && phone && name && email && password && degree && expert && work && experience && avatar) {
            dispatch(createDoctorSignUp(data));
        }
    }
    useEffect(() => {
        if (success) {
            navigate('/doctor/login');
            message.success("Account create successfully ")
        }
    }, [success, navigate]);
    const registerDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    const titles = [
        {

            label: 'Choose title ',
        },
        {
            value: 'Dr.',
            label: 'Dr.',
        },
        {
            value: 'Prof. Dr.',
            label: 'Prof. Dr.',
        },
        {
            value: 'Ass.Prof. Dr.',
            label: 'Ass.Prof. Dr.',
        },
        {
            value: 'Assoc.Prof. Dr.',
            label: 'Assoc.Prof. Dr.',
        },
    ];
    const genders = [
        {

            label: 'Select Gender ',
        },
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
    ];
    const types = [
        {

            label: 'Choose type ',
        },
        {
            value: 'Medical',
            label: 'Medical',
        },
        {
            value: 'Dental',
            label: 'Dental',
        },
    ];

    return (
        <div>
            <Navbar />
            <div className=" mt-28 lg:mt-40 lg:flex justify-between lg:gap-4 mb-10">

                <div className="w-full">

                    <div className="mt-16 hidden lg:block ">
                        <p className="text-4xl text-start  font-bold w-3/4 ml-10" style={{ color: '#EB569A' }}>Are You A Qualified Doctor?</p>
                        <p className=" text-gray-900 lg:text-3xl text-start lg:w-3/4 ml-10 font-bold mt-12">Join the forefront of digital healthcare</p>
                        <p className="text-gray-900 text-xl text-start ml-10 lg:w-3/4  mt-5">Join HealthBridge network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.</p>
                    </div>
                    <div className="mt-16 hidden lg:block ">
                        <p className="text-4xl text-start  font-bold w-3/4  ml-10" style={{ color: '#EB569A' }}>Benefits Of Joining</p>
                        <p className="text-gray-900 text-xl text-start  lg:w-3/4 ml-10 mt-10">Doctors can join the platform using our simple on boarding process. We verify every doctor to make sure only BMDC authorised doctors are providing consultation using our latest technology.</p>
                        <p className="text-gray-900 text-xl text-start  lg:w-3/4 ml-10 mt-10">You will be at the forefront of digital healthcare innovations providing accessible patient care for all.</p>
                        <p className="text-gray-900 text-xl text-start  lg:w-3/4 ml-10 mt-10">You will be working independently, making autonomous medical decisions, and supported by our HealthBridge technical team who are here to assist both patient and yourself when you’re on session or outside sessions.</p>
                    </div>

                    <div className="mt-16 hidden lg:hidden">
                        <p className=" text-2xl lg:text-4xl text-start  font-bold lg:w-3/4 ml-10 lg:ml-0" style={{ color: '#EB569A' }}>Are You A Qualified Doctor?</p>
                        <p className="text-xl text-gray-900 lg:text-3xl text-center mt-12 font-bold lg:ml-3">Join the forefront of digital healthcare</p>
                        <p className="text-gray-900 text-xl text-start lg:ml-0 lg:w-3/4 ml-10 mt-10">Join HealthBridge network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.</p>
                    </div>
                    <div className=" block lg:hidden ">
                        <p className="text-xl text-start  font-bold w-3/4 ml-10 " style={{ color: '#EB569A' }}>Are You A Qualified Doctor?</p>
                        <p className=" text-gray-900 text-start w-3/4 ml-10 mt-3 font-bold ">Join the forefront of digital healthcare</p>
                        <p className="text-gray-900 text-start text-xl w-3/4 ml-10 mt-5 mb-12">Join HealthBridge network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.</p>
                    </div>
                </div>
                <div className="w-3/4 mx-auto lg:w-full lg:mt-16 mt-10 ">
                    <p className="text-2xl lg:text-4xl lg:text-center font-bold  lg:w-3/4  " style={{ color: '#EB569A' }}>Doctors Registration</p>
                    <form action="" className=" mt-8" onSubmit={registerSubmit}>
                        <div className="avatar-container">
                            <img
                                src={avatarPreview}
                                alt="Avatar Preview"
                                className="avatar-preview"
                            />
                            <label htmlFor="avatar-upload" className="avatar-upload-icon">
                                <FaCamera className="camera-icon" />
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    name="avatar"
                                    accept="image/*"
                                    onChange={registerDataChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                        {/* <div className="mt-12 lg:w-3/4 mx-auto lg:flex lg:justify-center gap-6">
                            <TextField
                                id="title"
                                select
                                label="Title"
                                variant="standard"
                                className="bg-white w-full mb-12"
                                onChange={(e) => setTitle(e.target.value)}
                                SelectProps={{ native: true }}
                            >
                                {titles.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                id="name"
                                label="Name"
                                variant="standard"
                                className="w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div> */}
                        <div className="mt-12 lg:w-3/4 mx-auto  lg:flex lg:justify-center lg:ml-0 lg:mr-0 gap-6">
                            {/* <TextField id="standard-basic" label="Title" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={title} onChange={(e) => setTitle(e.target.value)} /> */}
                            <TextField
                                id="standard-select-currency-native"
                                select
                                label="Title"
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                                variant="standard"
                                className="bg-white w-full mb-12"
                                onChange={(e) => setTitle(e.target.value)}
                            >
                                {titles.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>

                            <div className="w-full mt-3 lg:mt-0">
                                <TextField id="standard-basic" label="Name" variant="standard" className="w-full" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>

                        <div className="mt-7 lg:mt-12 lg:w-3/4 mx-auto  lg:flex lg:justify-center lg:ml-0 lg:mr-0 gap-6">
                            <TextField
                                id="standard-select-currency-native"
                                select
                                label="Gender"
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                                variant="standard"
                                className="bg-white w-full "
                                onChange={(e) => setGender(e.target.value)}
                            >
                                {genders.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <div className="w-full  mt-3 lg:mt-0">
                                <TextField id="standard-basic" label="Degree" variant="standard" className="w-full" value={degree} onChange={(e) => setDegree(e.target.value)} />
                            </div>
                        </div>

                        <div className="mt-5 lg:mt-12 lg:w-3/4 mx-auto  lg:flex lg:justify-center lg:ml-0 lg:mr-0 gap-6">
                            <TextField id="standard-basic" label="Expert" variant="standard" className="w-full mt-12" value={expert} onChange={(e) => setExpert(e.target.value)} />
                            <div className="w-full  mt-3 lg:mt-0">
                                <TextField id="standard-basic" label="Experience" variant="standard" className="w-full  mt-12" value={experience} onChange={(e) => setExperience(e.target.value)} />
                            </div>

                        </div>
                        <div className="mt-5 lg:mt-12 lg:w-3/4 mx-auto  lg:flex lg:justify-center lg:ml-0 lg:mr-0 gap-6">
                            <TextField id="standard-basic" label="Work" variant="standard" className="w-full  mt-12" value={work} onChange={(e) => setWork(e.target.value)} />

                            <div className="w-full mt-3 lg:mt-0">
                                <TextField id="standard-basic" label="Fees" variant="standard" className="w-full " value={fees} onChange={(e) => setFees(e.target.value)} />
                            </div>
                        </div>
                        <div className="mt-5 lg:mt-12 lg:w-3/4 mx-auto  lg:flex lg:justify-center lg:ml-0 lg:mr-0 gap-6">
                            <TextField id="standard-basic" label="NID / Passport Number" variant="standard" className="w-full  mt-12" value={nid_No} onChange={(e) => setnid_No(e.target.value)} />
                            <div className="w-full  mt-3 lg:mt-0" >
                                <TextField id="standard-basic" label="BMDC Registration Number" variant="standard" className="w-full" value={bmdc_No} onChange={(e) => setbmdc_No(e.target.value)} />
                            </div>
                        </div>
                        <div className="mt-5 lg:mt-12 lg:w-3/4 mx-auto  lg:flex lg:justify-center lg:ml-0 lg:mr-0 gap-6">
                            <TextField
                                id="standard-select-currency-native"
                                select
                                label="Doctor Type"
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                                variant="standard"
                                className="bg-white w-full"
                                onChange={(e) => setType(e.target.value)}
                            >
                                {types.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>

                            <div className="w-full  mt-3 lg:mt-0">
                                <TextField id="standard-basic" label="Phone Number" variant="standard" className="w-full  " value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>


                        <div className="mt-5 lg:mt-12 lg:w-3/4 mx-auto  lg:flex lg:justify-center lg:ml-0 lg:mr-0 gap-6 mb-10">
                            <TextField id="standard-basic" label="Email" variant="standard" className="w-full mt-12" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className="w-full  mt-3 lg:mt-0" >
                                <TextField id="standard-basic" label="Password" variant="standard" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="lg:w-3/4">
                        {
                            isLoading ? <Button color="secondary"
                            variant="contained" className="w-full lg:w-full xl:w-2/4 mt-10 " onClick={registerSubmit}>Please wait ...</Button>:<Button color="secondary"
                            variant="contained" className="w-full lg:w-full xl:w-2/4 mt-10 " onClick={registerSubmit}>Register</Button>
                        }
                            <Button color="secondary"
                                variant="contained" className="w-full lg:w-full xl:w-2/4 mt-10 " onClick={registerSubmit}>Register</Button>
                        </div>
                        <div className="lg:w-3/4 mt-5">
                            <span className="text-sm tracking-wide text-gray-400 mt-8">Already have a account ?</span> <Link to="/doctor/login"><span className="text-sm font-semibold leading-6 text-gray-900">Please Login</span></Link>
                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default DoctorSignup;