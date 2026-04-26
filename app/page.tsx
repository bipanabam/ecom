import FeaturedProduct from "@/components/FeaturedProduct";
import ProductList from "@/components/ProductList";

const Home = async ({searchParams} : { searchParams: Promise<{ category?: string }> | null }) => {
  const params = await searchParams;
  const category = params?.category || "all";

  return (
    <div className='w-full'>
      <FeaturedProduct />
      <ProductList category={category} params="homepage" />
    </div>
  )
}

export default Home