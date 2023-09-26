'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import HeroCard from "./components/HeroCard";
import CarouselCard from "./components/CaroselCard";
import recipes from "./Data/data";

export default function Home() {
  
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
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-r from-red-200 to-gray-300">
              <img
                src="https://media.istockphoto.com/id/915352850/photo/close-up-of-a-delicious-bagel-with-egg-bacon-and-vegetables.jpg?s=2048x2048&w=is&k=20&c=8pWB7PF9kEPB1JS5QiCbjdulliboC7bjMjuAR10hRew="
                alt="Food Image 1"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">
                Delicious Bagel With Egg
              </h2>
              <p className="text-gray-600">
                Try our mouthwatering Delicious Bagel With Egg recipes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-r from-red-200 to-gray-300">
              <img
                src="https://www.foodiesfeed.com/wp-content/uploads/2023/04/open-sandwich-with-salmon-cream-avocado.jpg"
                alt="Food Image 2"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">Open Sandwich</h2>
              <p className="text-gray-600">
                Explore our Open Sandwich recipes for a delightful experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-r from-red-200 to-gray-300">
              <img
                src="https://www.foodiesfeed.com/wp-content/uploads/2023/05/avocado-egg-open-sandwich.jpg"
                alt="Food Image 3"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">
                Avocado Egg Open Sandwich
              </h2>
              <p className="text-gray-600">
                Indulge in our Avocado Egg Open Sandwich creations.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-r from-red-200 to-gray-300">
              <img
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/8/1/0/FNK_KUNG-PAO-CAULIFLOWER-H_s4x3.jpg.rend.hgtvcom.966.773.suffix/1533148371584.jpeg"
                alt="Kung Pao Cauliflower"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">
              Kung Pao Cauliflower
              </h2>
              <p className="text-gray-600">
              Explore in our Kung Pao Cauliflower veg recipe experience.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-r from-red-200 to-gray-300">
              <img
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.966.773.suffix/1615916524567.jpeg"
                alt="Pasta Recipe"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">Pasta Recipe</h2>
              <p className="text-gray-600">
                Open Our Best Pasta Recipes for a delicious taste.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-r from-red-200 to-gray-300">
              <img
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/05/07/0/FNK_SALAD_STUFFED_PEPPERS_H_f_s4x3.jpg.rend.hgtvcom.826.620.suffix/1620410536567.jpeg"
                alt="Salad-Stuffed Peppers"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">
                 Salad-Stuffed Peppers
              </h2>
              <p className="text-gray-600">
              Explore in our Salad-Stuffed Peppers creations.
              </p>
            </div>


          </div>

        </div>
      </div>

      
      <CarouselCard recipes={recipes}/>
    </div>
  );
}
