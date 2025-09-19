'use client'

import Image from 'next/image'

const Cook = () => {
  return (
    <section className='relative' id='about'>
      <div className='container px-4'>
        <div className='absolute right-0 bottom-[-18%] xl:block hidden'>
          <Image
            src='/images/Cook/1.png'
            alt='burger-image'
            width={463}
            height={622}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Cook/sec.png'
              alt='nothing'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              About Me
            </p>
            <h2 className='lg:text-start text-center'>
              Crafted with Passion, Served with Pride
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
              For over a decade, I’ve dedicated myself to the art of sushi — not just as food, but as an experience. 
              From the delicate balance of flavors to the beauty of presentation, 
              I treat every roll, every slice, and every plate as a canvas. 
            </p>
            <p className='text-black/50 text-lg font-normal mb-10 text-start'>
                 My passion lies in creating dishes that delight the eye as much as they satisfy the palate, blending tradition with a touch of modern creativity. 
              Crafting sushi isn’t simply my profession — it’s my way of sharing culture, artistry, and joy with every customer I serve.
            </p>
            {/* <button className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
