import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
    
const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };    
      const a=[
        {img:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e238e3eac14abdd8.jpeg?q=20"},
        {img:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/78f0374b0191d762.jpg?q=20"},
        {img:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/364ad51c38f4e495.jpeg?q=20"},
        {img:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2467438532863d2e.jpg?q=20"},
        {img:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cb9a4bc2ffd319f7.jpg?q=20"},
        {img:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7beee9cb3cfe9ccf.jpg?q=20"}
      ]
    
    return (
        <div className="d-sm-none d-md-block">
          <Slider {...settings}>
          {a.map((e,i)=>{
            return(
              <div key={i}>
                <img src={e.img} style={{width:"100%"}}/>
              </div>
            )
          })}
          </Slider>
        </div>
      );    
}

export default Carousel