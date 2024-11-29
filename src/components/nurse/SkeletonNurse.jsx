const SkeletonNurse = () => {
    return (
        <div className="bg-white col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 animate-pulse">
            <div className="w-full flex flex-col">
                <div className="relative">
                    <div className="w-full h-32 lg:h-48 bg-gray-300 border rounded-lg border-gray-100"></div>
                </div>
                <div className="text-start p-5">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonNurse;
