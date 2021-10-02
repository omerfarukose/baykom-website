import { Swiper ,SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import './components/ReferenceSwiper.css'

SwiperCore.use([Navigation ,Pagination]);

const data = [
    {
        id:1,
        imageURL:'./images/ref/ref1.jpg'
    },
    {
        id:2,
        imageURL:'./images/ref/ref2.jpg'
    },
    {
        id:3,
        imageURL:'./images/ref/ref3.jpg'
    },
    {
        id:4,
        imageURL:'./images/ref/ref4.jpg'
    },
    {
        id:5,
        imageURL:'./images/ref/ref5.png'
    },
    {
        id:6,
        imageURL:'./images/ref/ref6.jpg'
    },
    {
        id:7,
        imageURL:'./images/ref/ref7.jpg'
    },
    {
        id:8,
        imageURL:'./images/ref/ref8.jpg'
    },
    {
        id:9,
        imageURL:'./images/ref/ref9.jpg'
    },
    {
        id:10,
        imageURL:'./images/ref/ref10.jpg'
    },
    {
        id:11,
        imageURL:'./images/ref/ref11.png'
    },
    {
        id:12,
        imageURL:'./images/ref/ref12.png'
    },
    {
        id:13,
        imageURL:'./images/ref/ref13.png'
    },
    {
        id:14,
        imageURL:'./images/ref/ref14.jpg'
    },
    {
        id:15,
        imageURL:'./images/ref/ref15.png'
    },
    {
        id:16,
        imageURL:'./images/ref/ref16.png'
    },
]


export default () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      centeredSlides
      pagination= {{ clickable:true}}
      
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      {data.map(ref => (
          <SwiperSlide>
              <div className="img-container"><img className="navbar-logo" src={ref.imageURL} /></div>
          </SwiperSlide>
      ))}
    </Swiper>
  );
};



