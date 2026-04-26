import Image from 'next/image';

const Home = () => {
  return (
    <div className='relative w-full'>
      <div className='relative aspect-2/1 mb-12'>
        <Image src="/assets/fff.avif" alt="Featured Product" fill loading='eager' />
      </div>
      <div className='absolute top-1/2 transform -translate-y-1/2 left-7 flex flex-col'>
        <h1 className='font-epilogue text-4xl md:text-6xl lg:text-8xl font-bold bg-linear-to-r from-white to-foreground bg-clip-text text-transparent tracking-[-0.04em]'>
          PRECISION
          <br />
          MEETS
          <br />
          POWER
        </h1>
      </div>
    </div>
  )
}

export default Home