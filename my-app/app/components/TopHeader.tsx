import {Poppins} from 'next/font/google'
import Image from 'next/image'
const poppins = Poppins(
      {
      weight:['100','200','300','400','500','600','700','800','900']
      ,subsets:['latin']})
export default function TopHeader() {
  return (
    <main className={poppins.className}>
      <div className="flex items-center w-full h-12 bg-black">
             <div className="flex justify-between items-center w-[859px] h-6 mt-3 ml-[445px] gap-[231px] text-[#fafafa]">
<div className="w-[550px] h-6 gap-2 flex">
<div className="w-[474px] h-5">
<p className="font-normal text-sm leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
</div>
<div>
<p className="font-semibold text-sm text-center underline">ShopNow</p>
</div>

</div>
<div className='w-20 h-6 flex items-center gap-1'>
  <div className='w-12 h-5'>
  <p className='text-sm'>English</p>
  </div>
  <div className='w-6 h-6' >
  <Image src='/DropDown.png' alt='dropDown' width={100} height={100} />
</div>
</div>
            </div>

      </div>
    </main>
  )
}

