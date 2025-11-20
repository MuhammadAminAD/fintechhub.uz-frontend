"use client";

import { useState } from "react";
import { Styles } from "@/styles/styles";
import { Video } from "lucide-react";

export default function YoutubeVideo() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        // cursor pozitsiyasi
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // markaz
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // icon siljish miqdori
        const offsetX = ((mouseX - centerX) / rect.width) * 20; // max 20px
        const offsetY = ((mouseY - centerY) / rect.height) * 20;

        setPos({ x: offsetX, y: offsetY });
    };

    const resetPos = () => setPos({ x: 0, y: 0 });

    return (
        <div className="YoutubeVideo-bg py-10">
            <div
                className={`${Styles.container} flex items-center justify-between flex-col lg:flex-row`}
            >
                <div className="max-w-2xl py-20 text-bg">
                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium">
                        FintechHub - professional dasturchi bo`lib chiqishingizni kafolatlaydi!
                    </h1>
                    <p className="text-zinc-200 mt-2 md:mt-4 max-md:text-sm">
                        2 daqiqali video-lavhamizda fikringiz o`zgaradi.
                    </p>
                </div>

                {/* BUTTON wrap */}
                <a
                    href="https://www.youtube.com/watch?v=jD6IDd6i86M"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="p-10" onMouseMove={handleMove}
                        onMouseLeave={resetPos}>
                        <div
                            className="w-30 h-30 rounded-full flex items-center justify-center bg-blue-400 text-white relative"
                        >
                            {/* ICON HARAKATLANADI */}
                            <Video
                                size={50}
                                className="transition-transform duration-50"
                                style={{
                                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                                }}
                            />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
