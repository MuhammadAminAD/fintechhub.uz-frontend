"use client"

import { Styles } from "@/styles/styles";
import { Mail, Phone } from "lucide-react";
import { Dialog, DialogFooter, DialogHeader } from "../ui/dialog";
import { DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from "react";
import { Input } from "../ui/input";

export default function NavBarTop() {
    const [phone, setPhone] = useState("");

    return (
        <div className="py-2 bg-blue-400">
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
                            <DialogHeader>
                                <DialogTitle>
                                    Dasturlashga ilk qadam <span className="text-blue-500">FinTechHub</span>dan boshlanadi!
                                </DialogTitle>
                                <DialogDescription>
                                    Bepul maslahat olish uchun ro`yhatdan o`ting
                                </DialogDescription>
                            </DialogHeader>
                            <Input type="text" placeholder="Ismingiz" className="mb-2" />
                            <PhoneInput
                                country={'uz'}
                                value={phone}
                                onChange={setPhone}
                                placeholder="Telefon raqamingiz"
                                containerStyle={{ width: "100%" }}
                                inputStyle={{ width: "100%" }}
                            />
                            <DialogFooter className="flex-col! items-center">
                                <Button className="bg-orange-600 w-full lg:hover:bg-orange-400">Bepul maslahat olmoqchiman</Button>
                                <Button className="bg-blue-600 w-full lg:hover:bg-blue-400">Telegram orqali bog`lanish</Button>
                                <p className="bg-transparent! text-neutral-600 text-center text-sm">Hozirda o`quv markazimiz faqat Toshkent shahrida joylashgan</p>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
