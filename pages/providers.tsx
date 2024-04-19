'use client' // ---> this line does the trick

import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import theme from '@/config/themes'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
  )
}

export default Providers