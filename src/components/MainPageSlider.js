import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const MainPageSlider = () => {
    const data = [
        {
            title : "Every meal is a new adventure for little taste buds !!!",
            imgUrl : "../../images/recipevideo.webp",
            url : "/recipe-videos/baby-food-recipe-videos",
            color : 1
            
        },
        {
            title : "A baby food chart is not just a plan, it’s a roadmap to good health !!!",
            imgUrl : "../../images/menu2.webp",
            url : "/babyfoodcharts",
            color : 3
            
        },
        {
            title : "To a child, every toy has a story and every game is a journey !!!",
            imgUrl : "../../images/toys_cover.jpg",
            url : "/toys",
            color : 2
           
        },
        
    ]
    
    const settings ={
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        initialSlide: 0,
    };
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

  return (

        <div className='bg-gradient-to-r from-red-100 via-lime-100 to-indigo-200 '>
        <Slider ref={slider => (sliderRef = slider)} {...settings} >
        {
            data.map((d) => (
                <div className='w-full mx-auto'>
                <div className='flex justify-evenly items-center py-4 '>
                    <div className='flex flex-col justify-center w-6/12 mx-auto gap-y-10'>
                        <div className=' text-lg md:text-2xl poppins-medium'>
                            {d.title}
                        </div>
                        <Link to={d.url}>
                        <button className='bg-rose-600 px-1 md:px-4 py-1 md:py-2 rounded-lg text-white text-md font-semibold md:text-lg w-28 md:w-36 hover:bg-green-400 hover:text-black'>Click Here</button>
                        </Link>
                    </div>
                    <div className='w-4/12 mx-auto'>
                        <img src={d.imgUrl} alt='cover' className='h-40 md:h-56 rounded-lg'/>
                    </div>
                </div>
                </div>
            ))
        }
     </Slider>
        </div>
    
  )
}

export default MainPageSlider