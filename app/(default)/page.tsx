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
  const prompts : {title: string, question:string, conversation:{role:string, chat: string}[]}[] = [
   {title: `You are an intelligent assistant who is well versed in the field of journalism and publication. Your job is to advise
    prospect users of how they can improve their: resumes, recipe descriptions, sentences, and more. You are an expert writer
    who can aid any people that need your help. You can speak multiple languages and cite grammar errors or writing
     issues with the users lines`, question: "What do you need help writing?", conversation: [
      {
        role: "user",
        chat: "Can you help me make a recipe for jollof rice?"
      },
      {
        role: "ai",
        chat: `Certainly! Jollof rice is a popular West African dish known for its delicious flavors and vibrant colors. Here's a basic recipe for Jollof rice:

        **Ingredients:**
        
        For the Rice:
        - 2 cups long-grain parboiled rice
        - 1/4 cup vegetable oil
        - 1 onion, finely chopped
        - 2-3 cloves garlic, minced
        - 1 red bell pepper, diced
        - 1 green bell pepper, diced
        - 1 can (14 oz) of diced tomatoes or 4-5 fresh tomatoes, blended
        - 1 tablespoon tomato paste
        - 1 teaspoon thyme
        - 1 teaspoon curry powder
        - 1 teaspoon paprika
        - 1 teaspoon cayenne pepper (adjust to your spice preference)
        - Salt and pepper to taste
        - 2 cups chicken or vegetable broth
        - 1 bay leaf
        
        For the Garnish:
        - Chopped fresh cilantro or parsley
        - Fried plantains (optional)
        - Fried chicken or fish (optional)
        
        **Instructions:**
        
        1. **Prepare the Rice:**
           - Rinse the rice in cold water until the water runs clear. Drain and set aside.
        
        2. **Sauté the Aromatics:**
           - In a large pot or skillet, heat the vegetable oil over medium heat. Add the chopped onions and sauté until they become translucent.
        
        3. **Add Garlic and Peppers:**
           - Stir in the minced garlic, diced red and green bell peppers, and continue to sauté for a few more minutes until the peppers soften.
        
        4. **Add Tomatoes and Tomato Paste:**
           - Add the diced tomatoes or blended fresh tomatoes and tomato paste to the pot. Stir well and cook for about 5-7 minutes until the tomato mixture thickens and the oil starts to separate.
        
        5. **Seasonings:**
           - Add the thyme, curry powder, paprika, cayenne pepper, salt, and pepper to the tomato mixture. Stir to combine and let it cook for a couple of minutes to release the flavors.
        
        6. **Rice and Broth:**
           - Add the washed rice to the pot and stir it into the tomato mixture until well-coated. Pour in the chicken or vegetable broth, and add the bay leaf. Bring the mixture to a gentle boil.
        
        7. **Simmer:**
           - Reduce the heat to low, cover the pot with a tight-fitting lid, and let the rice simmer for about 20-25 minutes, or until the rice is tender and the liquid is absorbed. You can add more broth if needed.
        
        8. **Fluff and Garnish:**
           - Once the rice is cooked, remove it from the heat, and fluff it with a fork. Discard the bay leaf. Garnish with chopped cilantro or parsley.
        
        9. **Optional Additions:**
           - You can serve Jollof rice with fried plantains, fried chicken, or fried fish for a complete meal.
        
        Enjoy your homemade Jollof rice! It's a flavorful and satisfying dish that's perfect for gatherings and celebrations. Adjust the spice level to your liking, and feel free to customize it with your favorite proteins and vegetables.`
      },
      {
        role: `user`,
        chat: "Thanks! Can you help me write a resume for a vc scout application?",
      }, {
        role: 'ai',
        chat: `Certainly! Writing a resume for a VC (Venture Capital) Scout application is crucial to showcase your qualifications and experiences that make you a strong candidate for the position. Here's a template you can use as a starting point:

        
        [Your Name]
        [Your Address]
        [City, State ZIP Code]
        [Your Email Address]
        [Your Phone Number]
        [LinkedIn Profile URL, if applicable]
        
        Objective:
        Dedicated and passionate VC Scout with a proven track record of identifying and evaluating promising startups. Seeking an opportunity to leverage my skills, network, and industry knowledge to support [VC Firm's Name] in discovering innovative investment opportunities.
        
        Summary of Qualifications:
        - [X] Years of experience in venture capital, startup ecosystem, or related fields.
        - Proven ability to source, evaluate, and recommend investment opportunities.
        - Deep knowledge of industry trends, emerging technologies, and market dynamics.
        - Strong analytical skills for conducting due diligence and market research.
        - Excellent networking and relationship-building abilities within the startup community.
        - Effective communicator with the ability to convey complex ideas clearly.
        
        Professional Experience:
        [VC Firm's Name] — [City, State]
        [Month, Year] - Present
        VC Scout
        
        - Identify and source potential investment opportunities by attending industry events, networking, and conducting market research.
        - Evaluate startups by analyzing business plans, financials, market positioning, and competitive landscapes.
        - Collaborate with investment team to present investment recommendations, including detailed due diligence reports.
        - Maintain and expand a network of entrepreneurs, founders, and industry experts to stay updated on market trends.
        - Assist in portfolio management and support existing investments in the portfolio.
        
        [Previous Experience - If applicable]
        
        Education:
        [Degree Earned, e.g., Bachelor of Science in Business Administration]
        [University Name]
        [City, State]
        [Month, Year of Graduation]
        
        Skills:
        - Startup sourcing and evaluation
        - Market research and due diligence
        - Networking and relationship-building
        - Financial analysis and modeling
        - Pitch evaluation and presentation
        - Industry knowledge and trend analysis
        - Strong communication skills
        
        Certifications (if applicable):
        - [Relevant Certifications]
        
        References:
        Available upon request.
        
        Remember to customize this template with your specific experiences, skills, and achievements. Highlight any notable investments you've scouted or any specific industry expertise you possess. Additionally, include any relevant certifications or additional qualifications that make you stand out. Make sure your resume is well-organized, concise, and free of grammatical errors. Good luck with your VC Scout application!`
      },
      {
        role: "user",
        chat: `Nice, thats awesome. Could you help me write the introduction to an article talking about France and Argentina in the world cup?`
      },
      {
        role: `ai`,
        chat: `Certainly! Here's an introduction for an article discussing France and Argentina in the context of the World Cup:

        Title: A Clash of Titans: France and Argentina in the World Cup
        
        The FIFA World Cup, the grandest stage of international football, is a spectacle that unites fans from every corner of the globe. It's a tournament where dreams are born and giants clash on the pitch. In the annals of World Cup history, two nations consistently stand among the titans: France and Argentina. These footballing powerhouses have enthralled audiences with their flair, passion, and unforgettable moments on the world's most prestigious stage.
        
        As we anticipate the next edition of this sporting extravaganza, it's impossible not to conjure memories of classic encounters between these two giants. France, with its elegant style and a legacy of excellence, meets Argentina, a nation with a footballing tradition as rich and vibrant as its culture. In this article, we delve into the enthralling history, rivalries, and defining moments that have etched France and Argentina's names in World Cup folklore.
        
        From the "Hand of God" to Zinedine Zidane's masterclass, from the brilliance of Diego Maradona to the elegance of Thierry Henry, these teams have given us moments of sheer magic, heartbreak, and everything in between. Join us on a journey through time, as we explore the captivating narratives of two nations bound by their love for the beautiful game and their quest for World Cup glory.
        
        In the pages that follow, we'll dissect their past encounters, analyze their current strengths and weaknesses, and offer insights into what the future may hold when these footballing giants collide once again on the grandest stage of them all. The stage is set, the world is watching, and the World Cup's timeless rivalry between France and Argentina is about to be reignited. Welcome to the beautiful world of football, where history is written with every kick of the ball.`
      }, 
      {
        role: "user",
        chat: `Thanks`
      }
    ]},
    {title: `You are an incredible engineer alike Mark Rober and Allen Pang. You are knowledgable of Aerospace Engineering, Architecture, and more. You are prepared
    to give advice on how feasible a user's idea is or gauging the steps that should be taken to make a project happen. You can help give 
    advice on building the structural integrity of buildings, bridges, buildings, and more, by using the world's most recent
    architectural innovations.`, question: "What would you like to build?", conversation: [
      {
        role: "user",
        chat: "I'm interested in making a speaker using an Arduino and other components, can you help?",
      },
      {
        role: "ai",
        chat: `
        Certainly! Creating a speaker system using an Arduino and other components can be a fun and educational project. Here are the basic steps and components you'll need to get started:
        
        Components You'll Need:
        
        Arduino Board: You can use various Arduino boards like the Arduino Uno, Arduino Nano, or Arduino Mega, depending on your project's complexity and size constraints.
        
        Audio Amplifier: You'll need an audio amplifier to boost the signal from the Arduino to drive the speaker. The choice of amplifier depends on your speaker's power requirements. Common options include LM386 or PAM8403.
        
        Speaker: Choose a speaker that matches your desired audio quality and power output. You can find a variety of speakers, from small ones for simple projects to larger ones for higher audio fidelity.
        
        Audio Source: Decide how you want to input audio into your system. You can use a 3.5mm audio jack, Bluetooth module, or even an SD card module to play audio files.
        
        Power Supply: Depending on your components, you'll need a suitable power supply. The Arduino can often be powered from the same supply as the amplifier.
        
        Steps to Build the Speaker:
        
        Connect the Arduino and Amplifier:
        
        Connect the audio output pin of the Arduino to the input of the audio amplifier.
        Connect the ground (GND) of the Arduino to the ground of the audio amplifier.
        Connect the power supply (VCC) of the audio amplifier to your power source.
        Connect the Speaker:
        
        Connect one terminal of the speaker to the audio output of the amplifier.
        Connect the other terminal of the speaker to the ground of the amplifier.
        Connect the Audio Source:
        
        If you're using a 3.5mm audio jack, connect it to the audio input of the amplifier.
        If you're using a Bluetooth module or SD card module, follow their respective connection instructions.
        Upload Arduino Code:
        
        Write Arduino code to control audio playback. You'll need libraries to handle audio playback if using a module like the DFPlayer Mini for SD card audio.
        Test and Fine-Tune:
        
        Upload your code to the Arduino and test your speaker system.
        Adjust the amplifier's gain and experiment with different audio sources to achieve the desired sound quality.
        Enclosure (Optional):
        
        Depending on your project, you may want to build an enclosure to house your speaker and components. This can improve audio quality and aesthetics.
        Safety Precautions:
        
        Be cautious with voltage levels and ensure you're using the correct power supply voltage for your components.
        Ensure proper grounding and avoid shorts in your connections.
        This is a basic overview to get you started on your speaker project. Depending on your specific goals and requirements, you may need to delve deeper into each component's datasheets and functionalities. Arduino and amplifier libraries can be invaluable for simplifying audio playback and control. Enjoy your speaker-building journey!`
      },
      {
        role: "user",
        chat: `Thanks, how could I make a steering wheel for a game with a potentiometer and 3D printing?`
      },
      {
        role: "ai",
        chat: `Creating a DIY steering wheel for a game using a potentiometer and 3D printing can be a fun project. Here are the steps to guide you through the process:

        Materials and Components:
        
        Potentiometer: Choose a potentiometer with a suitable resistance value (e.g., 10k ohms) that can provide smooth and precise control for your steering wheel.
        
        Arduino: You'll need an Arduino board (e.g., Arduino Uno) to interface with the potentiometer and communicate with your game.
        
        3D Printer: Access to a 3D printer to create the physical steering wheel structure.
        
        Buttons (Optional): If you want to add buttons for additional functionality (e.g., horn or gear shifting), you'll need momentary push buttons.
        
        Wires and Soldering Equipment: To connect components and make reliable electrical connections.
        
        Steps to Create the DIY Steering Wheel:
        
        Design the Steering Wheel:
        
        Use 3D modeling software like Tinkercad, Fusion 360, or Blender to design the physical structure of the steering wheel. Consider ergonomics and comfort when designing the grip.
        3D Print the Steering Wheel:
        
        Once you have your design ready, use a 3D printer to create the parts. You may need to print in multiple sections and assemble them later.
        Install the Potentiometer:
        
        Attach the potentiometer inside the steering wheel grip. Ensure it is firmly secured and aligned so that it can accurately measure the steering angle.
        Wire the Potentiometer:
        
        Connect the potentiometer to the Arduino. Typically, a potentiometer has three terminals: one connected to the 5V output of the Arduino, one connected to an analog input pin, and one connected to the Arduino's ground (GND).
        Add Buttons (Optional):
        
        If you're adding buttons, wire them to the Arduino as well. Each button should be connected to a digital input pin and to the ground (GND).
        Program the Arduino:
        
        Write Arduino code to read the analog input from the potentiometer and, if applicable, read the state of the buttons.
        Use a USB connection to upload the code to the Arduino.
        Game Interface:
        
        Configure your game to recognize the Arduino as a joystick or game controller. You may need additional software to bridge the Arduino input to game input.
        Test and Calibrate:
        
        Test your DIY steering wheel in the game to ensure it responds correctly to steering inputs and button presses.
        Calibrate the potentiometer if necessary to fine-tune sensitivity and centering.
        Assemble the Steering Wheel:
        
        Put together the 3D-printed parts to complete the steering wheel assembly.
        Enjoy Your DIY Steering Wheel:
        
        With everything connected and calibrated, you can now enjoy using your DIY steering wheel in your favorite games.
        Remember to be cautious with wiring and soldering, and ensure that your connections are secure to avoid any electrical issues. Depending on the specific game and interface requirements, you may need to customize the Arduino code and game settings to achieve the best experience.`
      },
      {
        role: "user",
        chat: "That's awesome, do you know how bridge making works? I'm fascinated by the process and want to learn the basics of it."
      },
      {
        role: "ai",
        chat: `Building bridges is a fascinating field of civil engineering, and it involves various principles and methods depending on the type of bridge. Here are the basics of how bridge construction works:

        1. Bridge Design:
        
        The process starts with bridge design, where engineers and architects collaborate to create plans and blueprints. They consider factors such as location, purpose, traffic load, span length, and aesthetics.
        2. Site Preparation:
        
        Before construction begins, the construction site needs to be prepared. This involves clearing vegetation, leveling the ground, and potentially excavating for bridge foundations.
        3. Foundation Construction:
        
        The type of foundation used depends on the bridge design and the soil conditions. Common foundation types include:
        Pile Foundations: Driven deep into the ground to provide support in areas with soft or unstable soil.
        Spread Footings: Concrete pads that distribute the load over a larger area for stable soil conditions.
        Piers and Abutments: Support structures that carry the weight of the bridge. Piers are built in the water or below it, while abutments are on the shore.
        4. Substructure Construction:
        
        The substructure includes all the components below the bridge deck, such as piers, abutments, and retaining walls. These components are constructed using reinforced concrete or steel.
        5. Superstructure Construction:
        
        The superstructure is the part of the bridge that spans between supports and carries the load. The materials used for the superstructure can vary:
        Steel: Used in many modern bridge designs for its strength and flexibility.
        Concrete: Often used for its durability and ability to support heavy loads.
        Wood: Less common but used for smaller bridges and pedestrian walkways.
        6. Bridge Deck Installation:
        
        The bridge deck is the top surface that vehicles or pedestrians will use. It can be made from concrete, asphalt, or other materials, depending on the bridge's purpose.
        7. Bridge Connections:
        
        Bridge components, such as beams, trusses, or arches, are connected using bolts, welding, or other methods to ensure stability and load-bearing capacity.
        8. Finishing Touches:
        
        The bridge undergoes various finishing touches, including painting, expansion joint installation (to allow for temperature-related expansion and contraction), and road markings for vehicular bridges.
        9. Quality Control and Safety:
        
        Throughout the construction process, quality control measures are implemented to ensure the bridge meets safety and structural standards. `
      }
    ]}
  ]

  const randNum = Math.round(Math.random() * (prompts.length-1))
  console.log("Rand: ", randNum)
  const randPrompt = prompts[randNum].title
  const randQuestion = prompts[randNum].question
  const randChat = prompts[randNum].conversation

  
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
            <div className='h-[50vh] overflow-y-auto my-4 px-4'>
          <div className="flex flex-col w-full gap-4">
            {
              randChat.map((chat, i) => (
                <div key={`chat${i}`} className={`max-w-[50vh] flex group flex-col ${chat.role == "user" ? "bg-stone-600 ml-auto text-end rounded-bl" : "bg-stone-900 text-start mr-auto rounded-br"} text-white px-4 py-2 rounded-t`}>
                <p className="line-clamp-5
                ">
                {chat.chat}
                </p>
                </div>
              ))
            }
          </div>
          </div>
          <form className='mt-auto'>
            <input type="text" placeholder='What will you ask?' className="border-b-2 placeholder-stone-600 border-stone-400 bg-transparent outline-none w-full text-white py-2" />
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
