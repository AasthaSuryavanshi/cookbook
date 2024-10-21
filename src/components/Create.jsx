import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { asyncadd } from "../store/actions/recipeActions";
import { useDispatch } from "react-redux";

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [ingredients, setingredients] = useState("");
    const [instructions, setinstructions] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: nanoid(),
            image,
            title,
            description,
            ingredients,
            instructions,
        };
        dispatch(asyncadd(newRecipe));
        toast.success("Recipe Created Successfully!");
        navigate("/recipes");
    };
    return (
        <form onSubmit={SubmitHandler} className="w-[70%] m-auto  pb-5">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> New Recipe
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
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;
