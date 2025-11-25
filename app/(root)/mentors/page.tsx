import { Styles } from "@/styles/styles";
import TeacherCard from "./_components/teacherCard";
import FixedBanner from "@/components/FixedBanner";
import ContactForm from "../_components/contactForm";

export default function page() {
    return (
        <div>
            <FixedBanner title="Tajribali mentorlar" />
            <div className="py-20">
                <div className={Styles.container}>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {Array(10).fill(null).map((_, index) =>
                            <TeacherCard key={index} />
                        )}
                    </div>
                </div>
            </div>

            <ContactForm />
        </div>
    )
}
