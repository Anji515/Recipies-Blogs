import Client from "../Contentful";

export async function fetchRecipes(params) {
  try {
    if (params?.slug) {
      const item = await Client.getEntries({
        content_type: "recipe",
        "fields.slug": params.slug,
      });
      return item;
    } else {
      const recipes = await Client.getEntries({
        content_type: "recipe",
      });
      return recipes;
    }
  } catch (err) {
    console.log("error", err.message);
    return null;
  }
}


export async function getSingleRecipe(params){
    let item;
      try {
        item = await Client.getEntries(
          {
            content_type: "recipe",
            "fields.slug": params.slug,
          },
          {
            next: { revalidate: 0 },
          }
        );
      } catch (err) {
        console.log("error", err.message);
      }
   return item
}
