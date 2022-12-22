import { useContext } from 'react'
import { Center, Flex, Radio, RadioGroup, Stack, Text, Container, Button, Box, Heading } from '@chakra-ui/react'
import { AppContext } from 'src/contexts/app.context'
import useLogicQuiz from 'src/hooks/useLogicQuiz'
import Timer from 'src/components/Timer'
import helper from 'src/utils/helper'

export default function Main() {
  const { currentScreen, currentOption, currentQuestion, selectedQuestions, time } = useContext(AppContext)

  const { handleStart, handleOptionChange, handleNext, handleViewAnswer, handleTakeAnother, question, scoreArr, md } =
    useLogicQuiz()
  return (
    <>
      {currentScreen === 'start' && (
        <Box py='3rem'>
          <Container bg='white' width='92%' maxW='md' p='1rem' mt='0rem'>
            <Box textAlign='center' mt='1rem' display='flex' justifyContent='space-between'>
              <Heading
                fontWeight='extrabold'
                size='md'
                bgGradient='linear(to-l, teal.300, blue.500)'
                bgClip='text'
                display='block'
                marginRight='20px'
              >
                Nhấn Start để bắt đầu
              </Heading>
              <Button
                type='submit'
                h='2rem'
                px='1rem'
                pb='3px'
                borderRadius='10rem'
                bg='#0072b1'
                color='white'
                // isLoading={true}
                loadingText='Start'
                colorScheme='linkedin'
                spinnerPlacement='end'
                onClick={handleStart}
              >
                Start
              </Button>
            </Box>
          </Container>
        </Box>
      )}

      {currentScreen === 'quiz' && (
        <Box
          background='white'
          my='3rem'
          w='92%'
          mx='auto'
          maxW='1000px'
          shadow='xs'
          borderRadius='6px'
          overflow='hidden'
        >
          <Box shadow='xs' p='1rem 1.5rem'>
            <RadioGroup value={`${currentOption}`} onChange={handleOptionChange}>
              <Stack>
                {question?.answers.map((item, idx) => {
                  return (
                    <Radio key={idx} value={`${idx}`}>
                      <div dangerouslySetInnerHTML={helper.sanitizedData(md.render(item || ''))} />
                    </Radio>
                  )
                })}
              </Stack>
            </RadioGroup>
          </Box>

          <Box bg='#DBD9DB' width='100%' mt='0.5rem'>
            <Box
              bg='#58677F'
              w={`${((currentQuestion + 1) / selectedQuestions.length) * 100}%`}
              h='0.8rem'
              transition='width ease 0.3s'
            />
          </Box>

          <Flex justifyContent='space-between' alignItems='center' p='1rem 1.5rem' shadow='xs' mt='0.5rem'>
            <Box>
              Q{currentQuestion + 1}/{selectedQuestions.length} &nbsp;&nbsp;{' '}
              <Timer time={time} handleNext={handleNext} />
            </Box>
            <Box>
              <Button
                type='submit'
                h='2rem'
                px='1rem'
                pb='3px'
                borderRadius='10rem'
                bg='#0072b1'
                color='white'
                colorScheme='linkedin'
                onClick={handleNext}
                disabled={!currentOption && currentOption !== 0 && true}
              >
                Next
              </Button>
            </Box>
          </Flex>
        </Box>
      )}

      {currentScreen === 'end' && (
        <Box py='3rem'>
          <Container w='92%' bg='white' maxW='md' shadow='sm' p='1rem' mt='0rem' borderRadius='6px'>
            <Center flexDirection='column'>
              <Text fontSize='6xl'>😊</Text>
              <Text>
                Điểm của bạn: {helper.getStore(scoreArr)}/{selectedQuestions.length}
              </Text>
              <Stack mt='1.4rem'>
                <Button
                  type='submit'
                  h='2rem'
                  px='1rem'
                  pb='3px'
                  borderRadius='10rem'
                  bg='#0072b1'
                  color='white'
                  colorScheme='linkedin'
                  onClick={handleViewAnswer}
                >
                  Xem câu trả lời
                </Button>

                <Button
                  type='submit'
                  h='2rem'
                  px='1rem'
                  pb='3px'
                  borderRadius='10rem'
                  bg='#0072b1'
                  color='white'
                  colorScheme='linkedin'
                  onClick={handleTakeAnother}
                >
                  Chơi lại
                </Button>
              </Stack>
            </Center>
          </Container>
        </Box>
      )}
    </>
  )
}
