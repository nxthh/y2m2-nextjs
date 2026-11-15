import ProductCardListComponent from "@/components/products/ProductCardListComponent";

// const getAllProducts = () =>
//   fetch(`${process.env.DUMMY_BASE_URL}/products`)
//   .then(data => data.json())
//   .then(pro => pro.products)
//   .catch(error => error)

export default function ProductPage() {
  // const productList = getAllProducts();

  return (
    <ProductCardListComponent />

    // <ProductCardListUseHookComponent product={productList}/>
  );
}
