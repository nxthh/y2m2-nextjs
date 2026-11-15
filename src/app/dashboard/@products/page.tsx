import ProductCardListComponent from "@/components/products/ProductCardListComponent";

export default function DashboardProductsPage() {
  return (
    <ProductCardListComponent className="grid grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-1" />
  );
}
