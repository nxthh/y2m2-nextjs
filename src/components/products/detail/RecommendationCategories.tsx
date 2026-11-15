"use client";

import React, { useEffect, useState } from "react";
import { ProductCardComponent, ProductResponse } from "../ProductCardComponent";

type CategoryType = {
  category: string;
};

export default async function RecommendationCategories({
  category,
}: CategoryType) {
  // api route
  const [products, setProducts] = useState<ProductResponse[]>([]);
  useEffect(() => {
    async function fetchRecommendCategory() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products/category/${category}`,
      );
      const products = await response.json();
      setProducts(products.products);
    }

    // calling function
    fetchRecommendCategory();
  }, []);

  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((pro) => (
        <ProductCardComponent
          images={pro.images}
          title={pro.title}
          description={pro.description}
          price={pro.price}
        />
      ))}
    </section>
  );
}
