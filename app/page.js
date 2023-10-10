import Link from "next/link";
import HeroCard from "../components/HeroCard";
import TopCarousel from "../components/TopCarousel";
import { HOMEPAGE_RECIPE_FEATURED, RCEIPES_CAROUSEL } from "../constants/Data";
import Image from "next/image";
import CarouselCard from "../components/CaroselCard";

export default async function Home() {
  return (
    <div className="row min-h-screen p-2 rounded-lg bg-gradient-to-r from-blue-300 to-pink-300">
      <HeroCard />
      <TopCarousel />

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
          {HOMEPAGE_RECIPE_FEATURED?.map((items) => (
            <div
              key={items.id}
              className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-r from-red-200 to-gray-300"
            >
              <Image
                width={400}
                height={400}
                src={items.image_url}
                alt="Food Image 1"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{items.title}</h2>
              <p className="text-gray-600">{items.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-8">
        {/* Categories Section */}
        <div className="mt-8 py-10">
          <h1 className="text-4xl font-bold mb-4">Categories</h1>
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
