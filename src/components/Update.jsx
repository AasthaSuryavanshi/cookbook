import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncupdate } from "../store/actions/recipeActions";
const Update = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes && recipes.find((r) => r.id == id);

    const [image, setimage] = useState(recipe.image);
    const [title, settitle] = useState(recipe.title);
    const [description, setdescription] = useState(recipe.description);
    const [ingredients, setingredients] = useState(recipe.ingredients);
    const [instructions, setinstructions] = useState(recipe.instructions);

    const UpdateHandler = (e) => {
        e.preventDefault();
        const updatedRecipe = {
            id: recipe.id,
            title,
            image,
            description,
            ingredients,
            instructions,
        };

        dispatch(asyncupdate(updatedRecipe));

        toast.success("Recipe Updated Successfully!");
        navigate("/recipes");
    };

    return recipe ? (
        <form onSubmit={UpdateHandler} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Update <br /> Existing Recipe
            </h1>
            <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full px-6 py-3 mb-5 text-lg border rounded-md"
                placeholder="Recipe Image URL"
            />
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full px-6 py-3 mb-5 text-lg border rounded-md"
                placeholder="Recipe Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full px-6 py-3 mb-5 text-lg border rounded-md"
                placeholder="recipe description..."
            ></textarea>
            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full px-6 py-3 mb-5 text-lg border rounded-md"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
            ></textarea>
            <textarea
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
                className="w-full px-6 py-3 mb-5 text-lg border rounded-md"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <div className="w-full text-right">
                <button className="px-5 py-2 text-xl text-white duration-200 bg-green-600 rounded-md hover:bg-green-700">
                    Re-Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    ) : (
        <h1 className="w-full mt-10 text-4xl text-center text-green-600">
            Loading Recipe...
        </h1>
    );
};

export default Update;
