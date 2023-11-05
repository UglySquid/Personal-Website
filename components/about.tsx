import {
    chakra,
    Box, Container, Flex, Grid, GridItem, Center,
    VStack, HStack, Stack,
    Button, Divider, Show, IconButton,
    Text, Link, Img, 
    Skeleton, useColorMode, useColorModeValue,
    createIcon,
} from '@chakra-ui/react';

import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { EmailIcon } from '@chakra-ui/icons';

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
    
    <Box as={Container} maxW="5xl" p={4} mt={12} mb={{base: 100, sm: 0}}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>

        <GridItem colSpan={1}>

          <Flex direction={'column'} alignItems="flex-start" justifyContent="center">
            <Show below='sm'>
              <HStack>
                {/* <VStack as={Flex} flexWrap="wrap" gridGap={2} mt={0} mr={12} alignItems={'center'}>
                  <IconButton as='a' href='https://www.instagram.com/cryies.w/' colorScheme='gray' variant='outline' aria-label='Instagram' icon={<AiFillInstagram />} />
                  <IconButton as='a' href='https://www.linkedin.com/in/christine-wei-is-awesome/' colorScheme='gray' variant='outline' aria-label='LinkedIn' icon={<AiFillLinkedin />} />
                  <IconButton as='a' href='https://discord.ca/users/429040760759779330' colorScheme='gray' variant='solid' aria-label='Discord' icon={<BsDiscord />} />
                </VStack> */}
                <Text 
                  bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
                  bgClip='text'
                  fontSize='5xl'
                  fontWeight='extrabold'
                  alignSelf={'right'}
                  >
                    / About me
                </Text>
              </HStack>
            </Show>

            <Show above='sm'>
              <Text 
              bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
              bgClip='text'
              fontSize='5xl'
              fontWeight='extrabold'
              alignSelf={'right'}
              >
                / About me
              </Text>
            </Show>
           

            <Show above='sm'>
              {/* <HStack as={Flex} flexWrap="wrap" gridGap={6}>
                <Button leftIcon={<AiFillInstagram />} colorScheme='gray' variant='solid' >
                  <Link href='https://www.instagram.com/cryies.w/' isExternal>
                      Instagram
                  </Link>
                </Button>
                <Button leftIcon={<AiFillLinkedin />} colorScheme='gray' variant='solid' >
                  <Link href='https://www.linkedin.com/in/christine-wei-is-awesome/' isExternal>
                      LinkedIn
                  </Link>
                </Button>
                <Button leftIcon={<BsDiscord />} colorScheme='gray' variant='solid'>
                  <Link href='https://discord.ca/users/429040760759779330' isExternal>
                      Discord
                  </Link>
                </Button>
              </HStack> */}
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
        <GridItem>

        </GridItem>
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
            text ={'As a Teaching Assistant at Spirit of Math, I help teach middle school students in mathematics, focusing on grades 7 and 8.'}
          />
        </Skeleton>
        
        <Skeleton isLoaded>
          <Feature
            heading={'MMHS Robotics'}
            text={'As co-president, I oversee meetings, and collaborate within a team to design and construct an FRC robot for the 2024 FRC season.'}
          />
        </Skeleton>
        
        <Skeleton isLoaded>
          <Feature
            heading={'PERIOD. Ontario'}
            text={'As an animator at PERIOD. Ontario, I create educational animations featured in workshops across GTA school boards.'}
          />            
        </Skeleton>

        <Skeleton isLoaded>
          <Feature
            heading={"Ignition Hacks"}
            text={'In my UI/UX role, I collaborate with other UI/UX executives to social media posts, event material, and stickers.'}
          />            
        </Skeleton>

      </Grid>
    </Box>
  );
}
