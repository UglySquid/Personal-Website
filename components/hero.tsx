import {
    Container, SimpleGrid, Flex, Stack,
    Img, Button,
    Text, Heading,
    extendTheme, ChakraProvider, chakra, shouldForwardProp,
    Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
} from '@chakra-ui/react';

import React, { ReactElement } from 'react';
import { isValidMotionProp, motion } from 'framer-motion';

import "@fontsource/roboto-mono/500.css"

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
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

  return (
    <Container maxW={'5xl'} py={12} centerContent>


      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>
        <Stack spacing={4}>
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
          <Text color={'white.500'} fontSize={'lg'}>
          I&apos;m Christine! I&apos;m currently a grade 10 student at Milliken Mills High School. 
          In my freetime, I like to read and code. I dunno man I&apos;m kinda basic 😳
          </Text>

          <Button onClick={onOpen}>About Metallic Masquerade</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
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
                  Friday, June 30th, 2023 (1pm-8pm)
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
                    Support Milliken's vibrant sheet metal industry while having a fun night of 
                    food, drinks, and dancing. (Yes, the food and drinks will be free).
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
        <Flex justifyContent={'center'}>
          <ChakraBox  
            whileHover={{ scale: 1.1}}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
          >
            <Img
              rounded={'md'}
              alt={'Currently Nonexistent image'}
              src={
                'deca.jpg'
              }
              objectFit={'cover'}
              height={250}
              filter='auto' brightness='70%'
              // fallbackSrc='https://via.placeholder.com/450x300'
            />
          </ChakraBox>

          {/* <canvas class="webgl">
            <script type='module' src='/cat.js'></script>
          </canvas> */}
          {/* 3D Model credit: "ordak the duck" (https://skfb.ly/oEn8s) by ZIRODESIGN is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */}
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
