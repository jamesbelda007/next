import type { NextPage } from 'next'
import { Text, Button, VStack } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <VStack justifyContent="center">
      <Text fontSize="2xl" fontWeight={600}>
        Hello World!
      </Text>
      <Button>Click Me</Button>
    </VStack>
  )
}

export default Home
