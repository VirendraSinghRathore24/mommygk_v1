import { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom";
import './Page1.css';
import './Header.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useDispatch } from "react-redux";
import { addInstaVideo, removeInstaVideo } from "../utils/redux/instaSlice";

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
async function onClickHandler(e)
{
  setOpen(true);
}

const dispatch = useDispatch();

const getData =  async() => {

      const foodVideosCollectionRef = collection(db, "FoodVideos");

      const data = await getDocs(foodVideosCollectionRef);
      const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));

      localStorage.setItem('recipe-videos', JSON.stringify(filteredData));

      // Add all videos to redux store
      //dispatch(addInstaVideo(filteredData)); 
}

useEffect(() => {
  getData();

  return (() => {
    //dispatch(removeInstaVideo());
    localStorage.removeItem('recipe-videos');
  })
}, [])
  return (
    <div className="googlefont">
     {/* <div className="flex top-0 w-full px-5 justify-center items-center color">
          <div className='text-white text-center p-4 text-lg '>We are now <span className="blink_me text-xl text-orange-400">50K+ at Instagram </span> - Thanks for the love and support !!!</div>
     </div> */}
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
              <ul className="hidden items-center gap-x-2 md:flex">
              <li><NavLink className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center link" to="/" end>
                <span>Home</span>
                </NavLink></li>
                <li><NavLink className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center link" to="/babyfoodcharts">
                <span>Charts</span>
                </NavLink></li>
                <li><NavLink className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center link" to="/baby-food-recipes-video">
                <span>Videos</span>
                </NavLink></li>
                <li><NavLink className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center link" to="/baby-food-recipes">
                <span>Blogs</span>
                </NavLink></li>
                <li><NavLink className="py-5 flase text-lg leading-5 relative group flex gap-1 items-center link" to="/toys">
                <span>Toys</span>
                </NavLink></li>        
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
       
        <ul className="flex flex-col items-center gap-y-6 md:hidden select-none text-xl">
        <li className="text-center"><NavLink class="leading-5" to="/babyfoodcharts" onClick={onClickHandler}>Charts</NavLink></li>
        <li className="text-center"><NavLink class=" text-xl leading-5" to="/baby-food-recipes-video" onClick={onClickHandler}>Videos</NavLink></li>
        <li className="text-center"><NavLink class="text-xl leading-5" to="/baby-food-recipes" onClick={onClickHandler}>Blogs</NavLink></li>
        <li className="text-center"><NavLink class=" text-xl leading-5" to="/toys" onClick={onClickHandler}>Toys</NavLink></li>
        <li className="text-center"><NavLink class=" text-xl leading-5" to="/aboutus" onClick={onClickHandler}>About us</NavLink></li>
        <li className="text-center"><NavLink class=" text-xl leading-5" to="/contactus" onClick={onClickHandler}>Contact us</NavLink></li>
        </ul>
       </div>
          ): (<div></div>)
      }
       </div>     
  )
}

export default Header