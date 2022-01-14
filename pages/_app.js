import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  console.log(loading);
  
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);


  return <Component {...pageProps} />
}

export default MyApp
