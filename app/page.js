"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import HeroCard from "./components/HeroCard";
import CarouselCard from "./components/CaroselCard";
import recipes from "./Data/data";

export default function Home() {


  return (
    <div className="row min-h-screen p-2 rounded-lg">
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
          {/* Featured Food Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-4">
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
            <div className="bg-white rounded-lg shadow-md p-4">
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
            <div className="bg-white rounded-lg shadow-md p-4">
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
          </div>

          {/* Welcome Section */}
          <div className="mt-8">
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
        </div>
      </div>
      <CarouselCard recipes={recipes}/>
    </div>
  );
}
