"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

import mysafar from "../../../assets/images/mysafar.png";
import Unired from "../../../assets/images/Unired.png";
import mfactor from "../../../assets/images/mfactor.png";
import logo_dark from "../../../assets/images/logo-dark.png";
import milli from "../../../assets/images/Millimarket.png";
import basito from "../../../assets/images/basito.svg";
import eduon from "../../../assets/images/eduon.svg";
import itunisoft from "../../../assets/images/itunisoft.svg";
import promark from "../../../assets/images/promark.jpg";

const logos = [
  mysafar,
  Unired,
  mfactor,
  logo_dark,
  milli,
  basito,
  eduon,
  itunisoft,
  promark,
];

export default function Paertners() {
  return (
    <div className="py-10">
        <h2 className="text-3xl text-center pb-8  lg:text-4xl font-bold text-[#012237] leading-tight">Hamkorlarimiz va qilgan ishlarimiz
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
          {logos.map((img, index) => (
            <CarouselItem
              key={index}
              className="basis-1/5 md:basis-1/5 sm:basis-1/3 xs:basis-1/2"
            >
              <div className="flex items-center justify-center p-4">
                <div className="h-[90px] w-[200px] flex items-center justify-center rounded-md">
                  <Image
                    src={img}
                    alt={`logo-${index}`}
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
