import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { useRef, useState } from "react";

const testimonials = [
    {
        name: "Nicholas O.",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 4,
        review:
            "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
    },
    {
        name: "Christine M.",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 5,
        review:
            "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
    },
    {
        name: "Heather B.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 3,
        review:
            "If you need help, go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time. He caused me so much anxiety and made my entire treatment hard.",
    },
    {
        name: "Heather B.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 4,
        review:
            "If you need help, go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years...",
    },
];

const Testimonials = () => {
    const swiperRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="container mx-auto py-8 px-5 lg:px-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                    <h3 className="uppercase text-primary text-lg sm:text-xl">Our Client’s</h3>
                    <h2 className="text-3xl sm:text-5xl font-medium">Testimonials</h2>
                </div>
                {/* Navigation Buttons */}
                <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center space-x-4 mt-4 sm:mt-0">
                    <button onClick={() => swiperRef.current?.slidePrev()}>
                        <IoArrowBackCircleOutline size={40} className="text-primary hover:bg-primary hover:rounded-full hover:text-white transition-all" />
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()}>
                        <IoArrowForwardCircleOutline size={40} className="text-primary hover:bg-primary hover:rounded-full hover:text-white transition-all" />
                    </button>
                </div>
            </div>

            {/* Swiper Slider */}
            <div className="relative mt-8">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="overflow-hidden"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`m-6 md:min-h-[26rem] lg:min-h-80 group border border-gray-200 p-6 bg-white rounded-xl shadow-md flex flex-col justify-between transition-all duration-500 hover:scale-105 hover:-rotate-3 ${
                                    hoveredIndex !== null && hoveredIndex !== index ? "lg:opacity-50" : "opacity-100"
                                }`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Star Rating */}
                                <div className="flex justify-start mb-2 text-yellow-500 text-xl">
                                    {"★".repeat(testimonial.rating)}
                                    {"☆".repeat(5 - testimonial.rating)}
                                </div>
                                {/* Review Text */}
                                <p className="text-gray-700 text-lg mb-4 leading-relaxed group-hover:translate-x-2 transition-transform duration-500">
                                    {testimonial.review}
                                </p>
                                {/* Profile */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full border border-gray-300 shadow-sm"
                                    />
                                    <h4 className="font-medium text-xl group-hover:translate-x-2 transition-transform duration-500">
                                        {testimonial.name}
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;


