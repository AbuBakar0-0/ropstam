import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function FeaturedOn() {
    const images = [
        "/assets/slider/ABC.png",
        "/assets/slider/CBS News.png",
        "/assets/slider/FOX.png",
        "/assets/slider/NBC.png",
    ];

    return (
        <div className="container mx-auto py-10 px-5 lg:px-20">
            <div className="w-full flex flex-col space-y-4">
                <h3 className="text-center lg:text-left uppercase text-primary">As Seen</h3>
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
                    <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl font-medium w-full lg:w-1/2">
                        Featured On
                    </h2>
                    <div className="w-full lg:w-1/2">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            loop={true}
                            speed={3000}
                            autoplay={{
                                delay: 30,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            allowTouchMove={false}
                            breakpoints={{
                                320: { slidesPerView: 2 },
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            className="smooth-swiper"
                        >
                            {images.concat(images).map((image, index) => (
                                <SwiperSlide key={index} className="flex justify-center items-center">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="max-h-16 sm:max-h-20 md:max-h-24 max-w-full object-contain"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedOn;
