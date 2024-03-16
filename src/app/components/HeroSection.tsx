import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex 
    flex-col items-center justify-center relative 
    overflow-hidden mx-auto py-10 md:py-0"
    >
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"    // adjust the color in it
      />
    <div className="p-4 relative z-10 w-full text-center"
    >
     <h1
     className="mt-20 md:mt-0 text-4xl md:text-7xl
     font-bold bg-clip-text text-transparent
     bg-gradient-to-b from-neutral-50 to-neutral-400"
     >lt&apos;s Muhammad</h1>
     <p
     className="mt-4 font-normal text-base md:text-lg
     text-neutural-300 max-w-lg mx-auto"
     >

Muhammad bin Zohaib is a dynamic web developer
 known for crafting innovative digital experiences.
  With expertise in front-end and back-end development,
   he creates sleek websites and complex web applications. </p>
      <div className="mt-4">
       <Link href={"/projects"}>
            <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black
            text-balck dark:text-white
            border-neutral-200 dark:border-slate-800"
            >
                Hire Me
            </Button>
       </Link>
      </div>
    </div>

    </div>
  )
}

export default HeroSection