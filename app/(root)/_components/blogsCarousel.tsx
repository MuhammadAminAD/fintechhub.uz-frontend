"use client"

import BlogCard from "@/components/BlogCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { useGetBlogsQuery } from "@/lib/services/api"
import { Styles } from "@/styles/styles"
import { IBlogs } from "@/types/types"

export default function BlogsCarousel() {
    const { data } = useGetBlogsQuery(" ")

    return (
        <div className={Styles.container}>

            <h1 className="text-xl md:text-3xl lg:text-5xl leading-snug font-bold text-[#012237] mb-10">Eng so`ngi yangiliklar</h1>
            <Carousel opts={{ loop: true, align: "center" }}>
                <CarouselContent>
                    {data?.map((data: IBlogs, index: number) =>
                        <CarouselItem className="basis-8/10 md:basis-1/2 lg:basis-1/4" key={index}><BlogCard isBig={false} data={data} /></CarouselItem>
                    )}

                </CarouselContent>
            </Carousel>
        </div>
    )
}
