'use client'

import CourseCard from './CourseCard'
import { Styles } from '@/styles/styles'
import { useGetCoursesQuery } from '@/lib/services/api'
// import { useEffect } from 'react'

export default function CoursesList() {
    const { data, isLoading, error } = useGetCoursesQuery()
    // useEffect(() => { console.log(data) }, [data])
    return (
        <div className={`${Styles.container} my-20`}>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10'>
                {data?.map((course, index) =>
                    <div key={index} data-aos="fade-up">
                        <CourseCard key={index} data={course} />
                    </div>
                )}
            </div>
        </div>
    )
}
