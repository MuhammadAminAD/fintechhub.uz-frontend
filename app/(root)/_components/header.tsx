"use client"

import { Styles } from "@/styles/styles";
import { TypeAnimation } from "react-type-animation";
export default function Header() {
    return (
        <div className={`h-screen header-background`}>
            <div className={`header-filter ${Styles.flex_center}`}>
                <div className="max-w-4/5">
                    <p className="text-neutral-100 text-center text-xs sm:text-md md:text-lg ">IT kurslari bo`yicha O`zbekistondagi yirik laboratoriyaga xush kelibsiz!</p>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white text-center mx-auto font-black leading-tight">
                        <TypeAnimation
                            sequence={[
                                'Dasturlashdagi ilk qadam FinTechHub dan boshlanadi!',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        {/* Dasturlashdagi ilk qadam <span className="text-blue-500">FINTECHHUB</span>dan boshlanadi! */}
                    </h1>

                </div>
            </div>
        </div>
    )
}
