import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import config from '../config';
import Navbar from '../components/Navbar';

export default function Home() {
  const [supabase, setSupabase] = useState(null);
  const [user, setUser] = useState(null);

  async function getUser() {
    const { data: { session } } = await supabase.auth.getSession();
    setUser(session?.user);
  }

  useEffect(() => {
    setSupabase(createClient(config.SUPABASE_URL, config.SUPABASE_KEY));
  }, []);

  useEffect(() => {
    if (supabase) {
      getUser();
    }
  }, [supabase]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400">
      <Head>
        <title>Prompt Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar user={user} supabase={supabase}/>

      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-3/4 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg bg-white text-center transition-all duration-300 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Prompt Finder</h1>
          <p className="text-gray-600 font-bold">Boost your productivity with powerful AI Prompts.</p>
        </div>
      </div>
    </div>
  );
}
