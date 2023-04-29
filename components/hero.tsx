import {
    Container,
    SimpleGrid,
    Img,
    Skeleton,
    Flex,
    Text, Heading,
    Stack,
    extendTheme,
    ChakraProvider,
    Center
  } from '@chakra-ui/react';

  import { ReactElement } from 'react';

  import "@fontsource/roboto-mono"
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Font = extendTheme({
    fonts: {
      Heading: `'Roboto Mono', monospace;`,
    },
  })
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Hero() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>
          <Stack spacing={4}>
            <ChakraProvider theme={Font}>
              <Heading
                bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
                bgClip='text'
                fontSize='7xl'
                fontWeight='extrabold'
              >
                Hello There...
                
              </Heading>
            </ChakraProvider>
            <Text color={'white.500'} fontSize={'lg'}>
            I&apos;m Christine! I&apos;m currently a grade 10 student at Milliken Mills High School. 
            In my freetime, I like to read and code. I dunno man I&apos;m kinda basic 😳
            </Text>
            
          </Stack>
          <Flex justifyContent='right'>
            <Skeleton isLoaded>
              <Img
                rounded={'md'}
                alt={'Currently Nonexistent image'}
                src={
                  'deca.jpg'
                }
                objectFit={'cover'}
                height={250}
                // fallbackSrc='https://via.placeholder.com/450x300'
              />
            </Skeleton>
            
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
  