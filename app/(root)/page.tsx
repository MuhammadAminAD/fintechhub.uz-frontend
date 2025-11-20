import React from 'react'
import Header from './_components/header'
import ShortlyAbout from './_components/shortlyAbout'
import TrendCoursesBanner from './_components/trendCoursesBanner'
import CoursesList from '@/components/CoursesList'
import Freetrial from './_components/Freetrial'
import YoutubeVideo from './_components/youtubeVideo'
import ContactForm from './_components/contactForm'
import Images from './_components/images'

export default function page() {
    return (
        <div>
            <Header />
            <ShortlyAbout />
            <TrendCoursesBanner />
            <CoursesList />
            <YoutubeVideo />
            <ContactForm />
            <Images />
            <Freetrial />
        </div>
    )
}
