"use client"

import BlogCard from '@/components/BlogCard'
import FixedBanner from '@/components/FixedBanner'
import { useGetBlogsQuery } from '@/lib/services/api'
import { Styles } from '@/styles/styles'
import { IBlogs } from '@/types/types'



export default function BlogPage() {
    const bigCardsL = [0, 14, 28, 28 + 14, 28 + 28]
    const { data } = useGetBlogsQuery(" ")
    const bigCardsR = [9, 23, 37, 37 + 14, 37 + 28]
    return (
        <div>
            <FixedBanner title='Yangiliklar' />
            <div className={`${Styles.container} mt-10`}>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                    {data?.map((data: IBlogs, index: number) =>
                        <div key={index} className={`${bigCardsL.includes(index) ? "lg:col-start-1 lg:col-end-3" : bigCardsR.includes(index) ? "lg:col-start-3 lg:col-end-5" : ""}`}>
                            <BlogCard isBig={bigCardsL.includes(index) || bigCardsR.includes(index)} data={data} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
