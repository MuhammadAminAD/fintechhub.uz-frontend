export interface ICourse {
    id: number;
    title: string;
    icons: { id: string, icon: string }[];
    lesson_time: string;
    lesson_duration: number;
    number_of_students: number;
    type_of_education: string;
    level: string;
    language: string;
    banner: string;
    price: number;
    logo: string;
}

export interface ITeacher {
    id: string;
    full_name: string;
    specialty: string;
    photo: string;
}