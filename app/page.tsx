"use client"

import {
  Flex,
  ChakraProvider, chakra, shouldForwardProp, forwardRef,
  Skeleton,
  extendTheme,
} from '@chakra-ui/react'


import { motion } from 'framer-motion';
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

const MotionBox = motion(forwardRef(({ layoutId, ...rest }, ref) => <chakra.div ref={ref} {...rest} />))

export default function RootLayout() {
  return (
    
    <html lang="en">
      <head>
        <title>Christine Wei :D</title>
        <link rel="icon" type="image/x-icon" href="imsobbingnow.png"/>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Flex height="100%" alignItems="center" justifyContent="center">
            <Flex direction="column" background="grey.100" p={{base: 13, sm: 4}} gap={{base: 100, sm: 50}}>

                <MotionBox
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                  viewport={{ once: true }}
                >
                  <Nav />
                </MotionBox>
                

                <MotionBox
                  initial={{ opacity: 0, scale: 0.5, y: -100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0  }}
                  viewport={{ once: true }}
                >
                  <Hero />
                </MotionBox>

                <MotionBox
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                  viewport={{ once: true }}
                >
                  <Skeleton startColor='yellow.200' endColor='pink.200' height='10px' />
                </MotionBox>
                
                <MotionBox shouldWrapChildren
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                  viewport={{ once: true }}
                >
                  <About />
                </MotionBox>

                

                <MotionBox
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                  viewport={{ once: true }}
                >
                  <Skeleton startColor='yellow.200' endColor='pink.200' height='10px' />
                </MotionBox>
                

                <MotionBox
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                  viewport={{ once: true }}
                >
                  <Works />
                </MotionBox>
                
                <MotionBox
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1  }}
                  transition={{ type: "spring", stiffness: 100, duration: 2 }}
                  viewport={{ once: true }}
                >
                  <Footer />
                </MotionBox>
                
            </Flex>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  )
}
