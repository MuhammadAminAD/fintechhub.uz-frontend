"use client";

import { Styles } from "@/styles/styles";

export default function FixedBanner({ title }: { title: string }) {

    return (
        <div className="YoutubeVideo-bg py-30 md:py-40 lg:py-50">
            <div
                className={`${Styles.container} flex items-center justify-center`}
            >
                <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl capitalize">{title}</h1>
            </div>
        </div>
    );
}
