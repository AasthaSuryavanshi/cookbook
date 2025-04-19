import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from "framer-motion";
import food from "../utils/food.png";

const Slider = () => {
    return (
        <div className="w-full h-[70vh] bg-zinc-200 flex">
            <div className="w-[15vw] h-full bg-white flex items-center justify-center">
                <LiaArrowCircleLeftSolid className="text-[4vw] font-thin text-zinc-700" />
            </div>

            <div className="w-[70vw] h-full flex">
                <div className="h-full w-[40vw] flex items-center justify-center">
                    <div className="flex flex-col gap-5 text-left">
                        <h5 className="font-medium leading-3 tracking-tight text-black">Your Personal Kitchen, Full of Delicious Recipes!</h5>
                        {/* <img className=" w-[90 px] h-[90px] " src="../src/utils/bonna.png" alt="" /> */}
                        <h1 className="font-bold text-[2vw] ">Unleash Your Inner <br /> Chef with CookBook</h1>
                        <h3 className="flex items-center px-6 py-3 capitalize rounded bg-[#F8AB32] w-fit text-nowrap">View more! <FaArrowRightLong className="ml-4 shrink-0" /></h3>
                    </div>
                </div>
                <div className="h-[70vh] w-[60vw] flex items-center justify-center relative overflow-hidden">
                    <img src={food} alt="" className="object-cover scale-[1.1]" />
                    <motion.img initial={{X:0,y:0}} animate={{x:"-10%",y:"10%"}} transition={{ease: "smooth",repeat: Infinity,duration:2}} src="../src/utils/chopstik.png" alt="" className="absolute top-[8%] h-[30vh] right-10 object-cover rotate-[10deg]" />
                    <motion.img initial={{X:0,y:0}} animate={{x:"-10%",y:"-10%"}} transition={{ease: "smooth",repeat: Infinity,duration:2}} src="../src/utils/cupcake.png" alt="" className="absolute top-[55%] h-[35vh] right-20 object-cover rotate-[5deg]" />
                    <motion.img initial={{X:0,y:0}} animate={{x:"10%",y:"-10%"}} transition={{ease: "smooth",repeat: Infinity,duration:2}} src="../src/utils/words.png" alt="" className="absolute -top-[10%] left-10 object-cover h-[50vh] brightness-[1.1] -rotate-[8deg]" />
                    <motion.img initial={{X:0,y:0}} animate={{x:"10%",y:"-10%"}} transition={{ease: "smooth",repeat: Infinity,duration:2}} src="../src/utils/coocki.png" alt="" className="absolute top-[50%] left-0 object-cover h-[50vh] brightness-[0.8]" />
                </div>
            </div>

            <div className="w-[15vw] h-full bg-white flex items-center justify-center">
                <LiaArrowCircleRightSolid className="text-[4vw] font-thin text-zinc-700" />
            </div>
        </div>
    )
}

export default Slider