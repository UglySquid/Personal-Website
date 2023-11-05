import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
  import { BsDiscord } from 'react-icons/bs';
  import { EmailIcon } from '@chakra-ui/icons';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('gray.100', 'gray.700')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box mb={12}
        rounded='lg'
        bg={useColorModeValue('gray.100', 'gray.700')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>Made with ♡ from Christine Wei</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/christine-wei-is-awesome/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Github'} href={'https://github.com/UglySquid'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/cryies.w/'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://discord.ca/users/429040760759779330'}>
              <BsDiscord />
            </SocialButton>
            <SocialButton label={'Email'} href={'mailto:christine.wei.63@gmail.com'}>
              <EmailIcon />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }
  