import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncremove } from "../store/actions/recipeActions";
const Details = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes && recipes.find((r) => r.id == id);

    const DeleteHandler = () => {
        dispatch(asyncremove(id));
        toast.success("Recipe Deleted Successfully!");
        navigate("/recipes");
    };

    return recipe ? (
        <div className="w-[80%] m-auto p-5">
            <Link to="/recipes" className="text-3xl ri-arrow-left-line"></Link>
            <div className="flex w-full mt-3 details">
                <div className="dets w-[50%] p-[3%] shadow">
                    <img src={recipe.image} alt="" />
                    <h1 className="text-xl mb-5 mt-[10%] text-center">
                        {recipe.title}
                    </h1>
                    <p className="text-zinc-400">{recipe.description}</p>
                    <div className="flex justify-between px-5 py-10">
                        <Link
                            to={`/update-recipe/${id}`}
                            className="px-5 py-2 text-blue-400 border border-blue-400"
                        >
                            Update
                        </Link>
                        <button
                            onClick={DeleteHandler}
                            className="px-5 py-2 text-red-400 border border-red-400"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                    <h1 className="text-3xl text-green-600 border-b border-green-600">
                        Ingredients
                    </h1>
                    <ul className="p-3 list-disc text-zinc-600 ">
                        {recipe.ingredients.split(",").map((d, i) => (
                            <li className="mb-2 text-sm list-item" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-3xl text-green-600 border-b border-green-600">
                        Instructions
                    </h1>
                    <ul className="p-3 list-decimal text-zinc-600 ">
                        {recipe.instructions.split(".").map((d, i) => (
                            <li className="mb-2 text-sm list-item" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) : (
        <h1 className="w-full mt-10 text-4xl text-center text-green-600">
            Loading Recipe...
        </h1>
    );
};

export default Details;
