"use client";

import { useState } from "react";

import { ItemProps } from "@/types";

import SingleCard from "./SingleCard";

interface SortProductsProps {
    products: ItemProps[];
}

const SortProducts = ({ products }: SortProductsProps) => {
    const [sortOrder, setSortOrder] = useState("default");

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "low") {
            return Number(a.today) - Number(b.today);
        }

        if (sortOrder === "high") {
            return Number(b.today) - Number(a.today);
        }

        return 0;
    });

    return (
        <div>
            <div className="flex justify-end items-center gap-3 mb-5">
                <label htmlFor="sortOrder" className="text-sm">
                    সাজান
                </label>

                <select
                    id="sortOrder"
                    className="select select-bordered select-sm"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="low">দাম: কম থেকে বেশি</option>
                    <option value="high">দাম: বেশি থেকে কম</option>
                </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {sortedProducts.map((item:ItemProps) => (
                    <SingleCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default SortProducts;