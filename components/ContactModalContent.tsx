"use client"

import React, { useState } from 'react'
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import PhoneInput from 'react-phone-input-2'
import { Button } from './ui/button'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { useSendRegisterDataMutation } from "@/lib/services/formApi"
import { FormSchema } from '@/schema/form.zod'
import Link from 'next/link'

type FormType = z.infer<typeof FormSchema>;

// Agar modalni yopish uchun prop kiritish kerak bo'lsa, shu yerni o'zgartiring:
// export default function ContactModalContent({ onClose }: { onClose: () => void }) {
export default function ContactModalContent() {
    const [phone, setPhone] = useState("");
    const [sendData, { isLoading }] = useSendRegisterDataMutation();

    // ⭐ Xabarnomani ko'rsatish uchun yangi state
    const [isSubmitted, setIsSubmitted] = useState(false);

    // 🔥 React Hook Form
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<FormType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            phone: "",
        },
    });

    // PhoneInput → RHF ga ulash
    function handlePhoneChange(value: string) {
        setPhone(value);
        setValue("phone", value, { shouldValidate: true });
    }

    // 🔥 Submit handler
    async function onSubmit(data: FormType) {
        try {
            await sendData({
                ism: data.name,
                phone: data.phone,
                familiya: "default",
                kurs: "frontend",
                target: "4",
                desc: "modal"
            }).unwrap();

            // Muvaffaqiyatli yuborilganda:
            reset()
            setPhone("")

            // ⭐ Muvaffaqiyat xabarini ko'rsatish
            setIsSubmitted(true);

            // Agar modalni avtomatik yopish kerak bo'lsa:
            // setTimeout(() => { onClose(); }, 3000); 

        } catch (error) {
            console.error("Ma'lumot yuborishda xato: ", error);
            alert("Ma'lumot yuborishda xato yuz berdi. Iltimos, qayta urinib ko'ring.");
        }
    }

    // --- Muvaffaqiyat xabari kontenti ---
    if (isSubmitted) {
        return (
            <div className="text-center p-6 min-h-[250px] flex flex-col justify-center items-center">
                <DialogTitle className="text-2xl font-bold text-green-600 mb-4">
                    ✅ Muvaffaqiyatli!
                </DialogTitle>
                <DialogDescription className="text-lg text-neutral-700">
                    Rahmat, tez orada sizga aloqaga chiqamiz.
                </DialogDescription>
                {/* Agar modalni yopish tugmasi kerak bo'lsa */}
                {/* <Button onClick={onClose} className="mt-6">Yopish</Button> */}
            </div>
        )
    }
    // ------------------------------------

    return (
        <>
            <DialogHeader>
                <DialogTitle>
                    Dasturlashga ilk qadam <span className="text-blue-500">FinTechHub</span>dan boshlanadi!
                </DialogTitle>
                <DialogDescription>
                    Bepul maslahat olish uchun ro`yhatdan o`ting
                </DialogDescription>
            </DialogHeader>

            {/* FORM START */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">

                {/* Name */}
                <Input
                    type="text"
                    placeholder="Ismingiz"
                    className="mb-1"
                    {...register("name")}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>
                )}

                {/* Phone */}
                <PhoneInput
                    country={'uz'}
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Telefon raqamingiz"
                    containerStyle={{ width: "100%", marginBottom: "2px" }}
                    inputStyle={{ width: "100%" }}
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mb-2">{errors.phone.message}</p>
                )}

                <DialogFooter className="flex-col! items-center mt-3">
                    <Button
                        type="submit"
                        disabled={isLoading} // Yuborish vaqtida tugmani o'chirish
                        className="bg-orange-600 w-full lg:hover:bg-orange-400"
                    >
                        {isLoading ? "Yuborilmoqda..." : "Bepul maslahat olmoqchiman"}
                    </Button>


                    <Button className="bg-blue-600 w-full lg:hover:bg-blue-400" type="button">
                        <Link href={"https://t.me/Fintech_Sotuv"} target='__blank'>
                            Telegram orqali bog‘lanish
                        </Link>
                    </Button>
                    <p className="bg-transparent! text-neutral-600 text-center text-sm">
                        Hozirda o‘quv markazimiz faqat Toshkent shahrida joylashgan
                    </p>
                </DialogFooter>
            </form>
            {/* FORM END */}
        </>
    );
}