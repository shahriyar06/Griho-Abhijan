import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AOS  from 'aos';
import 'aos/dist/aos.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <div className='' data-aos="fade-down" data-aos-duration="2500">
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-max"
                style={{ height: "600px" }}
            >

                <SwiperSlide className='bg-banner-chittagong h-full object-cover bg-cover'>
                    <div className='w-10/12 mx-auto p-4'>
                        <h1 className='w-2/3 text-[#FFFFFF]  text-center text-6xl font-bold mx-auto mt-28'>Discover a place you will love to live..</h1>
                        <p className='w-10/12 text-[#FFFFFF]  text-center text-2xl font-medium mx-auto mt-5'>Helping people to find their perfect fit.</p>
                        <div className='w-7/12 mx-auto  mt-10'>    
                            <label className="input rounded-full flex items-center gap-2 h-14 ">
                                <input  type="text" className="grow rounded-full" placeholder="Search here anything" />
                                <button  className="btn bg-[#797DFC] text-[#FFFFFF] rounded-full px-6 border-[#797DFC] text-xl  ">Search</button>
                            </label>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-banner-dhaka h-full object-cover bg-cover'>
                    <div className='w-10/12 mx-auto p-4'>
                        <h1 className='w-2/3 text-[#09090b]  text-center text-6xl font-bold mx-auto mt-28'>Discover a place you will love to live..</h1>
                        <p className='w-10/12 text-[#09090b]  text-center text-2xl font-medium mx-auto mt-5'>Helping people to find their perfect fit.</p>
                        <div className='w-7/12 mx-auto  mt-10'>    
                            <label className="input rounded-full flex items-center gap-2 h-14 ">
                                <input  type="text" className="grow rounded-full" placeholder="Search here anything" />
                                <button  className="btn bg-[#797DFC] text-[#FFFFFF] rounded-full px-6 border-[#797DFC] text-xl  ">Search</button>
                            </label>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-banner-motijil h-full object-cover bg-cover'>
                    <div className='w-10/12 mx-auto p-4'>
                        <h1 className='w-2/3 text-[#000000]  text-center text-6xl font-bold mx-auto mt-28'>Discover a place you will love to live..</h1>
                        <p className='w-10/12 text-[#000000]  text-center text-2xl font-bold mx-auto mt-5'>Helping people to find their perfect fit.</p>
                        <div className='w-7/12 mx-auto  mt-10'>    
                            <label className="input rounded-full flex items-center gap-2 h-14 ">
                                <input  type="text" className="grow rounded-full" placeholder="Search here anything" />
                                <button  className="btn bg-[#797DFC] text-[#FFFFFF] rounded-full px-6 border-[#797DFC] text-xl  ">Search</button>
                            </label>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;