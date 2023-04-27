import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  AspectRatio
} from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

import { useScroll, useTransform, isValidMotionProp, motion, Transition } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import { forwardRef, chakra, shouldForwardProp } from '@chakra-ui/react'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

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
                  <ChakraBox
                    animate={{
                      rotate: [0, 0, 270, 270, 0],
                    }}
                    // transition={{
                    //   duration: 5,
                    //   ease: "easeInOut",
                    //   repeat: Infinity,
                    //   repeatType: "loop",
                    // }}
                  >
                    {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
                  </ChakraBox>
                </Button>                
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
