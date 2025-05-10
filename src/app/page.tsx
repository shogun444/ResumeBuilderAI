import Body from "@/components/landingPage/body";
import Footer from "@/components/landingPage/footer";
import Hero from "@/components/landingPage/hero";
import Navbar from "@/components/landingPage/navbar";
import Image from "next/image";


export default function Home() {
  return (
   <>
   <div className="min-h-screen min-w-full bg-neutral-950"> 
   <Navbar/>
   <Hero/>
   <Body/>
   <Footer/>
   </div>
   </>
  );
}
