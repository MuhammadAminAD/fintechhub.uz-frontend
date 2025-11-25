"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Styles } from "@/styles/styles";
import { BsExclamation } from "react-icons/bs";
import icon1 from '@/assets/images/circle-stripe-1.png';
import icon2 from '@/assets/images/circle-stripe.png';
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";

export default function ContactForm() {
    const [phone, setPhone] = useState("");

    return (
        <section className="py-20 relative">
            <div className={`${Styles.container} flex items-center justify-between flex-col lg:flex-row max-lg:gap-10`}>
                <div  data-aos="fade-right" className="max-w-xl">
                    <h2 className="text-xl md:text-3xl lg:text-5xl leading-snug font-bold text-[#012237]">Hoziroq ro‘yxatdan o`ting</h2>
                    <h3 className="md:text-lg mt-1 md:mt-2 mb-2 md:mb-5 font-medium">va bepul darsga ega bo`ling!</h3>
                    <p className="text-neutral-700">Dasturlash bilimlarini onlayn yoki offlayn tarzda o‘rganishingiz mumkin.
                        Amaliyotni esa, real ishlab turgan loyihalarimizga qo‘shilgan holda o‘taysiz.
                        Ishonavering, bunaqa imkoniyatlar har joyda ham uchramaydi.
                    </p>
                </div>

                <form data-aos="fade-left" action="" className="flex flex-col gap-5 p-5 sm:p-7 lg:p-10 border border-neutral-300 rounded-lg shadow-lg w-full max-w-xl">
                    <div className="w-full text-center text-2xl font-medium text-blue-400 text-shadow-sm">
                        <h4>Bepul darsga yozilish</h4>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <Label>
                                Ismingizni kiriting:
                            </Label>
                            <Input type="text" />
                        </div>

                        <div className="space-y-2">
                            <Label>
                                Telefoningizni kiriting
                            </Label>
                            <PhoneInput
                                country={'uz'}
                                value={phone}
                                onChange={setPhone}
                                placeholder="Telefon raqamingiz"
                                containerStyle={{ width: "100%" }}
                                inputStyle={{ width: "100%" }}
                            />
                        </div>
                    </div>

                    <Button>Ro`yxatdan o`tish</Button>
                    <p className="text-xs flex items-center"><BsExclamation size={16} /> O`quv markazimiz Toshkent shahrida joylashgan</p>
                </form>
            </div>

            <Image src={icon1} alt="" className="absolute top-5 md:left-[4%] max-md:right-[4%] z-[-1]" />
            <Image src={icon2} alt="" className="absolute top-6 md:left-[7%] max-md:right-[17%] z-[-1]" />
            <Image src={icon2} alt="" className="absolute bottom-[4%] left-[50%] z-[-1]" />
        </section>
    )
}
