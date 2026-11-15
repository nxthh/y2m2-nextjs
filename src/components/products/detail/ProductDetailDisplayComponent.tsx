"use client";

import { Suspense, use } from "react";
import { ProductResponse } from "../ProductCardComponent";
import { ProductCardDetailComponent } from "./ProductDetailComponent";

export default function ProductDetailDisplayComponent({
  product,
}: {
  product: Promise<ProductResponse>;
}) {
  return (
    <Suspense fallback={"loading..."}>
      <ProductDetailContent product={product} />
    </Suspense>
  );
}

function ProductDetailContent({
  product,
}: {
  product: Promise<ProductResponse>;
}) {
  const { images, title, description, price } = use(product);

  return (
    <ProductCardDetailComponent
      images={images}
      title={title}
      description={description}
      price={price}
    />
  );
}
