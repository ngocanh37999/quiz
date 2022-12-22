import Head from 'next/head'
import MainLayout from 'src/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz | Ngọc Anh</title>
        <meta name='description' content='Trang chủ dự án Quiz' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <MainLayout />
      </main>
    </>
  )
}
