"use client"

import { Styles } from "@/styles/styles";
import TeacherCard from "./_components/teacherCard";
import FixedBanner from "@/components/FixedBanner";
import ContactForm from "../_components/contactForm";
import { useGetTeachersQuery } from "@/lib/services/api";
import { ITeacher } from "@/types/types";

export default function Page() {
    const {data} = useGetTeachersQuery(" ")
    return (
        <div>
            <FixedBanner title="Tajribali mentorlar" />
            <div className="py-20">
                <div className={Styles.container}>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {data?.map((data: ITeacher, index: number) =>
                            <TeacherCard key={index} data={data}/>
                        )}
                    </div>
                </div>
            </div>

            <ContactForm />
        </div>
    )
}
