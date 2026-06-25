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


const Home = () => {
    return (
        <div>

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

                    <div className="carousel carousel-end rounded-box gap-3">
                        <div className="carousel-item">
                            <img src={womensWatches} alt="womensWatches" />
                        </div>
                        <div className="carousel-item">
                            <img
                            src={womensDresses}
                            alt="womensDresses" />
                        </div>
                        <div className="carousel-item">
                            <img
                            src={womensShoes}
                            alt="womensShoes" />
                        </div>
                        <div className="carousel-item">
                            <img
                            src={tops}
                            alt="tops" />
                        </div>
                        <div className="carousel-item">
                            <img src={sportsAccessories} alt="sportsAccessories" />
                        </div>
                        <div className="carousel-item">
                            <img src={mensShirts} alt="MensShirts" />
                        </div>
                        <div className="carousel-item">
                            <img
                            src={groceries}
                            alt="Groceries" />
                        </div>
                         <div className="carousel-item">
                            <img
                            src={furniture}
                            alt="Furniture" />
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