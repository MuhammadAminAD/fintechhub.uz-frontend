"use client"

import Image from "next/image";
import teacher from "@/assets/images/Alisher-BIYkM_QF.png"
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TeacherCard() {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 5,       // maksimal qiyshayish
                speed: 1000,    // animatsiya tezligi
                glare: true,   // yaltirash effekti
                "max-glare": 0.3 // yaltirash kuchi
            });
        }
    }, []);

    return (
        <div
            ref={tiltRef}
            className="flex flex-col shadow rounded-md overflow-hidden"
        >
            <div>
                <Image
                    src={teacher}
                    alt="fintechub mentors"
                    className="h-80 w-full object-cover"
                    width={4000}
                    height={2000}
                />
            </div>

            <div className="w-full py-2 bg-white">
                <h3 className="font-semibold text-center text-lg">Alisher Ashrapov</h3>
                <p className="text-center">Frontend | React JS dasturchi</p>
            </div>
        </div>
    );
}
