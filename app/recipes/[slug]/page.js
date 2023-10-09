import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";
import Loader from "../../components/Loader";
import { Suspense } from "react";
import Link from "next/link";
import { fetchRecipes } from "@/app/server/getRecipes";

const Page = async ({ params }) => {

  let item = await fetchRecipes(params)

  const {
    featuredImage,
    cookingTime,
    title,
    ingredients,
    methode,
    rating,
    categories,
  } = item.items[0].fields;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-pink-300 ">
      {!item.items[0].fields && <Loader />}
      <Suspense fallback={<Loader />}>
        {item?.items[0].fields && (
          <div className="w-full p-10 text-center py-20">
            <h1 className="text-4xl font-extrabold text-black mb-6 animate__animated animate__fadeIn animate__delay-1s">
              {title}
            </h1>
            <div className="w-full max-w-2xl mx-auto">
              <div className="relative overflow-hidden rounded-lg h-[600px] w-[100%] mb-6">
                {featuredImage?.fields && (
                  <Image
                    src={`https:${featuredImage?.fields?.file?.url}`}
                    width={featuredImage?.fields?.file?.details?.image?.width}
                    height={featuredImage?.fields?.file?.details?.image?.height}
                    alt={title}
                    className="object-cover w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 animate__animated animate__fadeIn animate__delay-3s"
                  />
                )}
              </div>
              <h1 className="text-violet-900 font-extrabold text-[20px]">
                {new Array(rating).fill(0).map((_, i) => "\u2605")} ({rating})
              </h1>
            </div>
            <p className="mt-4 text-gray-600 text-lg">
              Takes about <strong>{cookingTime}</strong> minutes to cook
            </p>
            <h1 className="text-blue-900 font-semibold text-[18px]"><Link href={'/recipes'}>Back To Recipes</Link></h1>
            <div className="w-2/5 mt-8 text-left mx-auto text-gray-700 px-10 py-2">
              <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 ease-in-out mb-6 animate__animated animate__fadeIn animate__delay-2s">
                Ingredients
              </button>
              <div className="list-inside list-disc mt-2 ml-4 gap-2">
                {ingredients?.map((ingredient, index) => (
                  <Button
                    key={Math.floor(Math.random() * 100)}
                    className="mb-2 mr-2"
                  >
                    <FaCheckSquare className="rounded-full text-green-500 mr-2" />
                    {ingredient.trim()}
                  </Button>
                ))}
              </div>
            </div>

            <div className="w-2/5 mt-8 text-left mx-auto text-gray-700 px-10 py-2">
              <Button className="bg-red-600 text-black hover:bg-red-700 transition duration-300 ease-in-out mb-6 rounded-full">Categories</Button>
              <div className="list-inside list-disc mt-2 ml-4">
                {categories.map((categorie) => (
                  <Button key={categorie} className="bg-gray-400 text-black mb-2 mr-2 hover:bg-gray-500 rounded-3xl">
                    #{categorie}
                  </Button>
                ))}
              </div>
            </div>

            <div className="w-[35%] mt-8 text-left mx-auto text-gray-700 ">
              <Button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 ease-in-out mb-6 animate__animated animate__fadeIn animate__delay-2s">
                Method
              </Button>
              <p className="w-[95%] mx-auto">
                {methode?.content[0]?.content[1]?.value}
              </p>
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Page;
