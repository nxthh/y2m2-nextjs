import ProductDetailDisplayComponent from "@/components/products/detail/ProductDetailDisplayComponent";
import RecommendationCategories from "@/components/products/detail/RecommendationCategories";
import { Suspense } from "react";

const getSingleProduct = (proId: number) =>
  fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
    .then((data) => data.json())
    .then((product) => product)
    .catch((error) => error);

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { id } = await params;
  const singleProduct = getSingleProduct(id);

  // using search params
  const { category = "" } = await searchParams;

  return (
    <section>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1>Category: {category}</h1>

        <ProductDetailDisplayComponent product={singleProduct} />

        {/* product recommendation winthin category */}
        <h1 className="mt-20">Recommanded Products</h1>
        <RecommendationCategories category={category} />
      </Suspense>
    </section>
  );
}
  