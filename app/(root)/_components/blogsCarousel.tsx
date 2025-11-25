import BlogCard from "@/components/BlogCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Styles } from "@/styles/styles"

export default function BlogsCarousel() {
    return (
        <div className={Styles.container}>

            <h1 className="text-xl md:text-3xl lg:text-5xl leading-snug font-bold text-[#012237] mb-10">Eng so`ngi yangiliklar</h1>
            <Carousel opts={{ loop: true, align: "center" }}>
                <CarouselContent>
                    <CarouselItem className="basis-8/10 md:basis-1/2 lg:basis-1/4"><BlogCard isBig={false} /></CarouselItem>
                    <CarouselItem className="basis-8/10 md:basis-1/2 lg:basis-1/4"><BlogCard isBig={false} /></CarouselItem>
                    <CarouselItem className="basis-8/10 md:basis-1/2 lg:basis-1/4"><BlogCard isBig={false} /></CarouselItem>
                    <CarouselItem className="basis-8/10 md:basis-1/2 lg:basis-1/4"><BlogCard isBig={false} /></CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}
