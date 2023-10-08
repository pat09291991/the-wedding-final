"use client"

import React, { useEffect, useState } from 'react'
import MainPage from './components/mainPage'
import SnowflakeAnimation from './components/SnowflakeAnimation';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      setLoading(!loading)
    }, 6000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <>
      <SnowflakeAnimation loading={loading} />
      {!loading ?
        <MainPage />
        :
        ""
      }


    </>
  )
}

export default Home;
