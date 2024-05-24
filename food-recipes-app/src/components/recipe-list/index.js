import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "lucide-react"


export default function RecipeList({ recipeList }) {
    //console.log(recipeList)
    return <>
        <div>
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        recipeList && recipeList.legth > 0 ?
                            recipeList.map((recipe)=>{
                                return <Link></Link>
                            })
                        : null 
                    }
                </div>
            </div>
        </div>
    </>
}