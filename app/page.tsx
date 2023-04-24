"use client"

import {
  Flex,
  ChakraProvider,
  Skeleton,
} from '@chakra-ui/react'
  
import Hero from '@/components/hero'
import Works from '@/components/works'
import About from '@/components/about'
import Nav from '@/components/nav'

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Flex height="100%" alignItems="center" justifyContent="center">
            <Flex direction="column" background="grey.100" p={12} rounded={6} gap={100}>
                <Nav />

                <Hero />

                <Skeleton startColor='blue.200' endColor='yellow.50' height='10px' />
                
                <About />

                <Skeleton startColor='blue.200' endColor='yellow.50' height='10px' />

                <Works />
            </Flex>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  )
}
