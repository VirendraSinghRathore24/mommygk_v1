import { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import './Page1.css';

function Header() {

  const [open, setOpen] = useState(true);

  async function clickHandlerBars()
  {
     setOpen(false);
  }

  async function clickHandlerCross()
  {
    setOpen(true);
  }

  return (
    <div className="googlefont">
       {/* <div className="flex top-0 justify-between items-center  mx-auto w-full  h-20 px-5
       bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"> */}
       <div className="flex top-0 justify-between items-center  mx-auto w-full  h-20 px-5
       bg-gradient-to-r from-red-100 via-rose-400 to-yellow-400">
       <Link to="/">
           <div className="flex">
                  <img src="../../images/logosvg12.svg" alt="Logo" width={55} loading='lazy'/>
                  <div className="mt-3 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-stone-800">MommyGK</div>
           </div>
        </Link>
            {/* <nav>
              <ul className="flex gap-x-6">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/food">Food</NavLink></li>
                <li><NavLink to="/infant">Infant</NavLink></li>
                <li><NavLink to="/aboutus">About us</NavLink></li>
                
              </ul>
            </nav> */}

            <nav className="flex  max-w-maxScreen">
              <ul className="hidden items-center gap-x-6 md:flex">
                <li><a className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center" href="/babyfoodcharts">
                <span>Charts</span>
                </a></li>
                <li><a className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center" href="/foodrecipesvideo">
                <span>Videos</span>
                </a></li>
                <li><a className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center" href="/Blogs">
                <span>Blogs</span>
                </a></li>
                <li><a className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center" href="/toys">
                <span>Toys</span>
                </a></li>        
              </ul>
              <div className="flex items-center md:hidden">
              {
                open ? (
                <div className="relative flex h-[52px] w-[66px] cursor-pointer flex-col items-end justify-between p-[0.8rem] md:hidden" onClick={clickHandlerBars}>
                <span className="w-10 py-[2px] rounded-md bg-stone-600"></span>
                <span className="w-10 py-[2px] rounded-md bg-stone-600"></span>
                <span className="w-10 py-[2px] rounded-md bg-stone-600"></span>
                </div>) : (
                <div className="relative flex h-[52px] w-[66px] cursor-pointer flex-col items-end justify-between p-[0.8rem] md:hidden" onClick={clickHandlerCross}>
                <span className="w-10 py-[2px] rounded-md absolute top-1/2 rotate-45 bg-stone-600"></span>
                <span className="w-10 py-[2px] rounded-md absolute top-1/2 opacity-0 bg-stone-600"></span>
                <span className="w-10 py-[2px] rounded-md absolute top-1/2 -rotate-45 bg-stone-600"></span>
                </div>
                )
              }
              </div>
            </nav>
            </div>
            {
          !open ? (
       <div className="absolute left-0 right-0 z-[9998] backdrop-blur-3xl pt-[10vh] pb-[8vh] md:hidden pointer-events-auto 
       visible">
       
        <ul className="flex flex-col items-center gap-y-6 md:hidden select-none">
        <li className="text-center"><a class=" text-xl leading-5" href="/babyfoodcharts">Charts</a></li>
        <li className="text-center"><a class=" text-xl leading-5" href="/foodrecipesvideo">Videos</a></li>
        <li className="text-center"><a class="text-xl leading-5" href="/blogs">Blogs</a></li>
        <li className="text-center"><a class=" text-xl leading-5" href="/toys">Toys</a></li>
        <li className="text-center"><a class=" text-xl leading-5" href="/aboutus">About us</a></li>
        <li className="text-center"><a class=" text-xl leading-5" href="/contactus">Contact us</a></li>
        <li className="text-center"><a class=" text-xl leading-5" href="/#faq">FAQ</a></li>
        </ul>
       </div>
          ): (<div></div>)
      }
       </div>     
  )
}

export default Header