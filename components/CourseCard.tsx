import Image from "next/image";
import ReactIocn from "@/assets/icons/react.svg"
import Link from "next/link";
import { ICourse } from "@/types/types";
export default function CourseCard({ data }: { data: ICourse }) {
    return (
        <Link href={"/course/1"}>
            <div className="shadow-md p-2 lg:p-4 rounded-lg lg:hover:-translate-y-2 duration-300 lg:hover:opacity-50 lg:hover:scale-105">
                <div className="border-b py-2">
                    <h1 className="text-neutral-900 text-lg font-medium max-lg:text-[16px]">{data.title}</h1>
                </div>
                <div>
                    <div className="flex items-center my-5 justify-between">
                        <ul className="text-neutral-600 max-lg:text-xs">
                            <li>Haftasiga 3 kun</li>
                            <li>Kuniga {data.lesson_time}soat</li>
                            <li>Davomiyligi {data.lesson_duration}oy</li>
                            <li>Guruhda {data.number_of_students} ta talaba</li>
                        </ul>
                        <Image src={data.logo} alt={data.title} width={60} />
                    </div>
                    <div className="flex items-center gap-2">
                        {data.icons.map((icon, index) =>
                            <Image src={icon} alt={data.title} key={index} width={20} className="shrink-0" />
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}
