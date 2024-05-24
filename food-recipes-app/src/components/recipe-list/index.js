import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export default function RecipeList({ recipeList }) {
  //console.log(recipeList);
  return (
    <>
      <div>
        <div className=" p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
          <div className="flex gap-5 text-xl font-bold my-5 items-center justify-center">
            <h2 className="">Recipes</h2>
            <Link className="bg-gray-400 text-white p-2 rounded-sm" href={'/'}>Go home</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipeList && recipeList.length > 0
              ? recipeList.map((recipe) => {
                return (
                  <Link href={`recipe-list/${recipe.id}`}>
                    <Card>
                      <CardContent className="bg-white rounded-sm overflow-hidden shadow-md cursor-pointer hover:scale-90 transition-all">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                          <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="text-center mt-3 font-bold text-gray-400">
                          <p>{recipe.name}</p>
                          <p>Rating : {recipe.rating}</p>
                          <p>{recipe.cuisine}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
