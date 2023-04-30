import {
    chakra,
    Box, Container, Flex, Grid, GridItem,
    VStack, HStack, Stack,
    Button, Divider,
    Text, Link,
    Skeleton
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
        <chakra.h3 fontSize="2xl" fontWeight="600" color={'yellow.100'}>
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function About() {
    return (
      <Box as={Container} maxW="5xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>

          
            
            <VStack alignItems="flex-start" spacing="20px">
              <Text
                bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
                bgClip='text'
                fontSize='5xl'
                fontWeight='extrabold'
              >
                / About me
              </Text>

              <HStack spacing={4}>

                <Button leftIcon={<EmailIcon />} colorScheme='gray' variant='solid'>
                  <Link href='mailto:christine.wei.63@gmail.com' isExternal>
                    Email
                  </Link>
                </Button>
                <Button rightIcon={<AiFillInstagram />} colorScheme='gray' variant='outline' >
                  <Link href='https://www.instagram.com/wo_ochy/' isExternal>
                    Instagram
                  </Link>
                </Button>
                <Button rightIcon={<AiFillLinkedin />} colorScheme='gray' variant='outline' >
                  <Link href='https://www.linkedin.com/in/christine-wei-is-awesome/' isExternal>
                  LinkedIn
                  </Link>
                </Button>
              </HStack>

            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
            <Stack>
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
            </Stack>
            </Flex>
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
  