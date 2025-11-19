import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MailOpen } from "lucide-react";

export default function Freetrial() {
    return (
        <div>
            <div className="bg-red-500 lg:flex py-15 px-25 mt-10 lg:justify-between items-center ">
                <div className="flex gap-5 items-center ">
                    <div className="bg-white w-[90px] h-[90px] rounded-[50%] flex justify-center items-center">
                        <p className="text-[crimson]"><MailOpen className={cn("w-[30px] h-[30px] ")} /></p>
                    </div>
                    <h1 className="text-[25px] leading-[30px] text-white">Mutloqa bepul sinov <br /> darsiga yoziling!</h1>
                </div>
                <div>
                    <Button className={cn("rounded-[5px] lg:py-9 lg:px-[55px] cursor-pointer bg-blue-950 hover:bg-blue-900")}>Shu yerga bosing</Button>
                </div>
            </div>
        </div>
    )
}
