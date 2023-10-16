"use client";
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselCard = ({ GroupCarousel }) => {

  const groupedRecipes = Array.from({ length: Math.ceil(GroupCarousel.length / 4) }, (_, index) =>
  GroupCarousel.slice(index * 4, (index + 1) * 4)
  )

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      centerMode={true}
      showStatus={true}
      showIndicators={true}
      showArrows
      className='border-2 border-gray-200 my-10 rounded-lg mx-1'
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute top-1/2 left-10 z-10 text-white text-4xl "
          >
            <FaArrowCircleLeft className='bg-teal-600 rounded-full p-[2px]' />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute top-1/2 right-10 z-10 text-white text-4xl"
          >
            <FaArrowCircleRight className='bg-teal-600 rounded-full p-[2px]' />
          </button>
        )
      }
    >
      {groupedRecipes.map((group) => (
        <div key={Math.floor(Math.random() * 100)} className="p-4 md:p-6 lg:p-8 bg-gradient-to-r from-blue-200 to-orange-200">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 md:gap-4">
            {group.map((recipe) => (
              <div key={recipe.sys.id} className="h-[180px] md:h-[400px] border border-grey-500 p-1 md:p-4 rounded-md shadow-lg">
                <Image
                  width={recipe.fields.cardImage.fields?.file?.details?.image?.width}
                  height={recipe.fields.cardImage.fields?.file?.details?.image?.height}
                  src={`https:${recipe.fields.cardImage.fields.file.url}`}
                  alt={recipe.fields.title}
                  className="object-cover rounded-md shadow-lg"
                />
                <h2 className="text-[12px] md:text-lg font-semibold mt-2 text-left text-orange-600">{recipe.fields.title}</h2>
                <p className="text-gray-600 text-left hidden md:block">{recipe.fields.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCard;