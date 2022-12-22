import { Progress } from '@chakra-ui/react'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'

const Loading = () => {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  if (isFetching + isMutating > 0) {
    return (
      <Progress
        isIndeterminate
        top='0'
        left='0'
        right='0'
        zIndex='1000001'
        pos='fixed'
        size='xs'
        bgGradient='linear(to-r, green.200, pink.500)'
      />
    )
  }
  return null
}

export default Loading
