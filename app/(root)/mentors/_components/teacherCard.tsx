"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { ITeacher } from "@/types/types";

export default function TeacherCard({ data }: { data: ITeacher }) {
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
                    src={data.photo}
                    alt="fintechub mentors"
                    className="h-80 w-full object-cover"
                    width={4000}
                    height={2000}
                />
            </div>

            <div className="w-full py-2 bg-white">
                <h3 className="font-semibold text-center text-lg">{data.full_name}</h3>
                <p className="text-center">{data.specialty}</p>
            </div>
        </div>
    );
}
