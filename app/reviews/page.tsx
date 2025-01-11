import Image from "next/image"

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      photo: "/images/doe.jpg",
      review:
        "This agency transformed our business with their intelligent solutions. Their AI-driven insights helped us make data-backed decisions, and their team was incredibly professional.",
      role: "CEO, TechCorp",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: "/images/smith.jpg",
      review:
        "The digital marketing strategies they implemented boosted our online presence significantly. Highly recommend their services!",
      role: "Marketing Director, Innovate Inc.",
    },
    {
      id: 3,
      name: "Michael Brown",
      photo: "/images/brown.jpg",
      review:
        "Their web development team created a stunning e-commerce platform for us. The UI/UX design is top-notch, and the site performs flawlessly.",
      role: "Founder, StyleHub",
    },
  ]

  return (
    <div className='w-full container min-h-[calc(100vh-(32px*2+48px))] flex flex-col items-center justify-center bg-secondary gap-4 p-4'>
      <h1 className='text-4xl font-bold text-center text-gray-900 '>
        What Our Customers Say
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {reviews.map((review) => (
          <div
            key={review.id}
            className='bg-primary p-8 rounded-lg shadow-md text-center'
          >
            <div className='relative w-24 h-24 mx-auto mb-6'>
              <Image
                src={review.photo}
                alt={review.name}
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>

            <h2 className='text-xl font-semibold text-gray-800 mb-2'>
              {review.name}
            </h2>

            <p className='text-gray-600 text-sm mb-4'>{review.role}</p>

            <p className='text-gray-600 italic'>"{review.review}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}
