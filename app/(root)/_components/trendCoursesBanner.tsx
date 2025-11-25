import BannerLine from "@/assets/images/trendCourseLine.png"
import Image from "next/image"

export default function TrendCoursesBanner() {
    return (
        <section className="w-full trend-courses-background">
            <div className="trend-courses-overlay"></div>
            <div data-aos="zoom-in-down" className="py-5 md:py-20 lg:py-25 text-center text-white text-xl md:text-2xl lg:text-5xl font-black relative z-2 space-y-2 md:space-y-5">
                <h1>Hozir qaysi kurslar trendda?</h1>
                <h1>Ularni bizdan topasiz!</h1>
            </div>
            <Image src={BannerLine} alt="line" className="relative z-2" />
        </section>
    )
}
