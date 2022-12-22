import { Box, Container, Heading } from '@chakra-ui/react'

export default function MainHeader() {
  return (
    <Box>
      <Container bg='white' width='92%' maxW='md' p='1rem' mt='0rem'>
        <Heading p='5' fontWeight='extrabold' size='xl' bgGradient='linear(to-l, teal.300, blue.500)' bgClip='text'>
          Chào mừng bạn đến với Ứng dụng đố vui
        </Heading>
      </Container>
    </Box>
  )
}
