import Link from "next/link";
import HeroCard from "../components/HeroCard";
import TopCarousel from "../components/TopCarousel";
import CarouselCard from "../components/CaroselCard";
import { fetchHomePageCards, fetchHomePageData } from "../server/getRecipes";
import FeaturedCards from "@components/FeaturedCards";

export default async function Home() {

   const carousel = await fetchHomePageData()
  //  console.log(carousel.items[0].fields.carouselImages,'carousel')
   const {carouselImages}=carousel.items[0].fields

   const CarouselCards =await fetchHomePageCards()

   const FeaturedGridImages=CarouselCards.items.slice(-6)
   const GroupCarousel=CarouselCards.items.slice(0,8)


  return (
    <div className="row min-h-screen p-2 rounded-lg bg-gradient-to-r from-blue-300 to-pink-300">
      <HeroCard />
      <TopCarousel carouselImages={carouselImages}/>

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
        <FeaturedCards FeaturedGridImages={FeaturedGridImages}/>

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

      <CarouselCard GroupCarousel={GroupCarousel} />
    </div>
  );
}
