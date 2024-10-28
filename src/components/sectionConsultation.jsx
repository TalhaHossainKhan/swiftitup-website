import React, { useState } from 'react';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const SectionConsultation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const serviceID = 'service_ts1j4h7';
        const templateID = 'template_ko5lmqq';
        const userID = 'CRePh6rYT7KQx1D2M';

        try {
            await emailjs.send(serviceID, templateID, formData, userID);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', description: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <section id="consultation" className="py-16">
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <div className="text-center mb-12 border-t border-neutral-800">
                    <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                        Request a Consultation
                    </h2>
                    <p className="mt-4 text-neutral-400">
                        Fill out the form below to request a personalized consultation for your checkout bot needs.
                    </p>
                </div>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto"
                >
                    <motion.form 
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                        variants={formVariants}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-neutral-300 mb-1">Checkout Bot Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={isSubmitted} // Disable button if submitted
                                className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 ${
                                    isSubmitted ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500'
                                }`}
                            >
                                {isSubmitted ? 'Request Submitted!' : 'Request Consultation'}
                            </motion.button>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionConsultation;