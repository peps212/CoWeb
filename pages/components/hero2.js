import { useEffect, useRef, useState } from "react"
import Header from "./header"
import pic from "./pic.png"
import Image from "next/image"
import Typed from "typed.js"
import Form from "./form"


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
<section class="text-gray-400 bg-gradient-to-r from-indigo-500 to-indigo-900 body-font h-full">
    <Header></Header>
  <div class="container mx-auto flex flex-col justify-center items-center h-screen">
    <Image class=" mb-10 object-cover object-center rounded shadow-2xl 2xl:w-8/12 xl:w-9/12 lg:w-11/12 md:w-1/1 sm:w-1/1  " alt="hero" src={pic}/>
    <div class="w-full 2xl:w-10/12 lg:w-9/12 md:w-11/12  flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font- text-white"> <span ref={TypedElement}></span>Together, Anywhere</h1>
      <p class="mb-2 font-medium leading-relaxed text-white w-5/6"> Seamlessly synchronize browsing sessions with your team, Enable real-time sharing of insights, research, and interactions. Elevate productivity, deepen connections, and unlock shared online experiences like never before.</p>
      <Form></Form>
      <p class="text-sm mt-2 text-white mb-8 w-full"></p>

    </div>
  </div>
</section>
    )
}

export default Hero2