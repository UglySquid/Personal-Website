import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack
  } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
  
  interface FeatureProps {
    heading: string;
    text: string;
  }
  
  const Feature = ({ heading, text }: FeatureProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600" color={'yellow.100'}>
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
                fontSize='6xl'
                fontWeight='extrabold'
              >
                / About me
              </Text>

              <Menu>
                <MenuButton as={Button} rightIcon={< BsChevronDown />}>
                  Contact Me
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<AiOutlineMail />} as="a" href='mailto:christine.wei.63@gmail.com'>
                    Email me
                  </MenuItem>

                  <MenuItem icon={<AiOutlineInstagram />} as="a" href='https://www.instagram.com/wo_ochy/'>
                    Instagram
                  </MenuItem>
                  
                  <MenuItem icon={<AiOutlineLinkedin />} as="a" href='https://www.linkedin.com/in/christine-wei-is-awesome/'>
                    LinkedIn
                  </MenuItem>
                </MenuList>
              </Menu>

            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
              I’m currently the secretary for MMHS Robotics, 
              the animator for PERIOD. Ontario, and a content exectutive at MMHS MathSoc. 
              I also work as a Teaching Assistant at Spirit of Math. 
              </chakra.p>
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
            
          <Feature
            heading={'Spirit of Math'}
            text ={'As Teaching Assistant at Spirit of Math, I teach advanced maths to students ages 7 and 8. This experience taught me communication and patience.'}
          />
          <Feature
            heading={'MMHS Robotics'}
            text={'As secretary, I create spreadsheets, manage meetings, and take care of many emails and anouncements. I am also involved in the decision-making process'}
          />
          <Feature
            heading={'PERIOD. Ontario'}
            text={'As the Animator of PERIOD. Ontario, I animate educational videos that are used in workshops across school boards in Toronto to teach about menstruation.'}
          />
          <Feature
            heading={"Ignition Hacks"}
            text={'I work with other UI/UX executives at Ignition Hacks to design the sponsorhsip package and various other things. This experience taught me teamwork.'}
          />
        </Grid>
      </Box>
    );
  }
  