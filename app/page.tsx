"use client"

// import {
//   Flex,
//   ChakraProvider, chakra, shouldForwardProp, forwardRef,
//   Skeleton,
//   extendTheme,
// } from '@chakra-ui/react'


// import { motion } from 'framer-motion';
// import React, { useRef, useEffect } from 'react';
  
// import Hero from '@/components/hero'
// import Works from '@/components/works'
// import About from '@/components/about'
// import Nav from '@/components/nav'
// import Footer from '@/components/footer'

// const theme = extendTheme({
//   config: {
//     initialColorMode: "dark",
//     useSystemColorMode: false,
//   }
// });

// const MotionBox = motion(forwardRef(({ layoutId, ...rest }, ref) => <chakra.div ref={ref} {...rest} />))

// export default function RootLayout() {
//   return (
    
//     <html lang="en">
//       <head>
//         <title>Christine Wei :&#93;</title>
//         <link rel="icon" type="image/x-icon" href="astrobunny.jpg"/>
//       </head>
//       <body>
//         <ChakraProvider theme={theme}>
//           <Flex height="100%" alignItems="center" justifyContent="center">
//             <Flex direction="column" background="grey.100" p={{base: 13, sm: 4}} gap={{base: 0, sm: 100}}>

//                 <MotionBox
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ type: "spring", stiffness: 100, duration: 2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Nav />
//                 </MotionBox>
                

//                 <MotionBox
//                   initial={{ opacity: 0, scale: 0.5, y: -100 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0  }}
//                   viewport={{ once: true }}
//                 >
//                   <Hero />
//                 </MotionBox>

//                 <MotionBox
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1  }}
//                   transition={{ type: "spring", stiffness: 100, duration: 2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Skeleton startColor='yellow.200' endColor='pink.200' height='10px' />
//                 </MotionBox>
                
//                 <MotionBox shouldWrapChildren
//                   initial={{ opacity: 0, y: 200 }}
//                   whileInView={{ opacity: 1, y: 0  }}
//                   transition={{ type: "spring", stiffness: 100, duration: 2 }}
//                   viewport={{ once: true }}
//                 >
//                   <About />
//                 </MotionBox>

                

//                 <MotionBox
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1  }}
//                   transition={{ type: "spring", stiffness: 100, duration: 2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Skeleton startColor='yellow.200' endColor='pink.200' height='10px' />
//                 </MotionBox>
                

//                 <MotionBox
//                   initial={{ opacity: 0, y: 200 }}
//                   whileInView={{ opacity: 1, y: 0  }}
//                   transition={{ type: "spring", stiffness: 100, duration: 2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Works />
//                 </MotionBox>
                
//                 <MotionBox
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1  }}
//                   transition={{ type: "spring", stiffness: 100, duration: 2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Footer />
//                 </MotionBox>
                
//             </Flex>
//           </Flex>
//         </ChakraProvider>
//       </body>
//     </html>
//   )
// }

import {
  Flex,
  ChakraProvider,
  chakra,
  Skeleton,
  extendTheme,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';
import Hero from '@/components/hero';
import Works from '@/components/works';
import About from '@/components/about';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

const MotionFlex = motion(Flex);

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <title>Christine Wei :&#93;</title>
        <link rel="icon" type="image/x-icon" href="astrobunny.jpg"/>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Flex height="100%" alignItems="center" justifyContent="center">
            <MotionFlex
              as="section"
              direction="column"
              background="grey.100"
              p={{base: 13, sm: 4}}
              gap={{base: 0, sm: 100}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >

              <Nav />

              <Hero />

              <Skeleton startColor='yellow.200' endColor='pink.200' height='10px' />

              <About />

              <Skeleton startColor='yellow.200' endColor='pink.200' height='10px' />

              <Works />

              <Footer />

            </MotionFlex>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}


