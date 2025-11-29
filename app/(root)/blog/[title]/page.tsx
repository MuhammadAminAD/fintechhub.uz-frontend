"use client"

import Image from "next/image";
import img from "@/assets/images/benifits.jpg"
import { Styles } from "@/styles/styles";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useGetBlogsByIdQuery } from "@/lib/services/api";
export default function Blogs() {
    const { title }: { title: string } = useParams()
    const activeId = useMemo(() => title?.split("-").at(-1) ?? null, [title])

    const { data } = useGetBlogsByIdQuery(activeId)
    return (
        <div className={Styles.container}>
            <div className="py-5">
                {data?.vedio_url ? (
                    <iframe src={data?.video_url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="w-full max-h-[60vh] object-cover"></iframe>)
                    :
                    <Image src={data?.image || img} alt="blog image" width={800} height={400} className="w-full max-h-[60vh] object-cover" />}
                <h1 className="text-4xl my-2 ml-1 font-semibold">
                    {data?.title}
                </h1>
                <p className="text-neutral-800">{data?.description}</p>
            </div>
        </div>
    )
}
