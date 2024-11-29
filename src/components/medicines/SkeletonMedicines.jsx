const SkeletonMedicines = () => {
    return (
        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4">
            <div className="w-full flex flex-col bg-white border rounded-lg animate-pulse">
                <div className="relative">
                    {/* Image Skeleton */}
                    <div className="w-full h-48 bg-gray-300 p-4"></div>
                </div>

                <div className="lg:block md:block text-start p-5">
                    {/* Type Skeleton */}
                    <div className="h-4 bg-gray-300 w-24 mb-2"></div>

                    {/* Name Skeleton */}
                    <div className="h-6 bg-gray-300 w-32 mb-2"></div>

                    <div className="flex justify-between gap-2">
                        {/* Price Skeleton */}
                        <div className="h-6 bg-gray-300 w-20"></div>

                        {/* Button Skeleton */}
                        <div className="h-8 bg-gray-300 w-24 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonMedicines;
