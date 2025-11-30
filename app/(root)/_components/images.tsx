"use client"

import Image from "next/image";
import Link from "next/link";
import { useGetBlogsQuery } from "@/lib/services/api";

function Photos() {
    const { data: blogs, isLoading, error } = useGetBlogsQuery();

    // Дефолтные изображения на случай, если API не вернет данных
    const images = blogs && blogs.length > 0 
        ? blogs.map(blog => blog.image) 
        : [];

    if (isLoading) {
        return (
            <div className="bg-[rgb(1,34,55)] h-full w-full py-24">
                <div className="flex flex-col items-center">
                    <div className="h-10 w-64 bg-gray-700 rounded mb-12 animate-pulse"></div>
                    
                    {/* Desktop Skeleton */}
                    <div className="hidden lg:grid grid-cols-7 auto-rows-[16vh] gap-2 px-24 w-full max-w-[1400px]">
                        <div className="col-span-2 row-span-2 col-start-1 row-start-1 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="row-span-2 col-start-1 row-start-3 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="col-start-2 row-start-3 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="col-start-2 row-start-4 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="col-span-3 row-span-3 col-start-3 row-start-1 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="col-span-2 row-span-2 col-start-3 row-start-4 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="col-span-2 col-start-6 row-start-5 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="row-span-2 col-start-5 row-start-4 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="col-span-2 row-span-2 col-start-6 row-start-3 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="row-span-2 col-start-6 row-start-1 bg-gray-700 rounded-lg animate-pulse"></div>
                        <div className="row-span-2 col-start-7 row-start-1 bg-gray-700 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Mobile Skeleton */}
                    <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 px-5 w-full">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-full max-w-[300px] h-[200px] bg-gray-700 rounded-lg animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error || !blogs || blogs.length === 0) {
        return (
            <div className="bg-[rgb(1,34,55)] h-full w-full py-24">
                <div className="flex flex-col items-center justify-center min-h-[400px]">
                    <p className="text-white text-lg">Rasmlar topilmadi</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[rgb(1,34,55)] h-full w-full py-24">
            <div className="flex flex-col items-center">
                <h1 
                    className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-12 px-4"
                    data-aos="fade-in" 
                    data-aos-delay="100"
                >
                    Bizning o`quvchilar va amaliyot jarayonlaridan lavhalar
                </h1>

                {/* Desktop Grid Layout */}
                <div className="hidden lg:grid grid-cols-7 auto-rows-[16vh] gap-2 px-24 w-full max-w-[1400px]">
                    {/* div2: col-span-2, row-span-2, col-start-1, row-start-1 */}
                    {images[0] && (
                        <div 
                            className="col-span-2 row-span-2 col-start-1 row-start-1 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="200"
                        >
                            <Image src={images[0]} alt="Gallery 1" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}

                    {/* div3: row-span-2, col-start-1, row-start-3 */}
                    {images[1] && (
                        <div 
                            className="row-span-2 col-start-1 row-start-3 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="250"
                        >
                            <Image src={images[1]} alt="Gallery 2" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}

                    {/* div5: col-start-2, row-start-3 */}
                    {images[2] && (
                        <div 
                            className="col-start-2 row-start-3 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="300"
                        >
                            <Image src={images[2]} alt="Gallery 3" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}

                    {/* div6: col-start-2, row-start-4 */}
                    {images[3] && (
                        <div 
                            className="col-start-2 row-start-4 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="350"
                        >
                            <Image src={images[3]} alt="Gallery 4" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}

                    {/* div7 - Main Image: col-span-3, row-span-3, col-start-3, row-start-1 */}
                    {images[4] && (
                        <div 
                            className="col-span-3 row-span-3 col-start-3 row-start-1 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="400"
                        >
                            <Image src={images[4]} alt="Main Image" width={600} height={600} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}

                    {/* div8: col-span-2, row-span-2, col-start-3, row-start-4 */}
                    {images[5] && (
                        <div 
                            className="col-span-2 row-span-2 col-start-3 row-start-4 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="450"
                        >
                            <Image src={images[5]} alt="Gallery 5" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}

                    {/* div9 - CTA Button: col-span-2, col-start-6, row-start-5 */}
                    <div 
                        className="col-span-2 col-start-6 row-start-5 bg-crimson flex justify-center items-center rounded-lg text-center"
                        data-aos="fade-in" 
                        data-aos-delay="500"
                    >
                        <Link 
                            href="https://dasturlash.fintechhub.uz/"
                            className="text-white text-xl font-bold no-underline hover:scale-105 transition-transform duration-300"
                        >
                            Men ham dasturchi bolmoqchiman
                        </Link>
                    </div>

                    {/* div10: row-span-2, col-start-5, row-start-4 */}
                    {images[6] && (
                        <div 
                            className="row-span-2 col-start-5 row-start-4 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="550"
                        >
                            <Image src={images[6]} alt="Gallery 6" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}

                    {/* div11: col-span-2, row-span-2, col-start-6, row-start-3 */}
                    {images[7] && (
                        <div 
                            className="col-span-2 row-span-2 col-start-6 row-start-3 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="600"
                        >
                            <Image src={images[7]} alt="Gallery 7" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}

                    {/* div13: row-span-2, col-start-6, row-start-1 */}
                    {images[8] && (
                        <div 
                            className="row-span-2 col-start-6 row-start-1 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="650"
                        >
                            <Image src={images[8]} alt="Gallery 8" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}

                    {/* div14: row-span-2, col-start-7, row-start-1 */}
                    {images[9] && (
                        <div 
                            className="row-span-2 col-start-7 row-start-1 bg-[rgba(2,20,74,0.51)] flex justify-center items-center rounded-lg overflow-hidden"
                            data-aos="fade-in" 
                            data-aos-delay="650"
                        >
                            <Image src={images[9]} alt="Gallery 9" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}
                </div>

                {/* Mobile/Tablet Flexbox Layout */}
                <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 px-5 w-full">
                    {images.slice(0, 10).map((image, index) => (
                        <div key={index} className="w-full max-w-[300px] h-[200px] bg-[rgba(2,20,74,0.51)] rounded-lg overflow-hidden" data-aos="fade-in">
                            <Image src={image} alt={`Gallery ${index + 1}`} width={300} height={200} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                    <div className="w-full max-w-[300px] h-[120px] bg-crimson flex justify-center items-center rounded-lg text-center" data-aos="fade-in">
                        <Link href="https://dasturlash.fintechhub.uz/" className="text-white text-lg font-bold">
                            Men ham dasturchi bolmoqchiman
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Photos;