'use client'
import Image from 'next/image'
import Link from 'next/link'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section id='home' className='bg-gray-50'>
      <div className='container xl:pt-7 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>
            <h1 className='font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16'>
              Where Flavor Meets Craft
            </h1>
            <p className='text-black/55 text-lg font-normal mb-10 lg:text-start text-center'>
              I believe food is more than a meal - it's an experience. Each dish is prepared to honor tradition while sparking joy.
            </p>
            <div className='flex flex-col sm:flex-row gap-10 items-center justify-center lg:justify-start'>
              <div>
                <p className='text-xl text-primary'>
                  <CountUp end={14} duration={5} />+
                </p>
                <p className='text-black text-lg '>
                  Years of Experience
                </p>
              </div>
              <div>
                <p className='text-xl text-primary '>
                  5
                </p>
                <p className='text-black text-lg '>
                  Company Served
                </p>
              </div>

            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
              <Image
                src={'/images/hero/34.jpg'}
                alt='pizza-image'
                width={68}
                height={68}
              />
              <p className='text-lg font-normal'>
                Over 50+ <br /> signature dishes
              </p>
            </div>
            <Image
              src='/images/hero/main.png'
              alt='nothing'
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
