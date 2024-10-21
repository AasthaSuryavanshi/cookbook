import { toast } from "react-toastify";
export {} from "../reducers/recipeSlice";

import { load } from "../reducers/recipeSlice";

export const asyncload = () => async (dispatch) => {
    try {
        setTimeout(() => {
            const recipes = JSON.parse(localStorage.getItem("recipes"));
            if (recipes) {
                dispatch(load(recipes));
            } else {
                // Handle case where localStorage data is missing or invalid
                toast.warn("No recipes found in localStorage.");
            }
        }, 10);
    } catch (error) {
        // Handle JSON.parse or any other unexpected errors
        toast.error("Failed to load recipes: " + error.message);
    }
};
export const asyncadd = (recipe) => async (dispatch, getState) => {
    try {
        const { recipes } = getState().recipeReducer;
        localStorage.setItem("recipes", JSON.stringify([...recipes, recipe]));
        dispatch(asyncload());
    } catch (error) {
        toast.error(error);
    }
};

export const asyncremove = (id) => async (dispatch, getState) => {
    try {
        const { recipes } = getState().recipeReducer;
        localStorage.setItem(
            "recipes",
            JSON.stringify(recipes.filter((r) => r.id != id))
        );
        dispatch(asyncload());
    } catch (error) {
        toast.error(error);
    }
};

export const asyncupdate = (updatedRecipe) => async (dispatch, getState) => {
    try {
        const { recipes } = getState().recipeReducer;

        const copyrecipe = [...recipes];
        const index = copyrecipe.findIndex((r) => r.id == updatedRecipe.id);
        copyrecipe[index] = updatedRecipe;
        localStorage.setItem("recipes", JSON.stringify(copyrecipe));

        dispatch(asyncload());
    } catch (error) {
        toast.error(error);
    }
};
