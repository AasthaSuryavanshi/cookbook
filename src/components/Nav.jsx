import { Link } from "react-router-dom"
import { MdRestaurantMenu } from "react-icons/md";


const Nav = () => {
    return (        
        <div className="flex items-center justify-between w-full px-10 py-5">
            <img className="w-[5vw] h-[10vh] object-cover" src="./src/utils/logo.jpg" alt="" />
            <div className="flex items-center gap-5">
                <Link to="/" className="font-semibold duration-200 hover:text-zinc-500">Home</Link>
                <Link to="/about" className="font-semibold duration-200 hover:text-zinc-500">About</Link>
                <Link to="/create" className="font-semibold duration-200 hover:text-zinc-500">Create</Link>
                <Link to="/recipes" className="font-semibold duration-200 hover:text-zinc-500">Recipes</Link>
            </div>
            <MdRestaurantMenu className="text-[3vw]" />
        </div>
    )
}

export default Nav