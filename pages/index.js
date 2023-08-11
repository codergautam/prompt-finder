import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/handleNotify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    setMessage('Thanks! We will notify you when we launch.');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400">
      <Head>
        <title>Prompt Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-3/4 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg bg-white text-center transition-all duration-300 ease-in-out transform hover:scale-105">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Prompt Finder</h1>
        <p className="text-gray-600 font-bold">Boost your productivity with powerful AI Prompts.</p>
        <form className="mt-4" onSubmit={handleSubmit}>
          {!message ? (
            <>
              <p className="text-gray-600 mb-4">Be notified when we launch!</p>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  className="p-3 text-black border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none transition-colors duration-200 ease-in-out">
                  Notify Me
                </button>
              </div>
            </>
          ) : (
            <p className="mt-4 text-blue-800">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
