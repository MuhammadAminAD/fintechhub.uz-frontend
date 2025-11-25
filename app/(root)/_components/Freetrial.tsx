import ContactModalContent from "@/components/ContactModalContent";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MailOpen } from "lucide-react";

export default function Freetrial() {
    return (
        <div className="w-full  pt-8">
            <div className="bg-linear-to-r from-red-600 to-red-500  shadow-2xl lg:flex lg:py-16 lg:px-12 py-10 px-6 lg:justify-between items-center gap-8 hover:shadow-red-500/20 transition-all duration-300">
                <div className="flex gap-6 items-center mb-6 lg:mb-0">
                    <div className="bg-white w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition-transform duration-300">
                        <MailOpen className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] text-red-600" />
                    </div>
                    <div>
                        <h1 className="text-[32px] lg:text-[42px] leading-[38px] lg:leading-[50px] text-white font-bold">
                            Mutloqa bepul sinov <br /> darsiga yoziling!
                        </h1>
                        <p className="text-white/90 text-sm lg:text-base mt-2">
                            Hoziroq ro`yxatdan o`ting
                        </p>
                    </div>
                </div>
                <div>
                    <Dialog>
                        <DialogTrigger className="rounded-xl py-7 px-10 lg:py-9 lg:px-14 cursor-pointer bg-blue-950 hover:bg-blue-900 text-white font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full lg:w-auto">
                            Shu yerga bosing
                        </DialogTrigger>
                        <DialogContent>
                            <ContactModalContent></ContactModalContent>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}