"use client"

import { Styles } from "@/styles/styles";
import { Video } from "lucide-react";
// import Image from "next/image";

export default function YoutubeVideo() {
    return (
        <div className="YoutubeVideo-bg py-10">
            <div className={`${Styles.container} flex items-center justify-between flex-col lg:flex-row`}>
                <div className="max-w-2xl py-20 text-bg ">
                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium">FintechHub - professional dasturchi bo`lib chiqishingizni kafolatlaydi!</h1>
                    <p className="text-zinc-200 mt-2 md:mt-4 max-md:text-sm">2 daqiqali video-lavhamizda fikringiz o`zgaradi.</p>
                </div>

                <div className="w-30 h-30 rounded-full flex items-center justify-center bg-blue-400 text-white">
                    <Video size={50} />
                </div>
            </div>
        </div>
    )
}
