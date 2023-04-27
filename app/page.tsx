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

                <motion.section
                  initial={{ scaleX: 0, y: 200 }}
                  whileInView={{ scaleX: 1, y: 0  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                  viewport={{ once: true }}
                >
                  <Nav />
                </motion.section>
                

                <motion.section
                  initial={{ opacity: 0, scale: 0.5, y: -100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0  }}
                >
                  <Hero />
                </motion.section>
                

                <motion.section
                  initial={{ scaleX: 0, y: 200 }}
                  whileInView={{ scaleX: 1, y: 0  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                  viewport={{ once: true }}
                >
                  <Skeleton startColor='yellow.600' endColor='blue.200' height='10px' />
                </motion.section>
                
                <motion.section
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                >
                  <About />
                </motion.section>

                <motion.section
                  initial={{ scaleX: 0, y: 200 }}
                  whileInView={{ scaleX: 1, y: 0  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                  viewport={{ once: true }}
                >
                  <Skeleton startColor='yellow.600' endColor='blue.200' height='10px' />
                </motion.section>

                

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
