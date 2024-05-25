import Link from "next/link";

async function getRecipeDetails(currentRecipeId) {
  const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
  const results = await apiResponse.json();
  return results;
}

export default async function RecipeDetails({ params }) {
  const recipeDetails = await getRecipeDetails(params?.details);
  //console.log(recipeDetails);

  return <div className=" h-full md:h-screen  w-screen p-5 bg-blue-200 flex flex-row sm:flex-col flex-wrap">
    <div className="flex gap-5 text-xl font-bold my-5 items-center justify-center">
      <h1>Recipe Details</h1>
      <Link className="bg-gray-400 text-white p-2 rounded-sm " href={'/recipe-list'}>Go back</Link>
    </div>

    <div className="flex gap-5 justify-around flex-wrap text-center">
      <div className="">
        <p className="font-bold">{recipeDetails.name}</p>
        <img className="h-96 w-96" src={recipeDetails.image} alt={recipeDetails.id} />
      </div>

      <div>
        <p className="font-bold">MealType : {recipeDetails.mealType[0]}</p>
        <p className="font-bold">Cusine : {recipeDetails.cuisine}</p>
      </div>

      <div>
        <p className="font-bold">Ingredients :- </p>
        {
          recipeDetails.ingredients.map(ingredient => <li key={ingredient} className=" text-start">{ingredient}</li>)
        }
      </div>

    </div>
  </div>
}
