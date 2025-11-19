import React from 'react'
import CourseCard from './CourseCard'
import { Styles } from '@/styles/styles'

export default function CoursesList() {
    return (
        <div className={`${Styles.container} my-20`}>
            <div className='grid grid-cols-3 gap-10'>
                {Array(6).fill(0).map((_, index) =>
                    <CourseCard key={index} />
                )}
            </div>
        </div>
    )
}
