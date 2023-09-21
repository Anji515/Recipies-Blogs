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

  const { featuredImage, cookingTime, title, ingredients, methode } = item.items[0].fields;

  console.log('Methode', methode.content[0].content[1].value)

  // console.log('fields',item.items[0].fields.methode.content[0].content[1].value)
  // console.log("fields", item.items[0].fields.featuredImage.fields.file.url);
  // console.log("fields", item.items[0].fields.featuredImage.fields.file.details.image.width);

  return (
    <div>
      <h1 className="text-orange-500 font-black text-4xl	">{title}</h1>
      <br />
      <button className="border-red-600">{ingredients}</button>
      <Image
        src={"https:" + featuredImage.fields.file.url}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
      />
      <br />
      <p>Take about {cookingTime} minutes to cook</p>
      <br />
      <p>
        <strong>{title+' '}</strong>
        {methode.content[0].content[1].value}
      </p>
    </div>
  );
};

export default page;
