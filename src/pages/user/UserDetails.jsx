import { useState, useEffect } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// import { updateProfile } from '../../features/user/updateprofile/updateProfileSlice';
import { FaCamera } from 'react-icons/fa'; // React Icons
import { updateProfile } from '../../features/user/Login/loginSlice';

const UserDetails = () => {
    const { loggeduser } = useSelector((state) => state.userDetails);
    const user = loggeduser.user;
    const userToken = loggeduser.token;
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        phone: '',
        birthdate: '',
        avatar: null,
        avatarPreview: '/Profile.png',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                gender: user.gender || '',
                phone: user.phone || '',
                birthdate: user.birthdate || '',
                avatar: null,
                avatarPreview: user.avatar?.url || '/Profile.png',
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setFormData((prevData) => ({
                    ...prevData,
                    avatarPreview: reader.result,
                    avatar: file,
                }));
            }
        };

        if (file) reader.readAsDataURL(file);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const { name, email, gender, phone, avatar } = formData;
        const updatedData = { name, email, gender, phone, avatar };

        dispatch(updateProfile({ data: updatedData, userToken }));
        message.success('Your Info Updated Successfully');
    };

    return (
        <div className="bg-white mb-20 ">
            <div className="w-full">
                <form onSubmit={handleUpdate}>
                    <div className="w-full lg:w-full lg:m-0">
                        {/* Avatar Section */}
                        <div className="relative w-1/4 mx-auto">
                            {/* Avatar Image */}
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-gray-300 shadow-lg">
                                <img
                                    src={formData.avatarPreview}
                                    alt="Avatar Preview"
                                    className="object-cover w-full h-full"
                                />
                                {/* Camera Icon */}
                                <label
                                    htmlFor="avatar"
                                    className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-md"
                                >
                                    <FaCamera className="text-xl" />
                                </label>
                            </div>

                            {/* Hidden File Input */}
                            <input
                                type="file"
                                id="avatar"
                                name="avatar"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                className="hidden"
                            />
                        </div>

                        {/* Name */}
                        <div className="w-3/4 mx-auto mt-5">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="w-3/4 mx-auto mt-5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Gender */}
                        <div className="w-3/4 mx-auto mt-5">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                Gender
                            </label>
                            <input
                                type="text"
                                id="gender"
                                name="gender"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.gender}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Phone */}
                        <div className="w-3/4 mx-auto mt-5">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Birthdate */}
                        <div className="w-3/4 mx-auto mt-5">
                            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                                Birthdate
                            </label>
                            <input
                                type="date"
                                id="birthdate"
                                name="birthdate"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.birthdate}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Update Button */}
                        <div className="w-3/4 mx-auto">
                            <button
                                type="submit"
                                className="w-full mt-10 bg-violet-500 hover:bg-violet-700 text-white border-none py-2 px-4 rounded-md"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserDetails;
