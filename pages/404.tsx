import { Box, Heading, Text, Link } from '@chakra-ui/react'

export default function NotFound404() {
  return (
    <Box display='flex' height='100vh' width='100%' flexDirection='column' alignItems='center' justifyContent='center'>
      <Heading mb={4}>404</Heading>
      <Text fontSize='xl'>Page Not Found</Text>
      <Link href='/'>Go Home</Link>
    </Box>
  )
}
