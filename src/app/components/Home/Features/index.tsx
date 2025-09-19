'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { FeaturesType } from '@/app/types/features'
import FeaturesSkeleton from '../../Skeleton/Features'

const Features = () => {
  const [features, setFeatures] = useState<FeaturesType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatures(data.FeaturesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='features'>
      <div className='container'>
        <div className='text-center mb-14'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            My Expertise
          </p>
          <h2 className='font-semibold lg:max-w-60% mx-auto mt-3'>
            Over a Decade of Culinary Excellence & Dedication
          </h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-6 mt-24'>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
              <FeaturesSkeleton key={i} />
            ))
            : features.map((items, i) => (
              <div
                key={i}
                className='p-8 relative rounded-3xl bg-linear-to-b from-primary/10 to-white shadow-md hover:scale-105 transition duration-300 ease-in-out '>
                <div className=' flex justify-center  '>
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={510}
                    height={10}
                  />
                </div>
                <p className='text-2xl text-black font-semibold text-center mt-2'>
                  {items.heading}
                </p>
                {items.links && (
                  <Link
                    href={items.links}
                    target="_blank"
                    className="block text-center text-primary font-medium mt-3 hover:underline"
                  >
                    {items.links}
                  </Link>
                )}
                <p className='flex items-center gap-2 text-base font-normal text-black/50 mt-2 leading-6'>
                  <Icon icon="mdi:calendar" className="w-4 h-4 text-primary flex-shrink-0" />
                  {items.date}
                </p>

                <p className='flex items-center gap-2 text-base font-normal text-black/50 mt-2 leading-6'>
                  <Icon icon="mdi:map-marker" className="w-4 h-4 text-primary flex-shrink-0" />
                  {items.loc}
                </p>


              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Features
