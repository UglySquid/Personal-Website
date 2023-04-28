"use client"

import {
  Flex,
  ChakraProvider,
  Skeleton,
  extendTheme,
  Button,
  Link,
  HStack,
  Text,
} from '@chakra-ui/react'


import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { EmailIcon } from '@chakra-ui/icons'
  
import Hero from '@/components/hero'
import Works from '@/components/works'
import About from '@/components/about'
import AboutCopy from '@/components/about-copy';
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
            <Flex direction="column" background="grey.100" p={12} rounded={6} gap={100}>

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
                  <AboutCopy />
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
                  <HStack spacing={4}>
                    <Text
                      bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
                      bgClip='text'
                      fontSize='5xl'
                      fontWeight='extrabold'
                    >
                      / Contact me: 
                    </Text>

                    <Button leftIcon={<EmailIcon />} colorScheme='gray' variant='solid'>
                      Email
                    </Button>
                    <Button rightIcon={<AiFillInstagram />} colorScheme='gray' variant='outline' >
                      <Link href='https://www.instagram.com/wo_ochy/' isExternal>
                        Instagram
                      </Link>
                    </Button>
                    <Button rightIcon={<AiFillLinkedin />} colorScheme='gray' variant='outline' >
                      <Link href='https://www.linkedin.com/in/christine-wei-is-awesome/' isExternal>
                      LinkedIn
                      </Link>
                    </Button>
                  </HStack>
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
