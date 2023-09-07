"use client";

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import { useEffect, useState } from 'react'
import { useChat } from 'ai/react';

export default function Home() {

  const prompts : {title: string, question:string}[] = [
   {title: `You are an intelligent assistant who is well versed in the field of journalism and publication. Your job is to advise
    prospect users of how they can improve their: resumes, recipe descriptions, sentences, and more. You are an expert writer
    who can aid any people that need your help. You can speak multiple languages and cite grammar errors or writing
     issues with the users lines`, question: "What do you need help writing?"},
  ]

  const randPrompt = prompts[0].title
  const randQuestion = prompts[0].question;

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {role: 'system', content: randPrompt, id: "initPrompt"},
      {role: 'assistant', content: randQuestion, id: "initMessage"}
    ],
  });

  return (
    <>
      <Hero />
      <div className='h-screen bg-stone-400 py-8 flex items-center'>
        <div className="h-4/5 w-1/2 flex flex-col mx-auto px-10 py-8 rounded bg-stone-950 shadow-2xl text-center shadow-stone-500">
          <span className="text-stone-800 font-bold text-xl">
            Prompt:
          </span>
          <span className="text-sm w-5/6 text-stone-400 font-semibold mx-auto">
            {randPrompt}
          </span>
            <div className='h-[50vh] overflow-y-auto my-4 px-4'>
          <div className="flex flex-col w-full gap-4">
            {
              messages.filter(e=>e.role!=="system").map((chat, i) => (
                <div key={`chat${i}`} className={`max-w-[50vh] flex group flex-col ${chat.role == "user" ? "bg-stone-600 ml-auto text-end rounded-bl" : "bg-stone-900 text-start mr-auto rounded-br"} text-white px-4 py-2 rounded-t`}>
                <p className="line-clamp-5
                ">
                {chat.content}
                </p>
                </div>
              ))
            }
          </div>
          </div>
          <form className='mt-auto' onSubmit={handleSubmit}>
            <input value={input} onChange={handleInputChange} type="text" placeholder='What will you ask?' className="border-b-2 placeholder-stone-600 border-stone-400 bg-transparent outline-none w-full text-white py-2" />
            <button type="submit" className="bg-stone-600 text-white py-2 px-4 rounded mt-4">Send</button>
          </form>
        </div>
      </div>
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
