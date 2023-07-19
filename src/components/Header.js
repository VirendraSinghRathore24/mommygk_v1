import {Link, NavLink} from "react-router-dom"

function Header() {

  return (
       <div className="flex top-0 justify-between items-center  mx-auto w-full  h-20 px-5
       bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">

           <Link to="/">
                {/* <img src="" alt="Logo" width={160} loading='lazy' className="" /> */}
                <p className="text-white text-xl">Mommy GK</p>
           </Link>

            <nav>
              <ul className="flex gap-x-6">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/food">Food</NavLink></li>
                <li><NavLink to="/infant">Infant</NavLink></li>
                <li><NavLink to="/aboutus">About us</NavLink></li>
                
              </ul>
            </nav>
       </div>     
  )
}

export default Header