import bgimage from "../src/utils/bg-img-homeb.jpg";
const Bgimg = () => {
    return (
        <div className="w-full h-[70vh] mt-20 border border-zinc-100 relative">
            <img className="object-cover w-full h-full" src={bgimage} alt="" />
            <div className="w-[38vw] h-[59vh] bg-cyan-50 text-center flex flex-col gap-7 py-16 items-center px-10 rounded absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <h4 className="text-xl font-semibold tracking-tight capitalize border-b-2 border-orange-500 w-fit">best seller</h4>
                <h2 className="my-2 text-5xl font-semibold tracking-wide capitalize">Panner Kulche</h2>
                <p className="mb-2 text-xl font-medium tracking-wide">One bite of this Paneer Kulcha, and you're hooked for life!</p>
                <button className="py-5 font-semibold capitalize bg-orange-400 rounded px-14">Taste Now</button>
            </div>
        </div>
    )
}

export default Bgimg