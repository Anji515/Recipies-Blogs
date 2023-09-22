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
            // title={label}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              zIndex: '2',
              fontSize:'38px',
              color:'teal'
            }}
          >
            <FaArrowCircleLeft/>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            // title={label}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              zIndex: '2',
              fontSize:'38px',
              color:'teal'
            }}
          >
            <FaArrowCircleRight/>
          </button>
        )
      }
    >
      {groupedRecipes.map((group) => (
        <div key={Math.floor(Math.random() * 100)} className="p-20 bg-gray-300 h-[580px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {group.map((recipe, index) => (
              <div key={recipe.id} className="h-[400px] border border-grey-500 p-4 rounded-md shadow-lg">
                <img
                  src={recipe.imageSrc}
                  alt={recipe.title}
                  className="w-3/5 h-[250px] rounded-md shadow-lg"
                />
                <h2 className="text-lg font-semibold mt-2 text-left text-orange-600">{recipe.title}</h2>
                <p className="text-gray-600 text-left">{recipe.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCard;