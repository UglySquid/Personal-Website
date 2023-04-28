import {
    Container,
    SimpleGrid,
    Img,
    Flex,
    Text,
    Stack,
    extendTheme,
    ChakraProvider
  } from '@chakra-ui/react';

  import { ReactElement } from 'react';

  import '@fontsource/roboto-mono/500.css'
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const theme = extendTheme({
    fonts: {
      Text: `'Roboto Mono', 'monospace'`,
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
              bgClip='text'
              fontSize='7xl'
              fontWeight='extrabold'
            >
              <ChakraProvider theme={theme}>
                Hello There...
              </ChakraProvider>
              
            </Text>
            <Text color={'white.500'} fontSize={'lg'}>
            I&apos;m Christine! I&apos;m currently a grade 10 student at Milliken Mills High School. 
            In my freetime, I like to read and code.
            </Text>
            
          </Stack>
          <Flex>
            <Img
              rounded={'md'}
              alt={'Currently Nonexistent image'}
              src={
                'deca.jpg'
              }
              objectFit={'cover'}
              // fallbackSrc='https://via.placeholder.com/450x300'
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
  