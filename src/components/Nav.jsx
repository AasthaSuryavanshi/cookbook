import { NavLink } from "react-router-dom"
import { MdRestaurantMenu } from "react-icons/md";


const Nav = () => {
    return (        
        <div className="flex items-center justify-between w-full px-10 py-5">
            <img className="w-[5vw] h-[10vh] object-cover" src="./src/utils/logo.jpg" alt="" />
            <div className="flex items-center gap-10 font-semibold">
            <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/'>Home</NavLink>
            <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/about'>About</NavLink>
            <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/contact'>Contact</NavLink>
            <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/recipes'>Recipes</NavLink>
            </div>
            <MdRestaurantMenu className="text-[3vw]" />
        </div>
    )
}
export default Nav