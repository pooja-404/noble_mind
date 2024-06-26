
export default function Preloder() {
    return (

        <div className="bg-[#040404] min-h-screen fixed h-full w-full flex   items-center z-30  mx-auto">
            <div
                className="w-[10rem] h-[10rem] animate-bounce ing grid place-items-center   [transition:all_400ms_ease] hover:-translate-y-[1rem] mx-auto">

                <div className="w-[7rem] h-[7rem] absolute bg-black  rounded-lg animate-[spinIn_1s_linear_infinite]"></div>
                <div className="w-[8rem] h-[8rem]  absolute bg-black   shadow-xl rounded-full"></div>
                <p
                    className=" bg-[#4F91FC] bg-btngradient to-yellow-500/30 rounded-full text-center inline-flex items-center text-[#000e17] font-semibold w-[10rem] h-[10rem] flex justify-center animate-[spinOut_1s_linear_infinite]">
                    <h3 className="absolute -rotate-[360deg] text-white text-sm sm:text-xl f font-semibold font-Outfit">Noble-Mind</h3>
                </p>
            </div>
        </div>
    )
}