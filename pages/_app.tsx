import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react'
import Loading from 'src/components/Loading'
import ErrorBoundary from 'src/components/ErrorBoundary'
import { AppProvider } from 'src/contexts/app.context'

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false
      }
    }
  })
const colorModeManager = createLocalStorageManager('theme')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider colorModeManager={colorModeManager}>
        <QueryClientProvider client={createQueryClient()}>
          <AppProvider>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
            <Loading />
          </AppProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  )
}
