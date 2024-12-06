import Image from 'next/image';
import {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuIndicator,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
      NavigationMenuViewport,
    } from "@/components/ui/navigation-menu"
    export default function NavigateMenu (){
      return(
<nav className="flex justify-center items-center w-10/12 gap-8 mt-[88px] mx-10">
<div className="flex justify-between items-center w-full h-6 gap-8">

       <p className="font-bold text-[24px] leading-6 tracking-[3%]">Exclusive</p>
     
     <div>
     <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className='font-[Poppins] text-base'>Menu</NavigationMenuTrigger>
      <NavigationMenuContent>
            <div className='flex flex-col w-auto h-auto p-6 gap-5 text-base font-[Poppins]'>
        <NavigationMenuLink>Home</NavigationMenuLink>
        <NavigationMenuLink>Contact</NavigationMenuLink>
        <NavigationMenuLink>About</NavigationMenuLink>
        <NavigationMenuLink>Sign UP</NavigationMenuLink>
             </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
     </div>

 <div className='flex items-center w-[347px] h-[38px] gap-6 '>
      <div className='w-[243px] h[38px] rounded py-[7px] pr-3 pl-5 bg-[#f5f5f5]'>
      <span className='flex items-center w-[211px] h-6 gap-[34px]'>
            <p className='w-[170px] h-[18px] opacity-[50%] font-[Poppins] text-xs leading-[18px] '>What are you looking for?</p>
            <div className='w-6 h-6'>
      <Image src='/search.png' alt='search' width={100} height={100} />
            </div>  

      </span>
      </div>
       <div className='flex justify-between w-20 h-8  gap-4'>
      <Image src='/Wishlist.png' alt='heart' width={150} height={150} />
      <Image src='/Cart1.png' alt='cart' width={150} height={150} />
      </div>

 </div>
 </div>
    </nav>
    )
}