import React from 'react'
import Header from './_components/header'
import ShortlyAbout from './_components/shortlyAbout'
import TrendCoursesBanner from './_components/trendCoursesBanner'
import CoursesList from '@/components/CoursesList'
import Freetrial from './_components/Freetrial'

export default function page() {
    return (
        <div>
            <Header />
            <ShortlyAbout />
            <TrendCoursesBanner />
            <CoursesList />
            <Freetrial/>
        </div>
    )
}
