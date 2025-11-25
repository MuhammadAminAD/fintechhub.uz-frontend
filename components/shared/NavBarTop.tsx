"use client"

import { Styles } from "@/styles/styles";
import { Mail, Phone } from "lucide-react";
import { Dialog } from "../ui/dialog";
import { DialogContent, DialogTrigger } from "../ui/dialog";
import 'react-phone-input-2/lib/style.css';
import ContactModalContent from "../ContactModalContent";

export default function NavBarTop() {

    return (
        <div className="py-2 navtop-bg">
            <div className={`${Styles.container} flex justify-between items-center`}>
                <div className="flex items-center gap-5">
                    <a href="tel:+998712038800" className="text-[8px] sm:text-sm text-white font-medium lg:hover:underline flex items-center gap-1">
                        <Phone className="w-3 sm:w-4" />
                        71 203 88 00
                    </a>
                    <a href="mailto:info@fintechhub.uz" className="text-[8px] sm:text-sm text-white font-medium lg:hover:underline flex items-center gap-1">
                        <Mail className="w-3 sm:w-4" />
                        info@fintechhub.uz
                    </a>
                </div>

                <div>
                    <Dialog>
                        <DialogTrigger className="text-[8px] sm:text-sm text-white font-medium lg:hover:underline flex items-center gap-1">
                            Kurslarga yozilish
                        </DialogTrigger>

                        <DialogContent className="overflow-hidden flex flex-col">
                            <ContactModalContent />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
