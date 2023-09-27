import Client from "../Contentful"

export const FetchRequest = async()=>{
    const recipes = await Client.getEntries(
        { 
         content_type: "recipe" 
       },
         {
           next: { revalidate: 10 },
         })

         return recipes
}