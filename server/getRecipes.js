import Client from "../utils/Contentful";

export async function fetchRecipes(params) {
  try {
    if (params?.slug) {
      const item = await Client.getEntries({
        content_type: "recipe",
        "fields.slug": params.slug,
      },{
        next: {revalidate:1},
        fallback:true
      });
      return item;
    } else {
      const recipes = await Client.getEntries({
        content_type: "recipe",
      },{
        next: {revalidate:1},
        fallback:true
      });
      return recipes;
    }
  } catch (err) {
    console.log("error", err.message);
    return null;
  }
}

export async function fetchHomePageData(params) {
  try {
      const recipes = await Client.getEntries({
        content_type: "carousel",
      },{
        next: {revalidate:1},
        fallback:true
      });
      return recipes;

  } catch (err) {
    console.log("error", err.message);
    return null;
  }
}


export async function fetchHomePageCards(params) {
  try {
      const recipes = await Client.getEntries({
        content_type: "homePageCards",
      },{
        next: {revalidate:1},
        fallback:true
      });
      return recipes;

  } catch (err) {
    console.log("error", err.message);
    return null;
  }
}