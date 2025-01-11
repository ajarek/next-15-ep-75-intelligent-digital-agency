import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className='w-full container min-h-[calc(100vh-(32px*2+48px))] flex flex-col items-center justify-center bg-secondary gap-4 p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='relative w-full h-96 md:h-[400px] rounded-lg overflow-hidden'>
          <Image
            src='/images/team.jpg'
            alt='Our Team'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>

        <div className='space-y-6'>
          <h1 className='text-4xl font-bold text-gray-900'>About Us</h1>
          <p className='text-lg text-gray-600'>
            We are a forward-thinking company dedicated to transforming
            businesses with intelligent solutions. Our team of experts leverages
            cutting-edge technology to drive innovation, efficiency, and growth
            for our clients. Whether it&apos;s through AI, data analytics, or
            custom software development, we are committed to delivering results
            that matter.
          </p>
          <p className='text-lg text-gray-600'>
            Our mission is to empower companies to thrive in the digital age by
            providing tailored solutions that address their unique challenges.
            We believe in collaboration, creativity, and continuous improvement,
            ensuring that our clients stay ahead of the curve.
          </p>
          <Link
            href='/contact'
            className={`${buttonVariants({
              variant: "default",
            })}  shadow-xl  text-xl flex items-center gap-2 `}
            aria-label='Get Started'
          >
            {" "}
            Learn More{" "}
          </Link>
        </div>
      </div>
    </div>
  )
}
