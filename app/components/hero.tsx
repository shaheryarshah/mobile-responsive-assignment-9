import Image from "next/image"
const  Hero =() => 
    {
        return(
        <div className="bg-gray-300">
            <div><h1 className="flex flex-row w-screen text-xl uppercase font-bold text-red-500 justify-center">product</h1></div>
        
            <div className="flex flex-col lg:flex-row min-h-50px lg:items:center lg:justify-center items-center lg:justify-around lg:w-6/6 w-screen">
            <div><Image src="/ponds.jpg" alt="loadiding" height={500} width={200}/> </div> 
            <div><Image src="/perfume.jpg" alt="loadiding" height={500} width={200}/> </div> 
            <div><Image src="/s.jpg" alt="loadiding" height={500} width={200}/> </div> 
            <div><Image src="/d.jpg" alt="loadiding" height={500} width={200}/> </div> 
            <div><Image src="/2.jpg" alt="loadiding" height={500} width={200}/> </div> 
            <div><Image src="/sunsilk.jpg" alt="loadiding" height={500} width={200}/> </div>
            </div>
            <div className="flex justify-center items-center text-center w-screen">
            <div className="">
            <h1 className="text-xl uppercase font-bold text-red-500">Buy Now</h1>
            <div className="">
            <button className="bg-red-500 p-4 border rounded-2xl items-center text-center">Cleck Here</button>
            </div>
            </div>
            </div>
        </div>
            
                  
    )
    }
export default Hero