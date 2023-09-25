'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheckSquare} from "react-icons/fa";
import Loader from "../../components/Loader";
import Client from "@/app/Contentful";

const Page = ({ params }) => {
  
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true)
      try{
        const item = await Client.getEntries(
          {
            content_type: "recipe",
            "fields.slug": params.slug,
          },
          {
            next: { revalidate: 10 } 
          }
        );

        console.log('item',item);
        setRecipe(item?.items[0].fields)
        setLoading(false);
      }catch(e){
       console.log('error',e);
      }
    }
    fetchRecipe();
  },[])


  const { featuredImage, cookingTime, title, ingredients, methode } = recipe;

  console.log('recipe', recipe);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-pink-300 "> 
    { loading ? <Loader /> : (recipe && <div className="w-full p-10 text-center py-20">
      <h1 className="text-4xl font-extrabold text-black mb-6 animate__animated animate__fadeIn animate__delay-1s">
        {title}
      </h1>
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-lg h-96 mb-6">
          {featuredImage?.fields && <Image
            src={`https:${featuredImage?.fields?.file?.url}`}
            width={featuredImage?.fields?.file?.details?.image?.width}
            height={featuredImage?.fields?.file?.details?.image?.height}
            className="object-cover w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 animate__animated animate__fadeIn animate__delay-3s"
          />}
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-lg">
        Takes about <strong>{cookingTime}</strong> minutes to cook
      </p>
      <div className="w-2/5 mt-8 text-left mx-auto text-gray-700 px-10 py-2">
        <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 ease-in-out mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Ingredients
        </button>
        <div className="list-inside list-disc mt-2 ml-4 gap-2">
          {ingredients?.map((ingredient, index) => (
            <Button key={Math.floor(Math.random() * 100)} className="mb-1 mr-2">
              <FaCheckSquare className="rounded-full text-green-500 mr-2" />
              {ingredient.trim()}
            </Button>
          ))}
        </div>
      </div>
      <div className="w-[35%] mt-8 text-left mx-auto text-gray-700 ">
        <Button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 ease-in-out mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Method
        </Button>
        <p className="w-[95%] mx-auto">{methode?.content[0]?.content[1]?.value}</p>
      </div>
    </div>)
    }
    </div>
  );
};

export default Page;
