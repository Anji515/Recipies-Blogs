'use client'
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopCarousel = ({carouselImages}) => {

  return (
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={true}
          showThumbs={false}
          className="w-full shadow-lg"
        >
          {carouselImages?.map((el)=><div key={el.sys.id} className="h-[300px] md:h-[550px] rounded-lg bg-slate-400">
            <Image
              width={el.fields.file.details.image.width}
              height={el.fields.file.details.image.height}
              src={`https:${el.fields.file.url}`}
              alt="Carousel Image 2"
              className="object-cover rounded-lg"
            />                                                                                                                                                                                                                  
          </div>)}
        </Carousel>
  )
}

export default TopCarousel