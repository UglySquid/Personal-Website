import {
  Box, Flex, Stack,
  Link, Button, Text,
  useColorModeValue, useColorMode,
  forwardRef, chakra,
  Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Icon,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const MotionBox = motion(forwardRef(({ layoutId, ...rest }, ref) => <chakra.div ref={ref} {...rest} />))

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.700')} px={4} rounded='lg' mt={12}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Welcome to Christine&apos;s Portfolio!</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

              <Button onClick={onOpen} size={'xs'}>
                <MotionBox
                  animate={{
                    rotate: [0, 0, 270, 270, 0],
                  }}
                  transition={{
                    duration: 5, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
                </MotionBox>
              </Button>     
              
              {/* <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalCloseButton />
                <ModalContent>
                  <ModalHeader>Light mode not supported</ModalHeader>
                  <ModalBody>
                    <chakra.p>
                      <Text as='b' fontSize='20px'>Hey, I am currently working on a better lightmode. If you would like to continue with light mode, please click the button below. </Text>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                    </Button>

                    <Button onClick={toggleColorMode}>
                      <MotionBox
                        animate={{
                          rotate: [0, 0, 270, 270, 0],
                        }}
                        transition={{
                          duration: 5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      >
                        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
                      </MotionBox>
                    </Button>   
                  </ModalFooter>
                </ModalContent>
              </Modal>   */}

            </Stack>
          </Flex>
        </Flex>
      </Box>       
    </>
  );
}
        
