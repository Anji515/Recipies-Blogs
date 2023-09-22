import { createClient } from "contentful";
import Image from "next/image";
import React from "react";
const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: "xFc7VZCJl0DmbH33twQ0PMlL-1MFQgcl6KP9ynIU-gs",
});

export const page = async ({ params }) => {
  const item = await client.getEntries(
    {
      content_type: "recipe",
      "fields.slug": params.slug,
    },
    {
      next: { revalidate: 10 },
    }
  );

  const { featuredImage, cookingTime, title, ingredients, methode } =
    item.items[0].fields;

  // console.log("Methode", ingredients);

  // console.log('fields',item.items[0].fields.methode.content[0].content[1].value)
  // console.log("fields", item.items[0].fields.featuredImage.fields.file.url);
  // console.log("fields", item.items[0].fields.featuredImage.fields.file.details.image.width);

  return (
    <div className="p-10 text-center">
  <h1 className="text-4xl font-extrabold text-orange-500 mb-6 animate__animated animate__fadeIn animate__delay-1s">
    {title}
  </h1>
  <div className="w-full max-w-2xl mx-auto">
    <div className="relative overflow-hidden rounded-lg h-96 mb-6">
      <Image
        src={"https:" + featuredImage.fields.file.url}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
        className="object-cover w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 animate__animated animate__fadeIn animate__delay-3s"
      />
    </div>
  </div>
  <p className="mt-4 text-gray-600 text-lg">
    Takes about {cookingTime} minutes to cook
  </p>
  <div className="w-2/5 mt-8 text-left mx-auto text-gray-700 border-2 border-red-400 px-10 py-2">
  <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 ease-in-out mb-6 animate__animated animate__fadeIn animate__delay-2s">
    Ingredients
  </button>
    <ul className="list-inside list-disc mt-2 ml-4">
      {ingredients?.map((ingredient, index) => (
        <li key={index} className="mb-1">
          {ingredient.trim()}
        </li>
      ))}
    </ul>
  </div>
  <div className="mt-8 text-left mx-auto text-gray-700">
    <strong className="text-blue-600 font-semibold">Method:</strong>{" "}
    {methode.content[0].content[1].value}
  </div>
</div>

  );
};

export default page;
