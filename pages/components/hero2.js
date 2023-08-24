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
                "Team Meetings",
                "Brainstorming Sessions",
                "Client Onboarding",
                "Product Demos"

            ],
            startDelay: 0,
            typeSpeed: 50,
            backSpeed: 80,
            backDelay: 500,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);
  

    return ( 
<section class=" bg-gradient-to-r from-indigo-500 to-indigo-900 body-font h-max">
    <Header></Header>
  <div class="container mx-auto flex flex-col justify-center items-center text-center">
    
  <h1 class="title-font mobile:text-xl sm:text-4xl text-3xl mb-4 font-bold text-white">The Virtual Collaboration Playground: <br></br><span className="mobile:text-sm sm:text-2xl lg:text-3xl text-3xl"> Revolutionize <span ref={TypedElement}></span></span> </h1>
    <Image class=" mb-10 object-cover object-center rounded shadow-2xl 2xl:w-8/12 xl:w-9/12 lg:w-11/12 md:w-1/1 sm:w-1/1  " alt="hero" src={pic}/>
    <div class="w-full 2xl:w-10/12 lg:w-9/12 md:w-11/12  flex flex-col mb-16 items-center text-center">
      
      <p class="mb-2 font-bold leading-relaxed text-gray-300 w-5/6"> Seamlessly synchronize web browsing sessions with your team, real-time collaboration on all the Web Apps you <span className="text-red-400 text-lg">Love</span>. <br></br> <br></br> Enable <span className="text-sky-300 ">Shared Online Experiences</span> Like Never Before.</p>
      <Form></Form>
      <p class="text-sm mt-2 text-white mb-8 w-full"></p>

    </div>
  </div>
</section>
    )
}

export default Hero2