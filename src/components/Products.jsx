import { Link } from "react-router-dom"

const Products = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="grid w-[85%] grid-cols-3 gap-15 px-10">
                <Link
                    to={`/recipes/1`}
                    className="w-[25vw] h-[70vh] flex flex-col rounded text-center p-4 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200"
                >
                    <div>                        
                        <img className="object-contain h-[50vh] w-[90%]" src="../src/utils/food.png" alt="" />
                        <h1 className="mb-6 text-xl text-semibold">Rice & Cracker</h1>
                        <div className="flex justify-between mt-10 text-zinc-400 ">
                            <p className="text-center ">
                                <i className="ri-timer-line"></i>
                            </p>
                            <p className="text-center">
                                <i className="ri-thumb-up-line"></i>
                            </p>
                            <p className="text-center">
                                <i className="ri-share-line"></i>
                            </p>
                        </div>
                    </div>
                </Link>   

                <Link
                    to={`/recipes/1`}
                    className="w-[25vw] h-[70vh] flex flex-col rounded text-center p-4 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200"
                >
                    <div>                        
                        <img className="object-contain h-[50vh] w-[90%]" src="../src/utils/sandwick-removebg-preview.png" alt="" />
                        <h1 className="mb-6 text-xl text-semibold">Sandwick</h1>
                        <div className="flex justify-between mt-10 text-zinc-400 ">
                            <p className="text-center ">
                                <i className="ri-timer-line"></i>
                            </p>
                            <p className="text-center">
                                <i className="ri-thumb-up-line"></i>
                            </p>
                            <p className="text-center">
                                <i className="ri-share-line"></i>
                            </p>
                        </div>
                    </div>
                </Link>   

                <Link
                    to={`/recipes/1`}
                    className="w-[25vw] h-[70vh] flex flex-col rounded text-center p-4 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200"
                >
                    <div>                        
                        <img className="object-contain h-[50vh] w-[90%]" src="../src/utils/chicken-removebg-preview.png" alt="" />
                        <h1 className="mb-6 text-xl text-semibold">Chicken</h1>
                        <div className="flex justify-between mt-10 text-zinc-400 ">
                            <p className="text-center ">
                                <i className="ri-timer-line"></i>
                            </p>
                            <p className="text-center">
                                <i className="ri-thumb-up-line"></i>
                            </p>
                            <p className="text-center">
                                <i className="ri-share-line"></i>
                            </p>
                        </div>
                    </div>
                </Link>       
            </div>
        </div>
    )
}

export default Products