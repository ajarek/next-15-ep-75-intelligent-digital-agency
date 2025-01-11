import * as motion from "motion/react-client"
import Image from "next/image"

const MotionImage = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 3,
          scale: { type: "spring", visualDuration: 2, bounce: 0.5 },
      }}
    >
      <Image
        src='/images/contact.jpg'
        alt='contact'
        width={400}
        height={400}
        className='rounded-sm shadow-lg shadow-foreground'
      />
    </motion.div>
  )
}
export default MotionImage
