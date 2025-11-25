"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactModalContent from "@/components/ContactModalContent";

interface DetailDesc {
  detail_title: string;
  detail_description: string;
}

interface CoursesDetail {
  detail_desc?: DetailDesc[];
  detail_image?: string[];
}

interface FindedElement {
  courses_detail?: CoursesDetail;
}

interface CourseDetailBannerProps {
  findedElement?: FindedElement;
}

const CourseDetailBanner: React.FC<CourseDetailBannerProps> = ({
  findedElement,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const detailDesc = findedElement?.courses_detail?.detail_desc || [];

  return (
    <div className="w-full max-w-[1240px] p-0 font-sans mx-auto overflow-hidden relative">
      {/* Кнопки вкладок */}
      <div className="flex gap-0 mb-0 flex-wrap bg-gray-200/30 sm:justify-center md:justify-start">
        {detailDesc.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-5 px-8 font-bold text-lg rounded-none transition-all duration-400 relative w-full sm:w-auto md:w-auto ${activeTab === index
              ? "bg-linear-to-br from-teal-600 via-teal-500 to-teal-600 text-white shadow-none -translate-y-0.5"
              : "bg-gray-200/30 text-gray-800 hover:bg-gray-200/50"
              } ${index === 2 ? "sm:flex sm:justify-center sm:w-full md:w-auto" : ""}`}
          >
            {item?.detail_title}
            {activeTab === index && (
              <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-20 border-t-teal-600" />
            )}
          </button>
        ))}
      </div>

      {/* Содержимое вкладки */}
      <Card className="rounded-none rounded-b-lg border-t-0 mb-10">
        <CardContent className="p-8 min-h-[300px]">
          {detailDesc[activeTab] && (
            <div className="space-y-6">
              <div>
                <h1 className="text-[28px] text-gray-800 font-bold mb-5 relative transition-colors duration-300 hover:text-teal-600 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-[60px] after:h-[3px] after:bg-linear-to-r after:from-teal-600 after:to-teal-500 after:transition-all after:duration-400 hover:after:w-[120px]">
                  {detailDesc[activeTab]?.detail_title}
                </h1>
                <div
                  className="text-base leading-relaxed text-gray-600 mb-4 transition-all duration-300 relative hover:text-gray-700 hover:translate-x-1 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: detailDesc[activeTab]?.detail_description || "",
                  }}
                />
              </div>

              <div className="pt-4 border-t">
                <p className="text-base leading-relaxed text-gray-600 space-y-2">
                  <strong className="block text-gray-900 mb-2">
                    Murojaat uchun:
                  </strong>
                  <span className="block">Telefon : +99871 203-88-00</span>
                </p>
                <Dialog>

                  <DialogTrigger className="py-2 px-6 rounded-lg text-white font-medium mt-6 bg-linear-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 transition-all duration-400 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-[1.02] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-600 hover:before:left-full">
                    Endi Frontend dasturchi bolaman
                  </DialogTrigger>

                  <DialogContent >
                    <ContactModalContent />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetailBanner;