"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Styles } from "@/styles/styles"
import Image from "next/image"
import image from "@/assets/images/fintechOut.jpg"
import { useGetFAQQuery } from "@/lib/services/api"
import { IFaqs } from "@/types/types"

export function FAQ() {
    const { data } = useGetFAQQuery(" ")
    return (
        <div className={`${Styles.container} py-20 `}>
            <div className="mb-5">
                <h2 className="text-xl md:text-3xl lg:text-5xl leading-snug font-bold text-[#012237]">Eng ko`p beriladigan savollar</h2>
            </div>
            <div className={`gap-30 items-start grid grid-cols-1 lg:grid-cols-2 `}>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-0"
                >
                    {data?.map((data: IFaqs, index: number) =>
                        <AccordionItem value={`item-${index}`} key={index} data-aos="fade-right">
                            <AccordionTrigger className="md:text-lg font-medium">{data.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    {data.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    )}
                </Accordion>

                <Image data-aos="fade-left" src={image} alt="fintechhub.uz" className="w-full rounded-2xl max-lg:row-start-1" />
            </div>
        </div>
    )
}
