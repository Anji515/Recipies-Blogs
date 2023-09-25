import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselCard = ({ recipes }) => {

  const groupedRecipes = [];
  for (let i = 0; i < recipes.length; i += 4) {
    groupedRecipes.push(recipes.slice(i, i + 4));
  }

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
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              zIndex: '2',
              fontSize: '38px',
              color: 'white',
            }}
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
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              zIndex: '2',
              fontSize: '38px',
              color: 'white',
            }}
          >
            <FaArrowCircleRight className='bg-teal-600 rounded-full p-[2px]' />
          </button>
        )
      }
    >
      {groupedRecipes.map((group) => (
        <div key={Math.floor(Math.random() * 100)} className="p-4 md:p-6 lg:p-8 bg-gradient-to-r from-blue-200 to-orange-200">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 md:gap-4">
            {group.map((recipe, index) => (
              <div key={recipe.id} className="h-[180px] md:h-[400px] border border-grey-500 p-1 md:p-4 rounded-md shadow-lg">
                <Image
                  width={400}
                  height={350}
                  src={recipe.imageSrc}
                  alt={recipe.title}
                  className="w-[100%] md:w-full h-[100px] md:h-[250px] object-cover rounded-md shadow-lg"
                />
                <h2 className="text-[12px] md:text-lg font-semibold mt-2 text-left text-orange-600">{recipe.title}</h2>
                <p className="text-gray-600 text-left hidden md:block">{recipe.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCard;