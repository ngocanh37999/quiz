import Link from 'next/link'
import { Center, Flex, IconButton, Text, VStack } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function MainFooter() {
  return (
    <>
      <VStack p={4} pb={28}>
        <Flex position='absolute' bottom='8' flexDirection='column'>
          <Center color='rgba(24, 182, 132, 0.651)' marginBottom='2rem'>
            <Text fontSize='medium'>DEVELOPED BY Ngọc Anh</Text>
          </Center>
          <Center>
            <Link href='' target='_blank'>
              <IconButton aria-label='Github' icon={<FaGithub />} isRound={true} size='md' m='1' />
            </Link>
            <Link href='' target='_blank'>
              <IconButton aria-label='Linkedin' icon={<FaLinkedin />} isRound={true} size='md' m='1' />
            </Link>
            <Link href='' target='_blank'>
              <IconButton aria-label='Instagram' icon={<FaInstagram />} isRound={true} size='md' m='1' />
            </Link>
            <Link href='' target='_blank'>
              <IconButton aria-label='Twitter' icon={<FaTwitter />} isRound={true} size='md' m='1' />
            </Link>
            <Link href='' target='_blank'>
              <IconButton aria-label='Facebook' icon={<FaFacebook />} isRound={true} size='md' m='1' />
            </Link>
          </Center>
        </Flex>
      </VStack>
    </>
  )
}
