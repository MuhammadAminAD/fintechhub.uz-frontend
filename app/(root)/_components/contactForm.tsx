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
import { useSendRegisterDataMutation } from "@/lib/services/formApi";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/schema/form.zod";

type FormType = z.infer<typeof FormSchema>;

export default function ContactForm() {
    const [sendData, { isLoading }] = useSendRegisterDataMutation(); // isLoading'ni qo'shish tavsiya etiladi
    const [phone, setPhone] = useState("");

    // ⭐ Xabarnomani ko'rsatish uchun yangi state
    const [isSubmitted, setIsSubmitted] = useState(false);

    // 🔥 React Hook Form
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<FormType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            phone: "",
        },
    });

    // PhoneInput qiymatini RHF ga ulash
    function handlePhoneChange(value: string) {
        setPhone(value);
        setValue("phone", value, { shouldValidate: true });
    }

    async function onSubmit(data: FormType) {
        try {
            await sendData({
                ism: data.name,
                phone: data.phone,
                familiya: "default",
                kurs: "frontend",
                target: "4",
                desc: "website",
            }).unwrap(); // .unwrap() xato bo'lsa uni tutib olish uchun

            // Muvaffaqiyatli yuborilganda:
            reset();
            setPhone("");

            // ⭐ Muvaffaqiyat xabarini ko'rsatish
            setIsSubmitted(true);

            // Xabarni 5 soniyadan keyin avtomatik yashirish
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);

        } catch (error) {
            console.error("Ma'lumot yuborishda xato: ", error);
            // Xato xabarini ko'rsatish uchun ham qo'shimcha logic yozishingiz mumkin
            alert("Ma'lumot yuborishda xato yuz berdi. Iltimos, qayta urinib ko'ring.");
        }
    }

    return (
        <section className="py-20 relative">
            <div className={`${Styles.container} flex items-center justify-between flex-col lg:flex-row max-lg:gap-10`}>

                <div data-aos="fade-right" className="max-w-xl">
                    <h2 className="text-xl md:text-3xl lg:text-5xl leading-snug font-bold text-[#012237]">
                        Hoziroq ro‘yxatdan o‘ting
                    </h2>
                    <h3 className="md:text-lg mt-1 md:mt-2 mb-2 md:mb-5 font-medium">va bepul darsga ega bo‘ling!</h3>
                    <p className="text-neutral-700">
                        Dasturlash bilimlarini onlayn yoki offlayn tarzda o‘rganishingiz mumkin.
                    </p>
                </div>

                {/* ⭐ Muvaffaqiyat xabarnomasi (Alert/Toast) */}
                {isSubmitted ? (
                    <div
                        data-aos="fade-left"
                        className="flex items-center justify-center p-5 sm:p-7 lg:p-10 border border-green-500 bg-green-50 text-green-700 rounded-lg shadow-lg w-full max-w-xl min-h-[350px] text-center"
                    >
                        <h4 className="text-2xl font-semibold">
                            ✅ Rahmat, tez orada sizga aloqaga chiqamiz!
                        </h4>
                    </div>
                ) : (
                    /* Asosiy forma isSubmitted=false bo'lganda ko'rinadi */
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        data-aos="fade-left"
                        className="flex flex-col gap-5 p-5 sm:p-7 lg:p-10 border border-neutral-300 rounded-lg shadow-lg w-full max-w-xl"
                    >
                        <div className="w-full text-center text-2xl font-medium text-blue-400">
                            <h4>Bepul darsga yozilish</h4>
                        </div>

                        <div className="space-y-5">

                            {/* Name */}
                            <div className="space-y-2">
                                <Label>Ismingizni kiriting:</Label>
                                <Input type="text" {...register("name")} name="name" />

                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <Label>Telefoningizni kiriting</Label>

                                <PhoneInput
                                    country={"uz"}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder="Telefon raqamingiz"
                                    containerStyle={{ width: "100%" }}
                                    inputStyle={{ width: "100%" }}
                                />

                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                )}
                            </div>
                        </div>

                        {/* isLoading ni Button ga ulash foydali */}
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Yuborilmoqda..." : "Ro`yxatdan o`tish"}
                        </Button>

                        <p className="text-xs flex items-center">
                            <BsExclamation size={16} /> O`quv markazimiz Toshkent shahrida joylashgan
                        </p>
                    </form>
                )}
            </div>

            <Image src={icon1} alt="" className="absolute top-5 md:left-[4%] max-md:right-[4%] z-[-1]" />
            <Image src={icon2} alt="" className="absolute top-6 md:left-[7%] max-md:right-[17%] z-[-1]" />
            <Image src={icon2} alt="" className="absolute bottom-[4%] left-[50%] z-[-1]" />
        </section>
    );
}