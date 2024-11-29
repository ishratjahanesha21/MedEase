import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../components/common/Navbar.jsx';
import { message } from 'antd';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { InputAdornment } from '@mui/material';
import { FaCamera } from 'react-icons/fa';
import { createSignUp } from '../../features/user/signupSlice';
import Footer from '../../components/common/Footer.jsx';
import './Auth.css'; // Custom CSS for the component

const Register = () => {
    const dispatch = useDispatch();
    const { success, isLoading } = useSelector((state) => state.signup);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('/Profile.png');
    const [avatarPreview, setAvatarPreview] = useState('/Profile.png');

    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set('name', name);
        myForm.set('email', email);
        myForm.set('password', password);
        myForm.set('avatar', avatar);
        dispatch(createSignUp(myForm));
    };

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

    useEffect(() => {
        if (success) {
            navigate('/user/login');
            message.success('User account successfully created');
        }
    }, [success, navigate]);

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-16 lg:mt-44 mb-8">
                <div className="p-5 lg:w-4/12 2xl:w-3/12 border border-white rounded-lg shadow-xl">
                    <h2 className="text-start text-2xl font-semibold leading-6 text-gray-900">Welcome to Register</h2>
                    <form action="" className="space-y-6 py-6" onSubmit={registerSubmit}>
                        {/* Avatar Section */}
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

                        {/* Form Fields */}
                        <TextField
                            id="input-with-icon-textfield"
                            label="Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            className="w-full py-3 px-6"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            label="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            className="w-full py-3 px-6"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            label="Password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOpenIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            className="w-full py-3 px-6"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* Submit Button */}
                        <div>
                            {isLoading ? (
                                <button
                                    className="h-12 w-full mb-5 border rounded-lg text-white"
                                    style={{ backgroundColor: '#EB569A' }}
                                >
                                    Please wait ..
                                </button>
                            ) : (
                                <button
                                    className="h-12 w-full mb-5 border rounded-lg"
                                    style={{ backgroundColor: '#EB569A', border: '1px solid #EB569A' }}
                                >
                                    <span className="font-semibold text-white text-lg">Register</span>
                                </button>
                            )}
                            <span className="text-sm tracking-wide text-gray-400 mt-5">Already have an account?</span>{' '}
                            <Link to="/user/login">
                                <span className="text-sm  leading-6 text-blue-400">Please Login</span>
                            </Link>
                        </div>
                        <div >
                            <Link to="/doctor/signup">
                                <p className="text-sm font-semibold leading-6 text-blue-500 text-center ">Login as Doctor</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
