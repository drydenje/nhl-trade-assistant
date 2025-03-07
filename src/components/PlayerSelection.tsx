import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

console.log("ps");
const PlayerSelection = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">One</CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">Two</CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">Three</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export { PlayerSelection };
