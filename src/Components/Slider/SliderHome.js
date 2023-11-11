import React from "react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { SliderData} from '../../Data/AllData';
import SliderItem from "./SliderItem";

const SliderHome = () => {
    const settings = {
        nav: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }


    return (
   <section className= "homeSlide">
       <Container>
           <Slider {...settings}>
               {SliderData.map((value, index) => {
                   return (
                       <SliderItem
                           key= {index}
                           title={value.title}
                           cover={value.cover}
                           desc={value.desc}
                       />
                   )
               })}

           </Slider>
       </Container>

   </section>
    )
}

export default SliderHome;