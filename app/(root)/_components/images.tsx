"use client"

import gallery_1 from "@/assets/images/HeaderBanner.jpg";
import gallery_2 from "@/assets/images/HeaderBanner.jpg";
import gallery_3 from "@/assets/images/HeaderBanner.jpg";
import gallery_4 from "@/assets/images/HeaderBanner.jpg";
import gallery_5 from "@/assets/images/HeaderBanner.jpg";
import gallery_6 from "@/assets/images/HeaderBanner.jpg";
import gallery_7 from "@/assets/images/HeaderBanner.jpg";
import gallery_8 from "@/assets/images/HeaderBanner.jpg";
import gallery_9 from "@/assets/images/HeaderBanner.jpg";
// import gallery_7 from `../images/`
import main_image from "@/assets/images/HeaderBanner.jpg";
import logo_white from "@/assets/icons/logo-white.svg";
import Image from "next/image";
import Link from "next/link";
// import "aos/dist/aos.css";

function Photos() {
    return (
        <div className="gallery" id="gallery">
            <div className="gallery-container">
                <h1 data-aos="fade-in" data-aos-delay="100">
                    Bizning o`quvchilar va amaliyot jarayonlaridan lavhalar
                </h1>

                <div className="parent">
                    <div className="div1" data-aos="fade-in" data-aos-delay="150">
                        <Image src={logo_white} alt="" />
                    </div>
                    <div className="div2" data-aos="fade-in" data-aos-delay="200">
                        <Image src={gallery_1} alt="" />
                    </div>
                    <div className="div3" data-aos="fade-in" data-aos-delay="250">
                        <Image src={gallery_7} alt="" />
                    </div>
                    <div className="div5" data-aos="fade-in" data-aos-delay="300">
                        <Image src={gallery_3} alt="" />
                    </div>
                    <div className="div6" data-aos="fade-in" data-aos-delay="350">
                        <Image src={gallery_4} alt="" />
                    </div>
                    <div className="div7" data-aos="fade-in" data-aos-delay="400">
                        <Image src={main_image} alt="" />
                    </div>
                    <div className="div8" data-aos="fade-in" data-aos-delay="450">
                        <Image src={gallery_5} alt="" />
                    </div>
                    <div
                        className="div9"
                        data-aos="fade-in"
                        style={{ background: "#DC143C" }}
                        data-aos-delay="500"
                    >
                        <Link href={"https://dasturlash.fintechhub.uz/"}>
                            Men ham dasturchi bolmoqchiman
                        </Link>
                    </div>
                    <div className="div10" data-aos="fade-in" data-aos-delay="550">
                        <Image src={gallery_6} alt="" />
                    </div>
                    <div className="div11" data-aos="fade-in" data-aos-delay="600">
                        <Image src={gallery_9} alt="" />
                    </div>
                    <div className="div13" data-aos="fade-in" data-aos-delay="650">
                        <Image src={gallery_8} alt="" />
                    </div>
                    <div className="div14" data-aos="fade-in" data-aos-delay="650">
                        <Image src={gallery_2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Photos;
