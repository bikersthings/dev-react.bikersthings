// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
export default () => {
    return (
        <>
            <div className="container text-center pt-5">
                <div className="banner">
                    <Swiper
                        loop={true}
                        autoplay={true}
                        spaceBetween={20}
                        centeredSlides={true}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img src="./img/banner/ban1.png" alt="" width={'100%'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./img/banner/ban2.png" alt="" width={'100%'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./img/banner/ban3.png" alt="" width={'100%'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./img/banner/ban4.png" alt="" width={'100%'} />
                        </SwiperSlide>
                    </Swiper >
                </div>
            </div>
        </>
    )
}