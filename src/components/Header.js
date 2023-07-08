import {Link} from "react-router-dom"

function Header() {

  return (
       <div className="flex top-0 justify-between items-center  mx-auto w-full  h-20 px-5
       bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">

           <Link to="/">
                {/* <img src="" alt="Logo" width={160} loading='lazy' className="" /> */}
                <p className="text-white text-xl">mommygk</p>
           </Link>

            <nav>
              <ul className="flex gap-x-6">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/food">Food</Link></li>
            
                <li><Link to="/aboutus">About us</Link></li>
                
              </ul>
            </nav>
       </div>     
  )
}

export default Header