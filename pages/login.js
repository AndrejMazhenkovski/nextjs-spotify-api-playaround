import React from 'react';
import { getProviders, getSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

function Login({ providers }) {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <>
      <h1> hello</h1>
      <button className=' bg-red' onClick={() => signOut()}>
        Log out bro
      </button>
      <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
        <Image
          className='w-52 mb-5'
          src='https://i.imgur.com/fPuEa9V.png'
          alt=''
          width={208}
          height={208}
        />

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className='bg-[#18D860] text-white p-4 mt-4 rounded-full'
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
      </div>
      <div className='bg-white flex flex-col items-center bg-black min-h-screen w-full justify-center'>
        <button
          className='flex items-center space-x-2 hover:text-white bg-white'
          onClick={() => signOut()}
        ></button>
      </div>
    </>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
