

export default function Footer(){

  return(<>
  <hr />
  <footer className={`p-10  md:px-70  'bg-neutral-950 text-neutral-700 text-sm `}>
    <div className="md:flex md:justify-around  md:items-center">
      <div className="items-center flex justify-center"> 
        <img className="rounded-3xl h-20 flex items-center"  src='/Logo.jpeg' alt="" /> 
  <h1 className="text-2xl text-neutral-400 font-semibold pl-5">AIResumeBuilder.com</h1>
      </div>
   
  
  <div className="mt-10 mx-auto  md:grid md:grid-cols-4 gap-8">

    

    {/* Company */}
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-neutral-400">Company</h2>
      <ul className="space-y-2 text-lg">
        <li><a href="#about" className="hover:underline">About Us</a></li>
        <li><a href="#careers" className="hover:underline">Careers</a></li>
        <li><a href="#press" className="hover:underline">Press</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-neutral-400">Resources</h2>
      <ul className="space-y-2 text-lg">
        <li><a href="#blog" className="hover:underline">Blog</a></li>
        <li><a href="#help" className="hover:underline">Help Center</a></li>
        <li><a href="#guides" className="hover:underline">Guides</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-neutral-400">Legal</h2>
      <ul className="space-y-2 text-lg">
        <li><a href="#terms" className="hover:underline">Terms</a></li>
        <li><a href="#privacy" className="hover:underline">Privacy</a></li>
        <li><a href="#cookies" className="hover:underline">Cookies</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-neutral-400">Contact</h2>
      <ul className="space-y-2 text-lg">
        <li><a href="mailto:support@example.com" className="hover:underline">support@example.com</a></li>
        <li><a href="tel:+911234567890" className="hover:underline">+121 943753294</a></li>
        <li><a href="#location" className="hover:underline">Asia,Pacific.</a></li>
      </ul>
    </div>

  </div>
  </div>
  {/* Footer Bottom */}
  <div className="mt-10  pt-6 flex flex-col md:flex-row items-center justify-between text-neutral-400 text-lg">
    <span>© {new Date().getFullYear()} AiSAASResume. All rights reserved.</span>
    <div className="flex space-x-4 mt-4 md:mt-0 text-lg">
      <a href="#privacy" className="hover:underline">Privacy Policy</a>
      <a href="#terms" className="hover:underline">Terms of Service</a>
    </div>
  </div>
</footer>
  </>)
}