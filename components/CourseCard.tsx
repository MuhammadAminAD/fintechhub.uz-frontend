import Image from "next/image";
import ReactIocn from "@/assets/icons/react.svg"
export default function CourseCard() {
    return (
        <div className="shadow-md p-2 lg:p-4 rounded-lg lg:hover:-translate-y-2 duration-300">
            <div className="border-b py-2">
                <h1 className="text-neutral-900 text-lg font-medium max-lg:text-[16px]">Frontend dasturlash kurslari</h1>
            </div>
            <div>
                <div className="flex items-center my-5 justify-between">
                    <ul className="text-neutral-600 max-lg:text-xs">
                        <li>Haftasiga 3 kun</li>
                        <li>Kuniga 2 soatdan</li>
                        <li>Davomiyligi 10 oygacha</li>
                        <li>Narx oyiga 1 400 000 so`m</li>
                        <li>Ikkiga bo`lib to`lash mumkin</li>
                    </ul>
                    <Image src={ReactIocn} alt="react" width={60} />
                </div>
                <div className="flex items-center gap-2">
                    {Array(5).fill(0).map((_, index) =>
                        <Image src={ReactIocn} alt="" key={index} width={20} className="shrink-0" />

                    )}
                </div>
            </div>
        </div>
    )
}
