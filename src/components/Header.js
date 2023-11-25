import { useState } from "react";
import {Link, NavLink} from "react-router-dom"

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
    <div>
       <div className="flex top-0 justify-between items-center  mx-auto w-full  h-20 px-5
       bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">

           <Link to="/">
                {/* <img src="" alt="Logo" width={160} loading='lazy' className="" /> */}
                <p className="text-white text-xl">Mommy GK</p>
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
                <li><a className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center" href="/">
                <span>Home</span>
                </a></li>
                <li><a className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center" href="/food">
                <span>Food</span>
                </a></li>
                <li><a className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center" href="/babyfood6month">
                <span>Downloads</span>
                </a></li>
                <li><a className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center" href="/aboutus">
                <span>About us</span>
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
       <div className="absolute left-0 right-0 z-[9998] backdrop-blur-lg pt-[10vh] pb-[8vh] md:hidden pointer-events-auto 
       visible">
       
        <ul className="flex flex-col items-center gap-y-6 md:hidden select-none">
        <li className="text-center"><a class=" text-xl leading-5" href="/">Home</a></li>
        <li className="text-center"><a class=" text-xl leading-5" href="/food">Food</a></li>
        <li className="text-center"><a class="text-xl leading-5" href="/babyfood6month">Downloads</a></li>
        <li className="text-center"><a class=" text-xl leading-5" href="/aboutus">About us</a></li>
        </ul>
       </div>
          ): (<div></div>)
      }
       </div>     
  )
}

export default Header