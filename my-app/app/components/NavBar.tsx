import Image from 'next/image'
import {Poppins} from 'next/font/google'
const poppins = Poppins(
      {
      weight:['100','200','300','400','500','600','700','800','900']
      ,subsets:['latin']})
export default function NavBar() {
  return (
    <nav className="w-[1170px] h-[38px] mt-[88px] ml-[135px] gap-[148px]">
<div className="flex items-center w-[675px] h-6 gap-48">
      <div className="w-[188px] h-6">
            <p className="font-bold text-[24px] leading-6 tracking-[3%]">Exclusive</p>
      </div>
      <div className="flex justify-center items-center w-[367px] h-6 gap-12 font-[poppins] font-normal text-base ">
     <li className="w-12 h-6 text-center list-none">Home</li>
     <li className="w-16 h-6 text-center list-none">Contact</li>
     <li className="w-12 h-6 text-center list-none">About</li>
     <li className="w-[61px] h-6 text-center list-none">Sign Up</li>
      </div>
      <div className='flex items-center w-[347px] h-[38px] gap-6 '>
      <div className='w-[243px] h[38px] rounded py-[7px] pr-3 pl-5 bg-[#f5f5f5]'>
      <span className='flex items-center w-[211px] h-6 gap-[34px]'>
            <p className='w-[153px] h-[18px] opacity-[50%] font-[Poppins] text-xs leading-[18px] '>What are you looking for?</p>
            <div className='w-6 h-6'>
      <Image src='/search.png' alt='search' width={100} height={100} />
            </div>
      </span>
      </div>
      </div>
 </div>

    </nav>
  )
}
