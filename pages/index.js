import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400">
      <Head>
        <title>Prompt Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-3/4 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg bg-white text-center transition-all duration-300 ease-in-out transform hover:scale-105">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Prompt Finder</h1>
        <p className="text-gray-600 font-bold">Boost your productivity with powerful AI Prompts.</p>
      </div>
    </div>
  );
}
