"use client"

import React, { useState } from 'react'
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import PhoneInput from 'react-phone-input-2'
import { Button } from './ui/button'

export default function ContactModalContent() {
    const [phone, setPhone] = useState("");

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
        </>
    )
}
