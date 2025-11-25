import main_image from "@/assets/images/shortly about.jpg"
import { Styles } from "@/styles/styles"
import Image from "next/image"

export default function ShortlyAbout() {
    return (
        <div className={`${Styles.container} py-20`}>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 sm:gap-20 md:gap-30 items-center">
                <div data-aos="fade-right" className="relative w-full sm:w-7/10 md:w-full mx-auto">
                    <Image src={main_image} alt="Fintechhub it academy" className="w-full h-full" />
                    <div className="w-4/5 border-20 border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5  rounded-full">
                    </div>

                    <div className={`absolute -right-1 -bottom-1 w-30 md:w-40 h-30 md:h-40 shadow bg-white p-10 ${Styles.flex_center} rounded-full`}>
                        <div className={`rounded-full border-dashed border border-black w-20 md:w-30 h-20 md:h-30 shrink-0 ${Styles.flex_center} flex-col`}>
                            <div>
                                <h1 className="text-orange-500 text-center font-black">
                                    700+
                                </h1>
                            </div>

                            <div>
                                <p className="text-neutral-800 text-shadow-sm md:text-[10px] text-[8px]">bizga ishonganlar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left">
                    <h1 className="text-xl md:text-3xl font-bold">IT labaratoriyamiz haqida qisqacha</h1>
                    <p className="text-neutral-700 mt-4">FintechHub kompyuter dasturlari va startap loyihalarni ishlab chiqaradigan yurtimizdagi yirik IT laboratoriya hisoblanadi. Dunyo darajasidagi raqamli loyihalarni amaliyotga tadbiq etish bilan birga, o‘z sohasida kuchli bo‘lgan dasturchilarni tayyorlash bilan ham shug‘ullanadi. E’tiborni tortadigan va taassurot uyg‘otadigan interfeyslarni yaratishga qaratilgan Front End kurslarimiz sizga ma’qul keladi. Server tarafda ishlaydigan va amalda eng muhim vazifalarni bajarishga ixtisoslashgan Back End dasturlash kurslarimiz bo‘lsa alohida dunyo. Hech narsani bilmasdan turib, ekspert darajasiga yetishish muammo emas. Buning uchun bizda hamma shart-sharoitlar bor. Poytaxtimiz markazidagi shinam ofis, o‘rganish uchun barcha kerakli jihozlar, yuqori tezlikdagi Wi-Fi, nihoyat o‘z ishining ustasi bo‘lgan o‘qituvchilar sizga ko‘mak berishadi.</p>
                </div>
            </div>
        </div>
    )
}
