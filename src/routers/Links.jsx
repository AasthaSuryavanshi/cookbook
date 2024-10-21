import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import About from "../components/About";
import Contact from "../components/Contact";
import Update from "../components/Update";
import Recipe from "../components/Recipes";
import Details from "../components/Details";
import Create from "../components/Create";

const Links = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/create-recipe" element={<Create />} />
            <Route path="/update-recipe/:id" element={<Update />} />
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/recipes/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default Links;