import {
  Divider,
  Button,
  Flex,
  useColorMode,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  extendTheme,
  HStack,
  ChakraProvider,
  Skeleton,
  useColorModeValue,
  type ThemeConfig,
} from '@chakra-ui/react'
  
import new_theme from '../styles/theme'

import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import Hero from './Hero'
import Works from './Works'
import About from './About'
import Nav from './Nav'

const theme = extendTheme({new_theme})

const IndexPage = () => {
  
  const { colorMode, toggleColorMode } = useColorMode()

  

  return (
    <Flex height="100%" alignItems="center" justifyContent="center">
      <Flex direction="column" background="grey.100" p={12} rounded={6} gap={100}>
        <ChakraProvider>
          <Nav />

          <Hero />

          <Skeleton startColor='blue.200' endColor='yellow.50' height='10px' />
          
          <About />

          <Skeleton startColor='blue.200' endColor='yellow.50' height='10px' />

          <Works />
        </ChakraProvider>
      </Flex>
    </Flex>
  )
}

export default IndexPage
