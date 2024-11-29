import { NavLink, Outlet } from 'react-router-dom';

const CategoryLayout = () => {
    return (
        <div className='w-11/12 md:w-3/4 lg:w-3/4 xl:w-7/12 2xl:w-6/12 mx-auto border border-white shadow-md bg-white rounded-md lg:h-84 p-6'>
            <div className="flex gap-4">
                <NavLink
                    to="find-doctor"
                    className={({ isActive }) =>
                        'mb-2 font-medium text-md' + (isActive ? '' : ' text-gray-600')}
                    style={({ isActive }) => ({ color: isActive ? '#EB569A' : 'gray' })}
                >
                    Find Doctor
                </NavLink>
            </div>
            <hr />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default CategoryLayout;
