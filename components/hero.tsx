import {
  Container, SimpleGrid, Flex, Stack, Box,
  Img, Button, Circle, Show,
  Text, Heading,
  extendTheme, ChakraProvider, chakra, shouldForwardProp, useColorModeValue, useColorMode,
  Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Icon,
} from '@chakra-ui/react';

import React, { ReactElement, Suspense } from 'react';
import { isValidMotionProp, motion } from 'framer-motion';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

const Font = extendTheme({
  fonts: {
    Heading: `'Roboto Mono', monospace;`,
  },
})

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'5xl'} py={{ base: 12, sm: 4 }} centerContent>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>

        <Show below='sm'>
          <Box p='10' rounded='lg' bg={useColorModeValue('gray.100', 'gray.800')} height="300px">
            <Suspense fallback={<div>Loading...</div>}>
              <Spline scene="https://prod.spline.design/kvl1zb3sgfZKPr9Q/scene.splinecode" />
            </Suspense>
          </Box>
        </Show>

        <Stack spacing={4} mb={{ base: 100, sm: 0 }}>
          <ChakraProvider theme={Font}>
            <Heading
              bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
              bgClip='text'
              fontSize='7xl'
              fontWeight='extrabold'
            >
              Hello There!

            </Heading>
          </ChakraProvider>
          <Text color={useColorModeValue('gray.800', 'white.500')} fontSize={'lg'}>
            I&apos;m Christine, a 10th grade student at Milliken Mills High School.
            I&apos;m super into robotics and autonomous machines, especially for space exploration.
            <br></br>
            <br></br>
            Right now, I&apos;m diving into Python databases like SQL, and I&apos;m eager to explore Python&apos;s AI capabilities.
            <br></br>
            <br></br>
            I can&apos;t wait to make a meaningful impact in the field and contribute to the advancement of space exploration!
          </Text>

        </Stack>

        <Show above='sm'>
          <Box p='10' rounded='lg' bg={useColorModeValue('gray.100', 'gray.800')} height="500px">
            <Suspense fallback={<div>Loading...</div>}>
              <Spline scene="https://prod.spline.design/e-H2UFLaP5b5SHMa/scene.splinecode" />
            </Suspense>
          </Box>
        </Show>


      </SimpleGrid>
    </Container>
  );
}
