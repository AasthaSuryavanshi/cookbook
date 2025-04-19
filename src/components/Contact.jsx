import layer1 from "../public/images/Layer 1.png";
const Contact = () => {
    return (
        <>
            <div className='flex w-full h-[85vh]  px-12'>
                <div className="w-[70%] m-auto mt-[10%] p-10 bg-[#f3ecea] rounded-lg">
                    <h1 className="text-7xl mt-5 font-extrabold text-[#d8734e] mb-[5%]">
                        DO YOU WANT TO REACH US ?
                    </h1>
                    <button className="rounded-md text-md bg-[#d8734e] text-white py-2 px-5 hover:bg-[#a5583b] duration-200">
                        REACH KRLO FRAANDS &nbsp; &#8594;
                    </button>
                </div>
                <div className=''>
                    <img className=' h-[80vh] object-contain mr-16 drop-shadow-[5vh] shadow-black' src={layer1} alt="" />
                </div>
            </div>
        </>
    )
}

export default Contact