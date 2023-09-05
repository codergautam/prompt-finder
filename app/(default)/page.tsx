export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import { useEffect, useState } from 'react'

export default function Home() {
  const prompts : {title: string, question:string}[] = [
   {title: `You are an intelligent assistant who is well versed in the field of journalism and publication. Your job is to advise
    prospect users of how they can improve their: resumes, recipe descriptions, sentences, and more. You are an expert writer
    who can aid any people that need your help. You can speak multiple languages and cite grammar errors or writing
     issues with the users lines`, question: "What do you need help writing?"},
    {title: `You are an incredible engineer alike Mark Rober and Allen Pang. You are knowledgable of Aerospace Engineering, Architecture, and more. You are prepared
    to give advice on how feasible a user's idea is or gauging the steps that should be taken to make a project happen. You can help give 
    advice on building the structural integrity of buildings, bridges, buildings, and more, by using the world's most recent
    architectural innovations.`, question: "What would you like to build?"}
  ]

  const randNum = Math.round(Math.random() * (prompts.length-1))
  console.log("Rand: ", randNum)
  const randPrompt = prompts[randNum].title
  const randQuestion = prompts[randNum].question

  
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
          <span className="text-3xl w-5/6 text-white mt-12 font-semibold mx-auto">
            {randQuestion}
          </span>
          <div className="flex flex-col w-full mt-4 gap-4">
            <div className="w-min min-w-max max-w-[50vh] ml-auto flex flex-col bg-stone-600 text-white px-4 py-2 rounded-t rounded-bl">
              This is you talking wadda bang booing ajdfkaf
            </div>
            <div className="w-min min-w-max max-w-[50vh] mr-auto flex flex-col bg-stone-900 text-white px-4 py-2 rounded-t rounded-br">
              This is the AI talking right here, ooga booga wooga dinga dang ba hoova kow
            </div>
          </div>
          <form className='mt-auto'>
            <input type="text" className="border-b-2 border-stone-400 bg-transparent outline-none w-full text-white py-2" />
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
