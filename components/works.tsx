import {
    Container, Stack, Flex, Box,
    Heading, Text,
    Icon, Button, Link,
    useColorModeValue, chakra, shouldForwardProp, 
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import { isValidMotionProp, motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

import { BsGithub } from 'react-icons/bs'
import { FaFolder } from 'react-icons/fa'
import { MdOutlineWebAsset } from 'react-icons/md'

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  link: ReactElement;
}

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 }
}


const Card = ({ heading, description, icon, link }: CardProps) => {
  return (
      <ChakraBox
        variants={item}
        initial={{ opacity: 0, rotateX: -10, scale: 0 }}
        whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
        viewport={{ once: true }}

        whileHover={{ scale: 1.1 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}

        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow='dark-lg'
        bg={useColorModeValue('gray.100', 'gray.800')}
        p={5}>
        <Stack align={'start'} spacing={5}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading color={'yellow.100'} size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              {link}
          </Button>
        </Stack>
      </ChakraBox>
  );
};

export default function Works() {
  return (
    <Box p={4}>
      <Stack spacing={3} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Text
          bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
        >
          / Works
        </Text>
        <Text color={'white.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          These are some of the things I&apos;ve made and some things I&apos;m still working on.
        </Text>
      </Stack>

      <ChakraBox variants={ container }>
        <Container maxW={'5xl'} mt={12}>

          <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Card
                heading={'Webdev'}
                icon={<Icon as={MdOutlineWebAsset} w={10} h={10} />}
                description={'My webdev portfolio. It is very unresponsive, and looks good on wide horizontal screens'}
                link={<Link href={'https://uglysquid.github.io/'} isExternal>Check it out</Link>}
              />

            <Card
              heading={'Graphics'}
              icon={<Icon as={FaFolder} w={10} h={10} />}
              description={
                'Google Drive with my art.'
              }
              link={<Link href={'https://drive.google.com/drive/folders/1LG_l5ZZzm3dc-UrBCX8tX5EJit5aSBp3?usp=sharing'} isExternal>Check it out</Link>}
            />

            <Card
              heading={'Other Dev'}
              icon={<Icon as={BsGithub} w={10} h={10} />}
              description={
                'Github with my projects. '
              }
              link={<Link href={'https://github.com/UglySquid'} isExternal>Check it out</Link>}
            />
          </Flex>
        </Container>
      </ChakraBox>
      
    </Box>
  );
}
