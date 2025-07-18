import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
   
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-gray-700 max-w-lg mb-10">
            Quam nunc nunc eu sed. Sed rhoncus quis ultricies oc pellentesque.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborate</h3>
              <p className="text-gray-700">
                <a href="mailto:collaborate@example.com" className="text-[#009689] hover:underline">
                  collaborate@example.com
                </a>
              </p>
              <p className="text-gray-700">+1 (555) 905-2345</p>
            </motion.div>

           
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Press</h3>
              <p className="text-gray-700">
                <a href="mailto:press@example.com" className="text-[#009689] hover:underline">
                  press@example.com
                </a>
              </p>
              <p className="text-gray-700">+1 (555) 905-3456</p>
            </motion.div>

          
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Join our team</h3>
              <p className="text-gray-700">
                <a href="mailto:careers@example.com" className="text-[#009689] hover:underline">
                  careers@example.com
                </a>
              </p>
              <p className="text-gray-700">+1 (555) 905-4567</p>
            </motion.div>

        
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Say hello</h3>
              <p className="text-gray-700">
                <a href="mailto:hello@example.com" className="text-[#009689] hover:underline">
                  hello@example.com
                </a>
              </p>
              <p className="text-gray-700">+1 (555) 905-5678</p>
            </motion.div>
          </div>
        </div>

       
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Locations
          </h2>
          <p className="text-lg text-gray-700 max-w-lg mb-10">
            Consequat sunt cillum elit sint. Qui occaecat nisi in ipsum commodo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Los Angeles</h3>
              <p className="text-gray-700">4556 Brendan Ferry</p>
              <p className="text-gray-700">Los Angeles, CA 90210</p>
            </motion.div>

           
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">New York</h3>
              <p className="text-gray-700">886 Walter Street</p>
              <p className="text-gray-700">New York, NY 12345</p>
            </motion.div>

            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Toronto</h3>
              <p className="text-gray-700">7363 Cynthia Pass</p>
              <p className="text-gray-700">Toronto, ON N3Y 4H8</p>
            </motion.div>

         
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chicago</h3>
              <p className="text-gray-700">726 Mavis Island</p>
              <p className="text-gray-700">Chicago, IL 60601</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;