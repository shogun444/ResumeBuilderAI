import Body from "@/components/landingPage/body";
import Footer from "@/components/landingPage/footer";
import Hero from "@/components/landingPage/hero";
import Navbar from "@/components/landingPage/navbar";
import Image from "next/image";


export default function Home() {
  return (
   <>
   <div className="min-h-screen min-w-full bg-[#f5f5f7] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 selection:bg-neutral-200 dark:selection:bg-neutral-800 antialiased transition-colors duration-300 font-sans"> 
   <Navbar/>
   <Hero/>
   <Body/>
   <Footer/>
   </div>
   </>
  );
}
