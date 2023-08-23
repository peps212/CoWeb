import { useToast } from "@chakra-ui/react"
import { m } from "framer-motion"
import { useState } from "react"


const Form = () => {

    const toast = useToast()
    const [buttonLoading, setButtonLoading] = useState(false)
    const [emailInput, setEmailInput] = useState("")
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (!emailInput) {
            return toast({
                description: "Email is Required",
                status: "error"
            })
        }

        setButtonLoading(true)

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                body: JSON.stringify({email: emailInput})
            })
         const data = await res.json()
         
         if (data.success) {
            toast({
                title:"Joined Successfully!",
                description:"Thank You",
                status: "success"
            })
         } else {
            throw new Error(data?.error || "error")
         }

        } catch(e) {
            toast({
                description: (e).message,
                status: 'error'               
              });
        }
        setEmailInput("")
        setButtonLoading(false)
    }
    


    return (
    <form onSubmit={handleFormSubmit} class="flex w-full justify-center items-end py-3" >
        <div class="relative mr-4 2xl:w-6/12 xl:w-7/12 lg:w-8/12 md:w-7/12 sm:w-7/12 mobile:w-8/12 text-left">
          <label for="hero-field" class="leading-7 text-sm text-white">Join The Waitlist</label>
          <input type="email" value={emailInput} onChange={(e) => {setEmailInput(e.target.value)}} id="hero-field" placeholder="Email" name="hero-field" class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button disabled={buttonLoading} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join</button>
    </form>
    )
}

export default Form