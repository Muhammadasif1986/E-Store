import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from "@/components/ui/carousel"
    

export default function TodayCards() {
  return (
    <div className="flex justify-center items-center mt-10 font-[Poppins] text-5xl text-black">
      <Carousel>
  <CarouselContent>
    <CarouselItem>1</CarouselItem>
    <CarouselItem>2</CarouselItem>
    <CarouselItem>3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}
