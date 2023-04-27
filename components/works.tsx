import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';

  import { useScroll, useTransform, motion } from 'framer-motion';
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
  
  const Card = ({ heading, description, icon, link }: CardProps) => {
    return (
        <Box
          maxW={{ base: 'full', md: '275px' }}
          w={'full'}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}>
          <Stack align={'start'} spacing={2}>
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
        </Box>
    );
  };
  
  export default function Works() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Text
            bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'
          >
            / Works
          </Text>
          <Text color={'white.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            These are some of the things I&apos;ve made and some things I&apos;m still working on.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <motion.section
              initial={{ opacity: 0, scale: 0.5, rotateX: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 100, duration: 2 }}
            >
              <Card
                heading={'Webdev'}
                icon={<Icon as={MdOutlineWebAsset} w={10} h={10} />}
                description={'My webdev portfolio. It is very unresponsive, and looks good on wide horizontal screens'}
                link={<Link href={'https://uglysquid.github.io/'} isExternal>Check it out</Link>}
              />
            </motion.section>

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
      </Box>
    );
  }
  