'use client'
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopCarousel = () => {
  return (
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={true}
          showThumbs={false}
          className="w-full shadow-lg"
        >
          <div className="h-96 md:h-96 rounded-lg bg-slate-400">
            <Image
              width={400}
              height={400}
              src="https://wallpapers.com/images/featured/burrito-v4i6nj2atgivsstd.jpg"
              alt="Carousel Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-96 md:h-96 rounded-lg bg-slate-400">
            <Image
              width={400}
              height={400}
              src="https://wallpapers.com/images/hd/italian-food-vegetables-pizza-3e0s2waqcquftbc8.jpg"
              alt="Carousel Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-96 md:h-96 rounded-lg bg-slate-400">
            <Image
              width={400}
              height={400}
              src="https://wallpapers.com/images/featured/food-ccsaubvss63lkcyb.jpg"
              alt="Carousel Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </Carousel>
  )
}

export default TopCarousel