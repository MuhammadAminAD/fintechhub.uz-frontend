import { z } from "zod";

export const FormSchema = z.object({
    name: z
        .string()
        .min(2, "Ism kamida 2 harf bo‘lishi kerak"),
    phone: z
        .string()
        .min(9, "Telefon raqami noto‘g‘ri")
});
