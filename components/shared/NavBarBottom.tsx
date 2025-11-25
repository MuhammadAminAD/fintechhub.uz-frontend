"use client"

import { Instagram, MenuIcon, X, Youtube } from "lucide-react";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa6";
import Logo from "@/assets/icons/logo-black.svg";
import Image from "next/image";
import { Styles } from "@/styles/styles";
import { useState } from "react";

export default function NavBarBottom() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Bosh sahifa", href: "/" },
        { name: "Kurslarimiz", href: "/course" },
        { name: "Ustozlarimiz", href: "/mentors" },
        { name: "Aloqa", href: "/contact" },
        { name: "Yangiliklar", href: "/blog" },
    ];

    return (
        <div className="py-5 border-t border-gray-200 relative z-50">
            <div className={`${Styles.container} flex justify-between items-center`}>
                {/* Logo va ijtimoiy tarmoqlar */}
                <div className="flex items-center gap-5">
                    <a href="" className="shrink-0">
                        <Image src={Logo} alt="Fintechhub logo it academiya" width={150} />
                    </a>
                    <ul className="hidden sm:flex items-center gap-3 text-neutral-600">
                        <li><Instagram size={20} /></li>
                        <li><Youtube size={24} /></li>
                        <li><FaTelegram size={20} /></li>
                    </ul>
                </div>

                {/* Desktop menu */}
                <ul className="hidden lg:flex items-center gap-5 font-medium text-neutral-600">
                    {links.map((link) => (
                        <li key={link.name} className="lg:hover:underline text-black">
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(true)}><MenuIcon /></button>
                </div>
            </div>

            {/* Mobile fullscreen overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center gap-6 z-50">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white text-2xl font-semibold"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={() => setMenuOpen(false)} className="absolute top-1/10 right-1/10 text-white">
                        <X />
                    </button>
                </div>
            )}
        </div>
    );
}
