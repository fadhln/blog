import Navbar from '@/components/navbar';

import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fadhlan Personal Page</title>
        {/* TODO: change description */}
        <meta name="description" content="Made by Muhammad Fadhlan" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
      </main>
    </>
  );
};

export default Home;
