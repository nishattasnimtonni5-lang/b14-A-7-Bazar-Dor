const ProductSkeleton = () => {
  return (
    <div className="animate-pulse rounded-lg border p-4 shadow-sm">
      <div className="h-40 rounded-md bg-gray-200"></div>

      <div className="mt-4 h-5 w-3/4 rounded bg-gray-200"></div>

      <div className="mt-2 h-4 w-1/2 rounded bg-gray-200"></div>

      <div className="mt-4 h-6 w-1/3 rounded bg-gray-200"></div>
    </div>
  );
};

export default ProductSkeleton;