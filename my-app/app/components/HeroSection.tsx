import Image from "next/image"
export default function HeroSection() {
  return (
    <main className="flex flex-col lg:flex-row">
      <div className="flex flex-col justify-center items-start h-[344px] w-[217px] mt-14 ml-[135px] gap-4
      font-[Poppins] text-base text-center">
      <div className="flex justify-between items-center w-full">
            <p>Woman’s Fashion</p>
      <Image src="/Vector.png" alt="Vector.png" width={7.78} height={12.73} className="ml-2" />
      </div>
      <div className="flex justify-between items-center w-full">
            <p>Men’s Fashion</p>
      <Image src="/Vector.png" alt="Vector.png" width={7.78} height={12.73} className="ml-2" />
      </div>
      <p>Electronics</p>
      <p>Home & Lifestyle</p>
      <p>Sports & Outdoor</p>
      <p>Baby’s & Toys</p>
      <p>Medicine</p>
      <p>Groceries & Pets</p>
      <p>Health & Beauty</p>
</div>
<div className="flex min-w-max justify-center ml-10 lg:w-[892px] h-[344px] mt-14 lg:ml-[110px] bg-[#000000]  text-[#fafafa]">

<div className="flex flex-col justify-center items-center w-4/12 m-10">
      <div className="flex justify-center items-center gap-5 mb-10">
      <Image src="/Apple.png" alt="Apple.png" width={30} height={30} />
      <p className="text-sm">iPhone l4 Series </p>
      </div>
      
      <p className="text-4xl font-semibold">Up to 10%</p>
      <p className="text-4xl font-semibold">off Voucher</p>
      <div className="flex justify-center items-center gap-2 mt-10">
      <button className="text-sm">Shope Now</button>
      <Image src="/arrowRight.png" alt="arrow" width={20} height={20} />
      </div>
</div>  
<div className="mt-12">
      <Image src="/heroImage.png" alt="HeroImage" width={400} height={344} />
</div>
</div>
    </main>
  )
}
