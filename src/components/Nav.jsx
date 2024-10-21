import { NavLink } from "react-router-dom"
import { MdRestaurantMenu } from "react-icons/md";


const Nav = () => {
    return (        
        <div className="flex items-center justify-between w-full px-10 py-5">
            <img className="w-[5vw] h-[10vh] object-cover" src="./src/utils/logo.jpg" alt="" />
            <div className="flex items-center gap-5">
            <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/'>Home</NavLink>
            <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/about'>about</NavLink>
            <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/contact'>contact</NavLink>
            <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/recipes'>recipes</NavLink>
            </div>
            <MdRestaurantMenu className="text-[3vw]" />
        </div>
    )
}
export default Nav