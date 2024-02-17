import React, {useRef} from 'react'
import Slider from "react-slick"
import { InstagramEmbed } from 'react-social-media-embed';

function Slider1() {
    const data = [
        {
            url : "https://www.instagram.com/p/C3b5rAgSipX/",
            
        },
        {
            url : "https://www.instagram.com/p/C1bO42oS8I9/",
           
        },
        {
            url : "https://www.instagram.com/p/CxqSr6-yGzD/",
            
        },
        {
            url : "https://www.instagram.com/p/CurOGQBSHST/",
           
        }
    ]
    
    const settings ={
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        initialSlide: 0,
        responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    
    };
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

  return (

        <div className='mt-10  slider-container'>
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {
            data.map((d) => (

                <InstagramEmbed url={d.url} />
            ))
        }
     </Slider>
        </div>
    
  )
}

export default Slider1