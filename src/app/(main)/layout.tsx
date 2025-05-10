
import Navbar from "./resume/Navbar";




export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}> ){
  return(<div >
    <div className="min-w-full min-h-15">
    <Navbar/>
    </div>
  <div>
    {children}
  </div>
  </div>)
}