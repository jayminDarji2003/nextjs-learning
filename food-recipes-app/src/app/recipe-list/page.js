import RecipeList from "@/components/recipe-list";

async function fetchRecipes() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const recipes = await apiResponse.json();
        return recipes;
    } catch (e) {
        throw new Error(e);
    }
}

export default async function Recipe() {
    const recipeList = await fetchRecipes();
    return <RecipeList recipeList={recipeList.recipes} />
}