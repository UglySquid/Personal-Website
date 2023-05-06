import {
    chakra,
    Box, Container, Flex, Grid, GridItem,
    VStack, HStack, Stack,
    Button, Divider, Show, IconButton,
    Text, Link, Img, 
    Skeleton, useColorMode, useColorModeValue,
} from '@chakra-ui/react';

import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { EmailIcon } from '@chakra-ui/icons'

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="2xl" fontWeight="600" color={useColorModeValue('pink.200', 'yellow.100')}>
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    
    <Box as={Container} maxW="5xl" mt={12} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>

        <GridItem colSpan={1}>

          <Flex direction={'column'} alignItems="flex-start" justifyContent="center">
            <Text
              bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
              bgClip='text'
              fontSize='5xl'
              fontWeight='extrabold'
              alignSelf={'right'}
            >
              / About me
            </Text>

            <Show below='sm'> 
              <Divider mt={6} mb={6} /> 
            </Show>

            <Show above='sm'>
              <HStack as={Flex} flexWrap="wrap" gridGap={6}>
                <Button leftIcon={<AiFillInstagram />} colorScheme='gray' variant='outline' >
                  <Link href='https://www.instagram.com/wo_ochy/' isExternal>
                      Instagram
                  </Link>
                </Button>
                <Button leftIcon={<AiFillLinkedin />} colorScheme='gray' variant='outline' >
                  <Link href='https://www.linkedin.com/in/christine-wei-is-awesome/' isExternal>
                      LinkedIn
                  </Link>
                </Button>
                <Button leftIcon={<EmailIcon />} colorScheme='gray' variant='solid'>
                  <Link href='mailto:christine.wei.63@gmail.com' isExternal>
                      Email
                  </Link>
                </Button>
              </HStack>
            </Show>

            <Show below='sm'>
              <HStack as={Flex} flexWrap="wrap" gridGap={6}>
                <IconButton as='a' href='https://www.instagram.com/wo_ochy/' colorScheme='gray' variant='outline' aria-label='Instagram' icon={<AiFillInstagram />} />
                <IconButton as='a' href='https://www.linkedin.com/in/christine-wei-is-awesome/' colorScheme='gray' variant='outline' aria-label='LinkedIn' icon={<AiFillInstagram />} />
                <IconButton as='a' href='mailto:christine.wei.63@gmail.com' colorScheme='gray' variant='solid' aria-label='Email' icon={<EmailIcon />} />
              </HStack>
            </Show>

          </Flex>
          
        </GridItem>
        {/* <GridItem>
          <Box boxShadow='dark-lg' p='10' rounded='lg' bg={'gray.700'}>    
            <Img
              border='3px' 
              boxShadow='dark-lg'
              rounded={'md'}
              alt={'Currently Nonexistent image'}
              src={
                'deca.jpg'
              }
              objectFit={'cover'}
              height={{
                base: '70%',
                md: '50%', 
                xs: '25%'
              }}
              // fallbackSrc='https://via.placeholder.com/450x300'
              
            />
          </Box>
        </GridItem> */}
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        
        <Skeleton isLoaded>
          <Feature
            heading={'Spirit of Math'}
            text ={'As Teaching Assistant at Spirit of Math, I teach advanced maths to students ages 7 and 8. This experience taught me communication and patience.'}
          />
        </Skeleton>
        
        <Skeleton isLoaded>
          <Feature
            heading={'MMHS Robotics'}
            text={'As secretary, I create spreadsheets, manage meetings, and take care of many emails and anouncements. I am also involved in the decision-making process'}
          />
        </Skeleton>
        
        <Skeleton isLoaded>
          <Feature
            heading={'PERIOD. Ontario'}
            text={'As the Animator of PERIOD. Ontario, I animate educational videos that are used in workshops across school boards in Toronto to teach about menstruation.'}
          />            
        </Skeleton>

        <Skeleton isLoaded>
          <Feature
            heading={"Ignition Hacks"}
            text={'I work with other UI/UX executives at Ignition Hacks to design the sponsorship package and various other things. This experience taught me teamwork.'}
          />            
        </Skeleton>

      </Grid>
    </Box>
  );
}
