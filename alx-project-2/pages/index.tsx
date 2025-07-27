import Head from 'next/head'
import Header from '@/components/layout/Header'

const Home = () => {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="flex flex-col h-screen items-center justify-center text-center bg-gray-50 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Welcome to ALX Project 2</h1>
        <p className="text-lg">This is the starting point of our Next.js project with TypeScript and Tailwind CSS.</p>
      </main>
    </>
  )
}

export default Home;
