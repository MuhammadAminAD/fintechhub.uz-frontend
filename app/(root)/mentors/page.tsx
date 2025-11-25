import { Styles } from "@/styles/styles";
import TeacherCard from "./_components/teacherCard";

export default function page() {
    return (
        <div className={Styles.container}>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {Array(10).fill(null).map((_, index) =>
                    <TeacherCard key={index} />
                )}
            </div>
        </div>
    )
}
