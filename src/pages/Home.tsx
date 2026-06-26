import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import insta1 from "../assets/social/insta1.jpg"
import insta2 from "../assets/social/insta2.jpg"
import insta3 from "../assets/social/insta3.jpg"
import insta4 from "../assets/social/insta4.jpg"
import insta5 from "../assets/social/insta5.jpg"
import insta6 from "../assets/social/insta6.jpg"
import insta7 from "../assets/social/insta7.jpg"
import insta8 from "../assets/social/insta8.jpg"

import star from "../assets/star.png"
import halfstar from "../assets/halfstar.png"

import man from "../assets/man.png"
import { Link } from "react-router-dom"

import womensWatches from "../assets/features/womens-watches.jpg"
import womensShoes from "../assets/features/womens-shoes.jpg"
import womensDresses from "../assets/features/womens-dresses.jpg"
import tops from "../assets/features/tops.jpg"
import sportsAccessories from "../assets/features/sports-accessories.jpg"
import mensShirts from "../assets/features/mens-shirts.jpg"
import groceries from "../assets/features/groceries.jpg"
import furniture from "../assets/features/furniture.jpg"

import banner from "../assets/banner.jpg"

const Home = () => {
    return (
        <div>
            <section className="relative overflow-hidden py-24">
  {/* Background Text */}
  <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[180px] font-black uppercase text-gray-100 select-none pointer-events-none">
    FRESH
  </h1>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Content */}
      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
          New Collection 2026
        </span>

        <h2 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
          Fresh styles for
          <span className="text-blue-600"> every moment.</span>
        </h2>

        <p className="text-gray-500 text-lg leading-8 mb-10">
          Discover premium fashion, accessories, electronics and lifestyle
          essentials curated for everyday living. Crafted with quality,
          designed for comfort, delivered with style.
        </p>

        <div className="flex gap-5">
          <Link to="/products">
            <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition">
              Shop Now →
            </button>
          </Link>

          <button className="px-8 py-4 rounded-full border border-gray-300 hover:border-blue-600 transition">
            Explore
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-16">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">50K+</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-gray-900">1.2K+</h3>
            <p className="text-gray-500">Premium Products</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-gray-900">99%</h3>
            <p className="text-gray-500">Positive Reviews</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center">

        {/* Background Blob */}
        <div className="absolute w-[420px] h-[420px] bg-blue-100 rounded-full blur-3xl"></div>

        {/* Main Image */}
        <img
          src={banner}
          alt=""
          className="relative rounded-3xl shadow-2xl w-[420px] object-cover z-10"
        />

        {/* Floating Card */}
        <div className="absolute -bottom-8 -left-10 bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-5 z-20">
          <p className="text-sm text-gray-500">
            Trending This Week
          </p>

          <h4 className="font-bold text-lg">
            Premium Collection
          </h4>

          <p className="text-blue-600 font-semibold mt-1">
            Up to 50% OFF
          </p>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-8 -right-6 bg-black text-white rounded-full px-6 py-3 shadow-lg z-20">
          ⭐ Best Seller
        </div>

      </div>

    </div>
  </div>
</section>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center">
                    <h5 className="text-[#133a7e] text-center text-2xl mb-3">INSTAGRAM</h5>
                    <h2 className="text-[#1c1c1c] text-center text-6xl mb-10">MINIMOG.BAGS</h2>
                </div>
                <div className="flex items-center justify-around gap-10">
                    <div className="flex flex-col items-start">
                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        <h2 className="text-xl uppercase font-bold mt-2">New Arrival</h2>
                        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus animi
                            beatae nam! Lorem ipsum dolor sit amet?</p>
                        <Link to="/products">
                            <button className="btn btn-primary mt-5">View More</button>
                        </Link>
                    </div>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={15}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                            slidesPerView: 1,
                            },
                            640: {
                            slidesPerView: 2,
                            },
                            1024: {
                            slidesPerView: 4,
                            },
                        }}
                        >
                        <SwiperSlide>
                            <img src={womensWatches} alt="Women's Watches" className="w-full h-64 object-cover rounded-xl" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={womensDresses} alt="Women's Dresses" className="w-full h-64 object-cover rounded-xl" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={womensShoes} alt="Women's Shoes" className="w-full h-64 object-cover rounded-xl"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={tops} alt="Tops" className="w-full h-64 object-cover rounded-xl" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={sportsAccessories} alt="Sports Accessories" className="w-full h-64 object-cover rounded-xl" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={mensShirts} alt="Men's Shirts" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={groceries} alt="Groceries" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={furniture} alt="Furniture" />
                        </SwiperSlide>
                        </Swiper>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center">
                    <h5 className="text-[#133a7e] text-center text-2xl mb-3">INSTAGRAM</h5>
                    <h2 className="text-[#1c1c1c] text-center text-6xl mb-10">MINIMOG.BAGS</h2>
                </div>
                <div className="flex items-center flex-wrap justify-around gap-10">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="py-10">
                                <div className="flex items-center justify-center mb-3">
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                </div>
                                <p className="text-lg mb-5 text-[#1c1c1c] w-9/12 mx-auto text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Iure esse aut quae quam obcaecati ex officiis doloremque facere officia aspernatur.
                                    Modi assumenda voluptatibus totam adipisci expedita architecto porro nostrum
                                    voluptate?
                                </p>
                                <div className="flex items-start justify-center gap-5">
                                    <img src={man} alt="review-user" className="w-15 h-15" />
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-5 font-medium text-[#1c1c1c] text-center">Lorem ipsum</h3>
                                        <p>Service</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="py-10">
                                <div className="flex items-center justify-center mb-3">
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={halfstar} alt="halfstar" className="w-4 h-4 mr-1" />
                                </div>
                                <p className="text-lg mb-5 text-[#1c1c1c] w-9/12 mx-auto text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Iure esse aut quae quam obcaecati ex officiis doloremque facere officia aspernatur.
                                    Modi assumenda voluptatibus totam adipisci expedita architecto porro nostrum
                                    voluptate?
                                </p>
                                <div className="flex items-start justify-center gap-5">
                                    <img src={man} alt="review-user" className="w-15 h-15" />
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-5 font-medium text-[#1c1c1c] text-center">Lorem ipsum</h3>
                                        <p>Service</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className="py-10">
                                <div className="flex items-center justify-center mb-3">
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                </div>
                                <p className="text-lg mb-5 text-[#1c1c1c] w-9/12 mx-auto text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Iure esse aut quae quam obcaecati ex officiis doloremque facere officia aspernatur.
                                    Modi assumenda voluptatibus totam adipisci expedita architecto porro nostrum
                                    voluptate?
                                </p>
                                <div className="flex items-start justify-center gap-5">
                                    <img src={man} alt="review-user" className="w-15 h-15" />
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-5 font-medium text-[#1c1c1c] text-center">Lorem ipsum</h3>
                                        <p>Service</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <div className="py-10">
                                <div className="flex items-center justify-center mb-3">
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                    <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                </div>
                                <p className="text-lg mb-5 text-[#1c1c1c] w-9/12 mx-auto text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Iure esse aut quae quam obcaecati ex officiis doloremque facere officia aspernatur.
                                    Modi assumenda voluptatibus totam adipisci expedita architecto porro nostrum
                                    voluptate?
                                </p>
                                <div className="flex items-start justify-center gap-5">
                                    <img src={man} alt="review-user" className="w-15 h-15" />
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-5 font-medium text-[#1c1c1c] text-center">Lorem ipsum</h3>
                                        <p>Service</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center">
                    <h5 className="text-[#133a7e] text-center text-2xl mb-3">INSTAGRAM</h5>
                    <h2 className="text-[#1c1c1c] text-center text-6xl mb-10">MINIMOG.BAGS</h2>
                </div>
                <div className="flex items-center flex-wrap justify-around gap-10">
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta1} className="w-70 h-50 object-cover rounded-lg object-center transition-transform 
                    duration-300 hover:scale-110" alt="Instagram" />
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta2} className="w-70 h-50 object-cover rounded-lg object-center transition-transform 
                    duration-300 hover:scale-110" alt="Instagram" />
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta3} className="w-70 h-50 object-cover rounded-lg object-center transition-transform 
                    duration-300 hover:scale-110" alt="Instagram" />
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta4} className="w-70 h-50 object-cover rounded-lg object-center transition-transform 
                    duration-300 hover:scale-110" alt="Instagram" />
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta5} className="w-70 h-50 object-cover rounded-lg object-center transition-transform 
                    duration-300 hover:scale-110" alt="Instagram" />
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta6} className="w-70 h-50 object-cover rounded-lg object-center transition-transform 
                    duration-300 hover:scale-110" alt="Instagram" />
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta7} className="w-70 h-50 object-cover rounded-lg object-center transition-transform 
                    duration-300 hover:scale-110" alt="Instagram" />
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta8} className="w-70 h-50 object-cover rounded-lg object-center transition-transform 
                    duration-300 hover:scale-110" alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;