import { useState } from "react"
import logo from "../assets/swiftitup.svg"
import { RiCloseFill, RiMenu3Line } from "@remixicon/react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    }

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    }

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-4 left-0 right-0 z-50 m-2"
        >
            <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
                <motion.img 
                    src={logo} 
                    alt="logo" 
                    width={120} 
                    height={24} 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                />

                <div className="hidden md:flex space-x-6">
                    <motion.a 
                        href="#project" 
                        className="hover:text-neutral-200"
                        variants={navItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                    >
                        Past Projects
                    </motion.a>
                    <motion.a 
                        href="#testimonial" 
                        className="hover:text-neutral-200"
                        variants={navItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                    >
                        Testimonials
                    </motion.a>
                    <motion.a 
                        href="#key-features" 
                        className="hover:text-neutral-200"
                        variants={navItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                    >
                        Key Features
                    </motion.a>
                </div>

                <div className="hidden md:flex space-x-4 items-center">
                    <motion.a 
                        href="#consultation" 
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Free Consultation
                    </motion.a>
                </div>

                <div className="md:hidden">
                    <motion.button 
                        onClick={toggleMenu} 
                        className="text-white focus:outline-none" 
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="flex flex-col space-y-4">
                            <motion.a 
                                href="#project" 
                                className="hover:text-neutral-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Past Projects
                            </motion.a>
                            <motion.a 
                                href="#key-features" 
                                className="hover:text-neutral-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Key Features
                            </motion.a>
                            <motion.a 
                                href="#consultation" 
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Free Consultation
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar