import FeaturedProduct from "@/components/FeaturedProduct";
import ProductList from "@/components/ProductList";

const Home = async ({searchParams} : { searchParams: Promise<{ category?: string }> | null }) => {
  const params = await searchParams;
  const category = params?.category || "all";

  return (
    <div className='w-full'>
      <FeaturedProduct />
      <h1 className="text-2xl font-epilogue font-bold text-foreground/90 mb-4 px-10 py-3 sm:py-6">Products</h1>
      
      <ProductList category={category} params="homepage" />
    </div>
  )
}

export default Home