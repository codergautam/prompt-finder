'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import { prompts } from '@/utils/prompts'
import { useChat } from 'ai/react'

import ScrollableFeed from 'react-scrollable-feed'

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])



  const [currentPrompt, setCurrentPrompt] = useState(prompts[0].title)
  const [currentQuestion, setCurrentQuestion] = useState(prompts[0].question)

  const { messages, setMessages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {role: 'system', content: currentPrompt, id: "initPrompt"},
      {role: 'assistant', content: currentQuestion, id: "initMessage"}
    ],
  });

  useEffect(() => {
    setMessages([
      {role: 'system', content: currentPrompt, id: "initPrompt"},
      {role: 'assistant', content: currentQuestion, id: "initMessage"}
    ]);
  }, [tab, currentPrompt, currentQuestion, setMessages])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 h-screen bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl flex flex-col px-6 lg:flex-row mx-auto gap-2">
        <div className="pt-12 w-full lg:w-2/5 lg:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-start pb-10 md:pb-6">
            <h1 className="h2 mb-4">Examples</h1>
            <p className="text-xl text-gray-600">Prompts make chatting with chatbots a whole lot easier. Check these sample prompts out:</p>
          </div>

          {/* Section content */}
          <div className="flex lg:flex-col pr-2">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto" data-aos="fade-right">
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1);  setCurrentPrompt(prompts[0].title); setCurrentQuestion(prompts[0].question); }}
                >
                  <div>
                    <div className="font-bold text-base lg:text-xl leading-snug tracking-tight mb-1">Your own personal writing assistant</div>
                    <div className="text-gray-600 hidden lg:flex">Take your writing skills to the next level with ai powered suggestions and help, built for aspiring writers, journalists, and more.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); setCurrentPrompt(prompts[1].title); setCurrentQuestion(prompts[1].question); }}
                >
                  <div>
                    <div className="font-bold text-base lg:text-xl leading-snug tracking-tight mb-1">Your personal Spanish tutor</div>
                    <div className="text-gray-600 hidden lg:flex">Your own personal spanish tutor that learns your skill level, and builds vocabulary and sentence patterns.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); setCurrentPrompt(prompts[2].title); setCurrentQuestion(prompts[2].question); }}
                >
                  <div>
                    <div className="font-bold text-base lg:text-xl leading-snug tracking-tight mb-1">A professional biologist and anatomist</div>
                    <div className="text-gray-600 hidden lg:flex">Work with an AI well versed in the fields of biology, genetics, chemistry, and anatomy.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                </div>
              </div>
            </div> */}


          </div>
        </div>
          <div className='lg:py-8 w-full lg:w-3/5 lg:h-screen flex items-center'>
        <div className="h-4/5 w-full flex flex-col mx-auto px-10 py-8 rounded bg-gray-200 text-center">
          <span className="text-gray-400 font-bold text-xl">
            Prompt:
          </span>
          <p className="text-sm text-gray-500 font-semibold">
            {currentPrompt.slice(0, 200) + "..."}
          </p>
            <div className='h-[50vh] mt-4 overflow-y-auto my-4 px-4'>
          <div className="flex flex-col w-full gap-4">
            {/* <ScrollableFeed forceScroll={true}> */}
            {
              messages.filter(e=>e.role!=="system").map((chat, i) => (
                <div key={i} className={`max-w-[50vh] flex group flex-col ${chat.role == "user" ? "bg-gray-500 text-white ml-auto text-end rounded-bl" : "bg-gray-300 text-start mr-auto rounded-br text-black"} px-4 py-2 rounded-t`}>
                {chat.content}
                </div>
              ))
            }
            {/* </ScrollableFeed> */}
          </div>
          </div>
          <form className='mt-auto' onSubmit={handleSubmit}>
            <input value={input} onChange={handleInputChange} type="text" placeholder='What will you ask?' className="border-b-2 placeholder-gray-600 border-gray-300 bg-transparent outline-none w-full text-black py-2" />
            <button type="submit" className="bg-gray-300 text-black py-2 px-4 rounded mt-4">Send</button>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}