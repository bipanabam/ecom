import ProductList from "@/components/ProductList"


const ProductPage = async ({searchParams} : { searchParams: Promise<{ category?: string }> | null }) => {
  const params = await searchParams;
  const category = params?.category || "all";

  return (
    <div>
        <ProductList category={category} params="products" />
    </div>
  )
}

export default ProductPage