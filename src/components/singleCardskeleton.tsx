const SingleCardSkeleton = () => {
    return (
        <div className="border border-gray-300 rounded-lg px-3 py-5 animate-pulse">

            <div className="flex gap-2 py-4">
                <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>

                <div className="flex-1 space-y-3 py-2">
                    <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                </div>
            </div>

            <div className="h-5 w-2/3 bg-gray-200 rounded mb-4"></div>

            <div className="flex justify-between items-center">
                <div className="h-5 w-1/3 bg-gray-200 rounded"></div>
                <div className="h-7 w-16 bg-gray-200 rounded"></div>
            </div>

        </div>
    );
};

export default SingleCardSkeleton;