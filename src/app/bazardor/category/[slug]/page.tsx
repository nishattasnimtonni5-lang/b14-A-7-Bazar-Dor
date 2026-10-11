import SingleCard from "@/components/shared/SingleCard";
import { ItemProps } from "@/types";
import Link from 'next/link';


const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    { cache: "force-cache" }
  );

  const products: ItemProps[] = await res.json();

  const filteredProducts = products.filter(
    (item) => item.category === slug
  );

  const category = filteredProducts[0];

  if (!category) {
    return <div className="p-5">ক্যাটাগরি পাওয়া যায়নি।</div>;
  }

  return (
    <main className="p-5">
      <div className="bg-base-200 rounded-2xl p-6 mb-6 shadow-sm">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{category.categoryIcon}</span>

          <div>
            <h3 className="text-2xl font-bold">
              {category.categoryNameBn}
            </h3>

            <p className="text-sm text-base-content/60">
              {filteredProducts.length} টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {filteredProducts.map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
    
      </div>
       <p className="text-center py-7 "><Link href={`/`}>← হোম পেজে ফিরে যান </Link></p>
    </main>
  );
};

export default CategoryPage;