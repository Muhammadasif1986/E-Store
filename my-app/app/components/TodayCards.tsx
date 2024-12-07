import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from "@/components/ui/carousel"
    import Image from "next/image"
    import { Heart } from 'lucide-react';
    import { Eye } from 'lucide-react';
    import { FaStar } from "react-icons/fa6";

export default function TodayCards() {
  interface Cart{
    id: number,
    ProductName: string,
    price: string,
    image: string,
    LastPrice: string,
    rating: string,
  }
  let TodayProducts:Cart[]=[
    {id: 1, ProductName: "Hashtag", price: "₹1,299,00", image: "/games.png", LastPrice: "₹2,299,00", rating: "4.5"},
    {id: 2, ProductName: "Hashtag", price: "₹1,299,00", image: "/games.png", LastPrice: "₹2,299,00", rating: "4.5"},
    {id: 3, ProductName: "Hashtag", price: "₹1,299,00", image: "/games.png", LastPrice: "₹2,299,00", rating: "4.5"},
    {id: 4, ProductName: "Hashtag", price: "₹1,299,00", image: "/games.png", LastPrice: "₹2,299,00", rating: "4.5"},
    {id: 4, ProductName: "Hashtag", price: "₹1,299,00", image: "/games.png", LastPrice: "₹2,299,00", rating: "4.5"},
    {id: 4, ProductName: "Hashtag", price: "₹1,299,00", image: "/games.png", LastPrice: "₹2,299,00", rating: "4.5"},
    
  ]
  return (
    <main>
<div className="w-full lg:w-[1308px] h-[493px]  ml-32 text-base font-[Poppins] mt-16 ">
<div className="flex items-end w-10/12 lg:w-[1170px h-[103px] gap-[470px]">
<div className="flex justify-between items-end w-6/12 ">
       <div>
       <div className= "flex justify-between items-center w-24 h-10">
        <div className="w-5 h-10 rounded bg-[#db4444]"></div>
        <p className="text-[#db4444]">Today's</p>
      </div>
      <div className="text-3xl font-semibold mt-6">
          Flash Sales
      </div>
      </div>
<div className="flex gap-3">
  <span>
    <p className="text-[12px]">Days</p>
    <p className="text-2xl font-semibold">03<span className="text-[#db4444] ml-3 font-normal">:</span></p>
  </span>
  <span>
    <p className="text-[12px]">Hours</p>
    <p className="text-2xl font-semibold">23<span className="text-[#db4444] ml-3 font-normal">:</span></p>
  </span>
  <span>
    <p className="text-[12px]">Minutes</p>
    <p className="text-2xl font-semibold">19<span className="text-[#db4444] ml-3 font-normal">:</span></p>
  </span>
  <span>
    <p className="text-[12px]">Seconds</p>
    <p className="text-2xl font-semibold">56</p>
  </span>
</div>

     </div>
     <div className="w-1/12 flex justify-end gap-2">
    <div className="flex justify-center items-center w-11 h-11 bg-[#f5f5f5] rounded-full ">
      <Image src="/vectorLeft.png" alt="vectorLeft" width={20} height={20} />
    </div>
    <div className="flex justify-center items-center w-11 h-11 bg-[#f5f5f5] rounded-full">
      <Image src="/vectorRight.png" alt="vectorRight" width={20} height={20} />
    </div>
     </div>
     </div>
     <Carousel>
 <CarouselContent>
    
      {TodayProducts.map((item:Cart)=>{
        return(
          <main className="flex justify-between items-center w-full lg:w-[1308px] h-[350px] gap-9 mt-10">
 
          <CarouselItem> 
        <div key={item.id} className="w-4/12 lg:w-[270px] h-[350px]">
        <div className="w-full h-[250px] rounded bg-[#f5f5f5]">
  <div className="flex justify-between">
  <div className="w-14 h-7 rounded pt-2 px-3 bg-[#db4444] text-xs text-[#fafafa]">-40%</div>
  <div className="w-[34px] h-[76px]">
    <div className="w-[34px] h-[34px]">
  <div className="w-6 h-6 mt-1 ml-1 bg-[#f5f5f5]"><Heart /></div>
  <div className="w-6 h-6 mt-3 ml-1"><Eye /></div>
    </div>
  </div>
  </div>
  <div className="w-48 h-44 ml-12 -mt-9">
    <Image src={item.image} alt="games" width={172} height={152} className="ml-2" />
  </div>
  <div className="w-[270px]">
    <button className="w-[270px] bg-black rounded-b-lg h-10 text-white font-semibold">Add Cart</button>
  </div>
   </div>
  <div className="mt-4">
    <p className="font-semibold mb-2 text-sm">{item.ProductName}</p>
    <span className="flex gap-4 text-red-700 mb-2 text-sm">{item.price} <p><del className="text-black">{item.LastPrice}</del></p></span>
    <div className="flex w-full justify-start items-center text-xs text-orange-400">
      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      <p className="text-black ml-2 text-sm">(88)</p></div>
  </div>
        </div>
        
        </CarouselItem>
</main>
        )
})
      }
     
      
        </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    
   
</div>
  </main>
  )
}
