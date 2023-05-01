import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  forwardRef
} from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

import { isValidMotionProp, motion, Transition } from 'framer-motion';
import React, { } from 'react';
import { chakra, shouldForwardProp } from '@chakra-ui/react'

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Welcome to Christine&apos;s Development Portfolio!</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
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
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
