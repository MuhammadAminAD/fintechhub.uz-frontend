"use client";

import Image from "next/image";
import image from '@/assets/images/benifits.jpg'
import Link from "next/link";
import { useGetBlogsQuery } from "@/lib/services/api";
import { IBlogs } from "@/types/types";

export default function BlogCard({ isBig, data }: { isBig: boolean, data: IBlogs }) {
    return (
        <div>
            <Link href={`blog/${data.title}-${data.id}`}>
                <div className="lg:hover:-translate-y-3 duration-100 group">
                    <div className="relative">
                        <Image src={data.image} alt="Fintechhub blog" width={4000} height={2000} className="w-full max-h-[217px] h-full object-cover" />

                        <div className="w-full h-full absolute top-0 left-0 bg-black/20 items-center justify-center text-white opacity-0 lg:group-hover:opacity-100 flex duration-200 font-medium text-sm cursor-pointer backdrop-blur-sm">
                            batafsil korish uchun bosing
                        </div>
                    </div>

                    <div className="py-2 px-1">
                        <h3 className="text-sm font-medium">{data.title}</h3>
                        <p className="text-neutral-600 text-xs leading-4 lg:hidden">
                            {data?.description?.slice(0, 180)}
                        </p>
                        <p className="text-neutral-600 text-xs leading-4 max-lg:hidden">
                            {data?.description?.slice(0, isBig ? 540 : 180)}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
