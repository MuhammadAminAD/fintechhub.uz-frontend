"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

import { useGetPartnersQuery } from "@/lib/services/api";

export default function Partners() {
  const { data: partners, isLoading, error } = useGetPartnersQuery();

  // Если данные загружаются
  if (isLoading) {
    return (
      <div className="py-10">
        <h2 className="text-3xl text-center pb-8 lg:text-4xl font-bold text-[#012237] leading-tight">
          Hamkorlarimiz va qilgan ishlarimiz
        </h2>
        <div className="flex items-center justify-center h-[200px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Yuklanmoqda...</p>
          </div>
        </div>
      </div>
    );
  }

  // Если произошла ошибка или нет данных
  if (error || !partners || partners.length === 0) {
    return (
      <div className="py-10">
        <h2 className="text-3xl text-center pb-8 lg:text-4xl font-bold text-[#012237] leading-tight">
          Hamkorlarimiz va qilgan ishlarimiz
        </h2>
        <p className="text-center text-muted-foreground">
          Hamkorlar topilmadi
        </p>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h2 className="text-3xl text-center pb-8 lg:text-4xl font-bold text-[#012237] leading-tight">
        Hamkorlarimiz va qilgan ishlarimiz
      </h2>
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="flex items-center">
          {partners.map((partner: any, index: number) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/5 sm:basis-1/3 xs:basis-1/2"
            >
              <div className="flex items-center justify-center p-4">
                <div className="h-[90px] w-[200px] flex items-center justify-center rounded-md">
                  <Image
                    src={partner.logo || partner.image}
                    alt={partner.name || `partner-${index}`}
                    width={140}
                    height={80}
                    className="w-[70%] opacity-40 hover:opacity-100 transition-all duration-500 object-contain"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}