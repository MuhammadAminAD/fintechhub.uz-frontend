"use client"

import { useEffect } from 'react'
import Header from './_components/header'
import ShortlyAbout from './_components/shortlyAbout'
import TrendCoursesBanner from './_components/trendCoursesBanner'
import CoursesList from '@/components/CoursesList'
import Freetrial from './_components/Freetrial'
import YoutubeVideo from './_components/youtubeVideo'
import ContactForm from './_components/contactForm'
import Images from './_components/images'

import WhyUs from './_components/WhyUs'
import { FAQ } from './_components/faq'
import BlogsCarousel from './_components/blogsCarousel'
import AOS from "aos";
import "aos/dist/aos.css";
import FixedBanner from '@/components/FixedBanner'
import Partners from './_components/partners'

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        });
    }, []);
    return (
        <div>
            <Header />
            <ShortlyAbout />
            <TrendCoursesBanner />
            <CoursesList />
            <YoutubeVideo />
            <ContactForm />
            <Images />
            <WhyUs />
            <FAQ />
            <BlogsCarousel />
            <Partners/>
            <Freetrial />
        </div>
    )
}
