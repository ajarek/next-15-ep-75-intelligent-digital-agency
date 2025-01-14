import MotionDiv from "@/components/MotionDiv"
import MotionLink from "@/components/MotionLink"
import { auth } from '@/app/api/auth/auth'
import { redirect } from "next/navigation"

export default async function Services() {
  const session = await auth()
  if(!session){
    redirect('/login')
  }
  return (
    <div className='w-full container min-h-[calc(100vh-(32px*2+48px))] flex flex-col items-center justify-center bg-secondary gap-4 p-4'>
      <h1 className='text-4xl font-bold text-center text-gray-900 mb-8'>
        Tailored Solutions for Every Need
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
        <MotionDiv   className='bg-primary p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            AI & Automation
          </h2>
          <ul className='text-gray-600 space-y-2'>
            <li>AI-driven insights</li>
            <li>Chatbots</li>
            <li>Predictive analytics</li>
          </ul>
        </MotionDiv >

        <MotionDiv   className='bg-primary p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Digital Marketing
          </h2>
          <ul className='text-gray-600 space-y-2'>
            <li>SEO</li>
            <li>Social media campaigns</li>
            <li>Pay-per-click advertising</li>
          </ul>
        </MotionDiv >

        <MotionDiv   className='bg-primary p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Web Development
          </h2>
          <ul className='text-gray-600 space-y-2'>
            <li>Custom websites</li>
            <li>E-commerce platforms</li>
            <li>UI/UX design</li>
          </ul>
        </MotionDiv >

        <MotionDiv   className='bg-primary p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Branding & Design
          </h2>
          <ul className='text-gray-600 space-y-2'>
            <li>Logo creation</li>
            <li>Brand strategy</li>
            <li>Visual identity</li>
          </ul>
        </MotionDiv >
      </div>

      <div className='bg-gray-50 p-8 rounded-lg mb-12'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-6'>
          Our Process
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <div className='text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Step 1</h3>
            <p className='text-gray-600'>Consultation</p>
          </div>

          <div className='text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Step 2</h3>
            <p className='text-gray-600'>Strategy Development</p>
          </div>

          <div className='text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Step 3</h3>
            <p className='text-gray-600'>Execution</p>
          </div>

          <div className='text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Step 4</h3>
            <p className='text-gray-600'>Optimization and Reporting</p>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
          Discover How We Can Help You Succeed
        </h2>
        <div className='flex justify-end'>
          <MotionLink label="Get in Touch" href="/contact" />
        </div>
      </div>
    </div>
  )
}
