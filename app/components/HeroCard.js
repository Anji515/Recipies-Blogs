import React from 'react';

const HeroCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-red-400 text-white p-10 rounded-lg shadow-lg mx-auto mb-5">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col m-auto md:flex-row items-center content-center justify-center space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold">Discover the Art of Cooking</h1>
            <p className="text-lg mt-4">
              "Cooking is love made visible." <br /> - Anonymous
            </p>
            <p className="text-lg mt-4">
              Explore a world of delicious recipes and culinary creativity with our app.
            </p>
            <button className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 hover:text-blue-800 rounded-lg px-4 py-2 mt-6 font-semibold">
              Learn More
            </button>
          </div>
          <div className="flex w-full md:w-2/5 mx-auto justify-center items-center ">
            <img
              src="https://demo.wpthemego.com/themes/sw_appetit/wp-content/uploads/2018/04/7.png"
              alt="Hero Image"
              className="animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
