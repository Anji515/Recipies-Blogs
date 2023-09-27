"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import HeroCard from "./components/HeroCard";
import CarouselCard from "./components/CaroselCard";
import { HOMEPAGE_RECIPE_FEATURED, RCEIPES_CAROUSEL } from "./constants/Data";

export default function Home() {
  
  // console.log('fetched data',recipes.items)

  return (
    <div className="row min-h-screen p-2 rounded-lg bg-gradient-to-r from-blue-300 to-pink-300">
      <HeroCard />
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={true}
          className="w-full shadow-lg"
        >
          <div className="h-96 md:h-96 rounded-lg bg-slate-400">
            <img
              src="https://wallpapers.com/images/featured/burrito-v4i6nj2atgivsstd.jpg"
              alt="Carousel Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-96 md:h-96 rounded-lg bg-slate-400">
            <img
              src="https://wallpapers.com/images/hd/italian-food-vegetables-pizza-3e0s2waqcquftbc8.jpg"
              alt="Carousel Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-96 md:h-96 rounded-lg bg-slate-400">
            <img
              src="https://wallpapers.com/images/featured/food-ccsaubvss63lkcyb.jpg"
              alt="Carousel Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </Carousel>
        {
          // recipes.items.map((item)=>(
          //   <div key={item.id}>{item.fields.categories.map((el)=><li>{el}</li>)}</div>
          // ))
        }

        <div className="container mx-auto mt-8">
          {/* Welcome Section */}
          <div className="mt-8 py-10">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Our Recipe Blog
            </h1>
            <p className="text-lg">
              Discover a wide range of delicious recipes from around the world.
              Whether you're a seasoned chef or just starting out, we have
              something for everyone.
            </p>
            <Link href="/recipes">
              <p className="text-blue-600 hover:underline mt-2 block">
                Explore Recipes
              </p>
            </Link>
          </div>

          {/* Featured Food Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards */}
            {HOMEPAGE_RECIPE_FEATURED?.map((items)=>(
              <div key={items.id} className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-r from-red-200 to-gray-300">
              <img
                src={items.image_url}
                alt="Food Image 1"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">
                {items.title}
              </h2>
              <p className="text-gray-600">
                {items.description}
              </p>
            </div>
            )) }             
          </div>
        </div>
      </div>

        <div className="container mx-auto mt-8">
          {/* Categories Section */}
          <div className="mt-8 py-10">
            <h1 className="text-4xl font-bold mb-4">
              Categories
            </h1>
            <p className="text-lg">
              Discover a wide range of delicious recipes from around the world.
              Whether you're a seasoned chef or just starting out, we have
              something for everyone.
            </p>
            <Link href="/recipes">
              <p className="text-blue-600 hover:underline mt-2 block">
                Explore Recipes
              </p>
            </Link>
          </div>
        </div>

      <CarouselCard recipes={RCEIPES_CAROUSEL} />
    </div>
  );
}
