"use client"

import {
  Flex,
  ChakraProvider,
  Skeleton,
  extendTheme,
} from '@chakra-ui/react'


import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
  
import Hero from '@/components/hero'
import Works from '@/components/works'
import About from '@/components/about'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  }
});

// const container = {
//   show: {
//     transition: {
//       staggerChildren: 0.35,
//     }
//   }
// }

// const item = {
//   hidden: {
//     opacity: 0,
//     y: 200,
//   },
//   show: {
//     opacity: 1,
//     y: 0, 
//     transition: {
//       ease: [0.6, 0.1, -0.5, 0.95]
//     }
//   }
// }

// const Loader = ({ setLoading }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 4000);
//     return () => clearTimeout(timer);
//   })
// }

export default function RootLayout() {
  return (
    
    <html lang="en">
      <head>
        <title>Christine Wei :D</title>
        <link rel="icon" type="image/x-icon" href="imsobbingnow.png"/>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Flex className='loader' height="100%" alignItems="center" justifyContent="center">
            <Flex direction="column" background="grey.100" p={12} rounded={6} gap={200}>

                <Nav />

                <motion.section
                  initial={{ opacity: 0, scale: 0.5, y: -100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0  }}
                >
                  <Hero />
                </motion.section>
                

                <Skeleton startColor='blue.200' endColor='yellow.50' height='10px' />
                
                <motion.section
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                >
                  <About />
                </motion.section>

                <Skeleton startColor='blue.200' endColor='yellow.50' height='10px' />

                <motion.section
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                >
                  <Works />
                </motion.section>
                

                <Footer />
              {/* </motion.div> */}
            </Flex>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  )
}
