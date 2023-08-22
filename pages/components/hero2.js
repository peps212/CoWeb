import { useEffect, useRef, useState } from "react"
import Header from "./header"
import pic from "./pic.png"
import Image from "next/image"
import Typed from "typed.js"


const Hero2 = ( ) => {
    const TypedElement = useRef(null);

    useEffect(() => {
        if (!TypedElement.current) return;

        const typed = new Typed(TypedElement.current, {
            strings: [
                "Explore The Web",
                "Share Experiences",
                "Fuck",
            ],
            startDelay: 0,
            typeSpeed: 50,
            backSpeed: 100,
            backDelay: 500,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);
  

    return ( 
<section class="text-gray-400 bg-gradient-to-r from-indigo-500 to-indigo-900 body-font h-screen">
    <Header></Header>
  <div class="container mx-auto flex flex-col px-5 py-0 justify-center items-center">
    <Image class=" mb-10 object-cover object-center rounded shadow-2xl w-4/6" alt="hero" src={pic}/>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">

      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"> <span ref={TypedElement}></span>Together, Anywhere</h1>
      <p class="mb-2 font-medium leading-relaxed text-white w-5/6"> Seamlessly synchronize browsing sessions with your team, Enable real-time sharing of insights, research, and interactions. Elevate productivity, deepen connections, and unlock shared online experiences like never before.</p>

      <div class="flex w-full justify-center items-end py-3" >
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label for="hero-field" class="leading-7 text-sm text-white">Join The Waitlist</label>
          <input type="text" id="hero-field" placeholder="Email" name="hero-field" class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join</button>
      </div>
      <p class="text-sm mt-2 text-white mb-8 w-full"></p>

    </div>
  </div>
</section>
    )
}

export default Hero2