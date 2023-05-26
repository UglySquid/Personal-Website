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
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'5xl'} py={{base: 12, sm: 4}} centerContent>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>

        <Show below='sm'>
          <Box p='10' rounded='lg' bg={useColorModeValue('gray.100', 'gray.800')} height="300px">    
            <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/kvl1zb3sgfZKPr9Q/scene.splinecode" />
            </Suspense>
          </Box>
        </Show>

        <Stack spacing={4} mb={{base: 100, sm: 0}}>
          <ChakraProvider theme={Font}>
            <Heading
              bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
              bgClip='text'
              fontSize='7xl'
              fontWeight='extrabold'
            >
              Hello There...
              
            </Heading>
          </ChakraProvider>
          <Text color={useColorModeValue('gray.800', 'white.500')} fontSize={'lg'}>
          I&apos;m Christine! I&apos;m currently a grade 10 student at Milliken Mills High School. 
          In my freetime, I like to read and code. I dunno man I&apos;m kinda basic 😳. 
          I beg you not to look at this website in light mode and preferably not on your phone for best 3D experience.
          </Text>

          <Button onClick={onOpen}>About Metallic Masquerade</Button>
            <Modal onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Anouncement: Metallic Masquerade</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <chakra.p>
                    <Text as='b' fontSize='20px'>Hey Knights, guess what? The annual Sheet Metal Dance is back! </Text>
                  <br />
                  <br />
                  <br />
                  <Text as='b'>When: </Text>
                  Friday, June 30th, 2023, 1pm-8pm
                  <br />
                  <Text as='b'>Where: </Text>
                  Don Mills Steel Factory 
                  <br />
                  <Text as='b'>Ticket Price: </Text>
                  $30 for MMHS Students | $105 for Guests
                  <br />
                  <br />
                  <br />
                  <Text as='i'>
                    Support Milliken&apos;s vibrant sheet metal industry while having a fun night of 
                    food, drinks, and dancing. Yes, the food and drinks will be free.
                  </Text>
                  <br />
                  </chakra.p>
                  
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>I&apos;m in!</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          
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
