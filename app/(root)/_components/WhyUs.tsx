'use client';

import React, { useState } from 'react';
import mainImg from '../../../assets/images/benifits.jpg'
import icon1 from '../../../assets/images/finImage2.png'
import icon2 from '../../../assets/images/finImage3.png'
import icon3 from '../../../assets/images/finImage4.png'
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactModalContent from "@/components/ContactModalContent";
import Image from 'next/image';

interface Feature {
  title: string;
  img: string;
}

const WhyUs: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const features: Feature[] = [
    {
      title: 'Bilimlar amaliyotgan ko\'chadi',
      img: icon1.src,
    },
    {
      title: 'Amaliyot real loyiha ishtirokidir.',
      img: icon2.src,
    },
    {
      title: 'Natijada o\'zingiz StartUp yaratasiz',
      img: icon3.src,
    },
  ];

  return (
    <div className="py-24   relative bg-white">
      <div className=" mx-auto  items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div data-aos="fade-right" className="flex justify-center lg:justify-start">
            <div className="relative overflow-hidden  shadow-2xl w-full h-[400px] md:h-[600px] hover:shadow-3xl transition-all duration-300">
              <Image
                width={4000}
                height={2000}
                src={mainImg.src}
                alt="FinTech Team"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Section */}
          <div data-aos="fade-left" className="space-y-8 lg:pr-10 px-4">
            <h2 className="text-xl md:text-3xl lg:text-5xl leading-snug font-bold text-[#012237]">
              Dasturlashni nega aynan FinTechHub`da o`rganish kerak?
            </h2>

            {/* Features Grid - 3 Columns */}
            <div className="grid grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      width={1080}
                      height={720}
                    />
                  </div>
                  <h4 className="text-center text-sm md:text-base font-semibold text-[#012237] group-hover:text-[#DC143C] transition-colors duration-300">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="w-full h-16 text-lg font-bold cursor-pointer text-white bg-linear-to-r from-[#DC143C] to-[#B91C3C] rounded-lg hover:from-[#B91C3C] hover:to-[#991B3D] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-lg hover:shadow-xl mt-4"
            >
              Ko`proq ma`lumot olmoqchiman
            </button>

            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
              <DialogContent className="max-w-md">
                <ContactModalContent />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;