import {HERO_CONTENT} from "../constants"
import heroImage from "../assets/hero.jpg"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {straggerChildren: 0.2}}
}

const fadeInUp = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration : 0.6}}
}

const fadeIn = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration : 0.6}}
}

const HeroSection = () => {
  return (
    <motion.section
    variants={containerVariants}  
    initial="hidden"
    animate="visible" 
    className="pt-28 lg:pt-36">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
            <motion.h1
             variants={fadeInUp}
             className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50
             via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
                {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
                    <span key={index}>
                        {text}
                        <br />
                    </span>
                ))}
             </motion.h1>

             <motion.p
              className="mt-6 text-neutral-400 max-w-xl">
                {HERO_CONTENT.subHeading}
             </motion.p>

             <motion.div
                variants={fadeInUp}
                className="mt-6 space-x-4">
                <a href="#consultation" className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium">
                    {HERO_CONTENT.callToAction.primary}
                </a>
            </motion.div>

             <motion.div
             variants={fadeIn}
              className="mt-12">
                <img src={heroImage} alt="Hero image" 
                className="w-full h-auto rounded-3xl border border-neutral-800 mb-20"/>
             </motion.div>
        </div>

    </motion.section>
  )
}

export default HeroSection