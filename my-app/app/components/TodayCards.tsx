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
      <div className="w-full px-4 lg:w-[1308px] mx-auto text-base font-[Poppins] mt-8 md:mt-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Flash Sales Title */}
          <div>
            <div className="flex items-center w-24 h-10">
              <div className="w-5 h-10 rounded bg-[#db4444]"></div>
              <p className="text-[#db4444] ml-2">Today&apos;s</p>
            </div>
            <div className="text-2xl md:text-3xl font-semibold mt-4">
              Flash Sales
            </div>
          </div>

          {/* Timer */}
          <div className="flex gap-2 md:gap-3">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
              <span key={idx} className="flex flex-col items-center text-center">
                <p className="text-xs md:text-sm">{label}</p>
                <p className="text-lg md:text-2xl font-semibold">
                  03<span className="text-[#db4444] ml-1 md:ml-3 font-normal">:</span>
                </p>
              </span>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <div className="flex justify-center items-center w-10 h-10 bg-[#f5f5f5] rounded-full">
              <Image src="/vectorLeft.png" alt="Left" width={20} height={20} />
            </div>
            <div className="flex justify-center items-center w-10 h-10 bg-[#f5f5f5] rounded-full">
              <Image src="/vectorRight.png" alt="Right" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <Carousel className="mt-6">
        <CarouselContent>
  {TodayProducts.map((item: Cart, index) => (
    // Set each carousel item to take half the width for two items per slide
    <CarouselItem key={index} className="basis-1/2 p-2">
      <div className="w-full h-[350px] p-4 bg-[#f5f5f5] rounded-lg">
        {/* Discount and Icons */}
        <div className="flex justify-between">
          <div className="w-14 h-7 rounded bg-[#db4444] text-xs text-white text-center pt-1">
            -40%
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-md">
              <Heart size={18} />
            </div>
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-md">
              <Eye size={18} />
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div className="flex justify-center mt-4">
          <Image
            src={item.image}
            alt="Product"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-black rounded-b-lg h-10 text-white font-semibold mt-4">
          Add Cart
        </button>

        {/* Product Info */}
        <div className="mt-4">
          <p className="font-semibold mb-1 text-sm md:text-base">
            {item.ProductName}
          </p>
          <div className="flex gap-2 text-red-700 text-sm md:text-base">
            {item.price}
            <p className="text-gray-500 line-through">{item.LastPrice}</p>
          </div>
          <div className="flex items-center text-xs text-orange-400 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <p className="text-black ml-2 text-sm">(88)</p>
          </div>
        </div>
      </div>
    </CarouselItem>
  ))}
</CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  )
}
