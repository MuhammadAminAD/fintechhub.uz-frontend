import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Styles } from "@/styles/styles"
import Image from "next/image"
import image from "@/assets/images/fintechOut.jpg"

export function FAQ() {
    return (
        <div className={`${Styles.container} py-5  lg:py-20 `}>
            <div className="mb-5">
                <h2 className="text-xl md:text-3xl font-bold">Eng ko`p beriladigan savollar</h2>
            </div>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20`}>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {Array(6).fill(null).map((_, index) =>
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="md:text-lg font-medium">Product Information</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    )}
                </Accordion>

                <Image src={image} alt="fintechhub.uz" className="w-full rounded-2xl max-lg:row-start-1" />
            </div>
        </div>
    )
}
