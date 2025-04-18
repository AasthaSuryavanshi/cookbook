
const Slider2 = () => {
    return (
        <div className="grid w-full grid-cols-2 gap-5 mb-10 px-44">
            <div className="px-20 py-5 flex flex-col w-[37vw] h-[65vh] rounded shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
                <img className="w-[100%] h-[60%] object-cover shadow-sm" src="../src/utils/bluebarry.jpg" alt="" />
                <h1 className="mt-5 text-2xl font-semibold">Blueberry Smoothy Bowl</h1>
                <div className="flex gap-4">
                    <h5 className='my-2 text-xl font-light capitalize'>Sweet and Delecious</h5>
                </div>
                <h1 className="mt-4 text-2xl uppercase border-b border-orange-500 w-fit">SeeMore</h1>
            </div>
            <div className="px-20 py-5 flex flex-col w-[37vw] h-[65vh] rounded shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
                <img className="w-[100%] h-[60%] object-cover shadow-sm" src="../src/utils/vaegies.jpg" alt="" />
                <h1 className="mt-5 text-2xl font-semibold">Qinuoo Salad Bowl</h1>
                <div className="flex gap-4">
                    <h5 className='my-2 text-xl font-light capitalize'>Healthy and tasty</h5>
                </div>
                <h1 className="mt-4 text-2xl uppercase border-b border-orange-500 w-fit">SeeMore</h1>
            </div>
        </div>
    )
}

export default Slider2