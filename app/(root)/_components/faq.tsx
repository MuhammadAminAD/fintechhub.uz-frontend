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
        <div className={`${Styles.container}  py-20 `}>
            <div className="mb-5">
                <h2 className="text-xl md:text-3xl font-bold">Eng ko`p beriladigan savollar</h2>
            </div>
            <div className={`flex gap-30 items-start`}>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-0"
                >
                    {Array(6).fill(null).map((_, index) => (
                        <AccordionItem
                            value={`item-${index}`}
                            key={index}
                            className=" px-5 py-2   transition-all bg-white"
                        >
                            <AccordionTrigger className="md:text-lg font-medium text-gray-900 hover:text-blue-700 text-left">
                                Product Information
                            </AccordionTrigger>

                            <AccordionContent className="flex flex-col gap-3 text-gray-600 leading-relaxed">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek design.
                                    Built with premium materials, it offers unparalleled performance and
                                    reliability.
                                </p>

                                <p>
                                    Key features include advanced processing capabilities and an intuitive
                                    user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <Image src={image} alt="fintechhub.uz" />
            </div>
        </div>
    )
}
