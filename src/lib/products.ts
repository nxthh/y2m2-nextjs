import type { ProductResponse } from "@/components/products/ProductCardComponent";

export function getProduct(id: string): Promise<ProductResponse> {
  return fetch(`${process.env.DUMMY_BASE_URL}/products/${id}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.status}`);
    }

    return response.json();
  });
}
