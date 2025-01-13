import ContactForm from '@/components/ContactForm'
import MotionImage from '@/components/MotionImage'

import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] grid grid-cols-2 max-lg:grid-cols-1 place-items-center bg-secondary p-4 gap-4 '>
        <MotionImage src='/images/contact.jpg' alt='contact' width={400} height={400}/>
        <ContactForm/>
    </div>
  )
}

export default Contact