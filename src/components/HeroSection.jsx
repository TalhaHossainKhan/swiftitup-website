import { HERO_CONTENT } from "../constants"
import tiktokVideo from "../assets/tiktok.mov"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
}

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}  
      initial="hidden"
      animate="visible" 
      className="pt-28 lg:pt-36 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
          >
            {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
              <span key={index}>
                {text}
                <br />
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-neutral-400 max-w-xl mx-auto lg:mx-0"
          >
            {HERO_CONTENT.subHeading}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8"
          >
            <a href="#consultation" className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-lg font-medium text-lg">
              {HERO_CONTENT.callToAction.primary}
            </a>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <motion.div
            variants={fadeIn}
            className="w-[280px] md:w-[320px] h-[500px] md:h-[570px] bg-gray-200 rounded-lg overflow-hidden"
          >
            <video
              src={tiktokVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection
