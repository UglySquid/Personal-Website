import {
    chakra,
    VStack, Flex, 
    Button, Divider,
    Grid, GridItem, Container, Box,
    Text,
    Menu, MenuButton, MenuList, MenuItem,
    Tabs, TabList, TabPanels, Tab, TabPanel
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
  
  export default function AboutCopy() {
    return (
      <Box as={Container} maxW="5xl" mt={14} p={4} >
        <Grid
          templateColumns={{
            gap: '16',
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>

          
            
            <VStack alignItems="flex-start" spacing="30px">
              <Text
                bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
                bgClip='text'
                fontSize='4xl'
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

              <Flex>
                <chakra.p>
                I&apos;m currently the secretary for MMHS Robotics, 
                the animator for PERIOD. Ontario, and a content exectutive at MMHS MathSoc. 
                I also work as a Teaching Assistant at Spirit of Math. 
                </chakra.p>
            </Flex>

            </VStack>

            <Divider mt={12} mb={12} />
          </GridItem>
          
          <GridItem>
            <Tabs variant='enclosed'>
              <TabList mb='0.5em'>
                <Tab>Spirit of Math</Tab>
                <Tab>MMHS Robotics</Tab>
                <Tab>PERIOD. Ontario</Tab>
                <Tab>Ignition Hacks</Tab>
              </TabList>
              <TabPanels>
                <TabPanel border='1px' borderColor='gray.700'>
                  <Feature 
                    heading={'Spirit of Math'}
                    text ={'As Teaching Assistant at Spirit of Math, I teach advanced maths to students ages 7 and 8.'}
                  />
                </TabPanel>
                <TabPanel border='1px' borderColor='gray.700'>
                  <Feature
                    heading={'MMHS Robotics'}
                    text={'As secretary, I create spreadsheets, manage meetings, and take care of many emails and anouncements. I am also involved in the decision-making process'}
                  />
                </TabPanel>
                <TabPanel border='1px' borderColor='gray.700'>
                  <Feature
                    heading={'PERIOD. Ontario'}
                    text={'As the Animator of PERIOD. Ontario, I animate educational videos that are used in workshops across school boards in Toronto to teach about menstruation.'}
                  />
                </TabPanel>
                <TabPanel border='1px' borderColor='gray.700'>
                  <Feature
                    heading={"Ignition Hacks"}
                    text={'I work with other UI/UX executives at Ignition Hacks to design the sponsorhsip package and various other things.'}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
        </Grid>
      </Box>
    );
  }
  