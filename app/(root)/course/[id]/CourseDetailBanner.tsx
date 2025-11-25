"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

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
  findedElement: FindedElement;
}

const CourseDetailBanner: React.FC<CourseDetailBannerProps> = ({
  findedElement,
}) => {
  const [columns, setColumns] = useState<number>(4);

  // Function to distribute images into columns with adaptive column count
  const distributeImagesIntoColumns = (
    images: string[],
    columnCount: number
  ): string[][] => {
    if (!images || images.length === 0) return [];

    // Create array of column arrays
    const columns: string[][] = Array(columnCount)
      .fill(null)
      .map(() => []);

    // Use modulus and division to distribute items evenly
    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(image);
    });

    return columns;
  };

  // Update columns based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setColumns(2);
      } else if (window.innerWidth <= 768) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = findedElement?.courses_detail?.detail_image || [];
  const imageColumns = distributeImagesIntoColumns(images, columns);

  return (
    <div className="w-full max-w-[1240px] p-0 font-sans mx-auto overflow-hidden relative">
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="w-full justify-start rounded-none h-auto p-0 bg-gray-200/30">
          <TabsTrigger
            value="about"
            className="py-5 px-8 text-lg font-bold rounded-none data-[state=active]:bg-gradient-to-br data-[state=active]:from-teal-600 data-[state=active]:via-teal-500 data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:-translate-y-0.5 transition-all duration-400 relative"
          >
            Kurs haqida
            <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-teal-600 opacity-0 data-[state=active]:opacity-100 transition-opacity" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-0">
          <Card className="rounded-none rounded-b-lg border-t-0">
            <CardContent className="p-8 min-h-[300px]">
              <div className="space-y-8">
                {findedElement?.courses_detail?.detail_desc?.map((item, index) => (
                  <div
                    key={index}
                    className="animate-[slideInContent_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards] opacity-0"
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <h1 className="text-[28px] text-gray-800 font-bold mb-5 relative transition-colors duration-300 hover:text-teal-600 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-teal-600 after:to-teal-500 after:transition-all after:duration-400 hover:after:w-[120px]">
                      {item?.detail_title}
                    </h1>
                    <div
                      className="text-base leading-relaxed text-gray-600 mb-4 transition-all duration-300 relative hover:text-gray-700 hover:translate-x-1 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: item?.detail_description,
                      }}
                    />
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <p className="text-base leading-relaxed text-gray-600 space-y-2">
                    <strong className="block text-gray-900 mb-2">
                      Murojaat uchun:
                    </strong>
                    <span className="block">Telefon : +99871 203-88-00</span>
                  </p>
                  <Button
                    size="lg"
                    className="mt-6 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 transition-all duration-400 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-[1.02] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-600 hover:before:left-full"
                  >
                    Endi Frontend dasturchi bolaman
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <style jsx>{`
        @keyframes slideInContent {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CourseDetailBanner;