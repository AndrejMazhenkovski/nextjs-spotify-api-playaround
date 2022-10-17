import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/sidebar';

import Center from '../components/center';
import { getSession } from 'next-auth/react';
import Player from '../components/Player';

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  );
}

// 2:07:12 #PAPAFAM

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
