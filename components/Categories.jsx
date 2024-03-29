import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getCategories } from "@/services";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="bg-[#fde2e4] shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-[#f08080]/40 border-b pb-4">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3 border-b border-[#f08080]/10 hover:underline hover:text-[#f08080]">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
