import Image from "next/image";
import image from '@/assets/images/benifits.jpg'
import Link from "next/link";

export default function BlogCard({ isBig }: { isBig: boolean }) {
    return (
        <div>
            <Link href={"blog/"}>
                <div className="lg:hover:-translate-y-3 duration-100 group">
                    <div className="relative">
                        <Image src={image} alt="Fintechhub blog" width={100} height={100} className="w-full max-h-[217px] h-full object-cover" />

                        <div className="w-full h-full absolute top-0 left-0 bg-black/20 items-center justify-center text-white opacity-0 lg:group-hover:opacity-100 flex duration-200 font-medium text-sm cursor-pointer backdrop-blur-sm">
                            batafsil korish uchun bosing
                        </div>
                    </div>

                    <div className="py-2 px-1">
                        <h3 className="text-sm font-medium">FintechHub - Dasturlashga ilk qadam shu yerdan boshlanadi!</h3>
                        <p className="text-neutral-600 text-xs leading-4 lg:hidden">{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam natus impedit repudiandae illo odit eligendi at molestias praesentium sequi rem hic beatae ea autem iure quos, commodi pariatur earum sint aut mollitia et! Fugit deleniti, voluptates quod nihil eaque tempore veniam reiciendis culpa a, minus exercitationem maiores illum numquam delectus aliquam necessitatibus porro ex amet tempora, rerum nulla saepe quisquam corporis. Sed sunt, recusandae voluptatum ea eveniet fugit similique sapiente.".slice(0, 180)}</p>
                        <p className="text-neutral-600 text-xs leading-4 max-lg:hidden">{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam natus impedit repudiandae illo odit eligendi at molestias praesentium sequi rem hic beatae ea autem iure quos, commodi pariatur earum sint aut mollitia et! Fugit deleniti, voluptates quod nihil eaque tempore veniam reiciendis culpa a, minus exercitationem maiores illum numquam delectus aliquam necessitatibus porro ex amet tempora, rerum nulla saepe quisquam corporis. Sed sunt, recusandae voluptatum ea eveniet fugit similique sapiente.".slice(0, isBig ? 540 : 180)}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
