"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaPlay, FaStar } from "react-icons/fa6";
import { IoIosNotificationsOutline, IoIosTimer } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { CiFlag1 } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseDetailBanner from "./CourseDetailBanner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactModalContent from "@/components/ContactModalContent";
import banner from "@/assets/images/detailbanner.jpg";
import Image from "next/image";
import { useGetCourseByIdQuery } from "@/lib/services/api";

interface Description {
  icon: React.ReactNode;
  color: string;
  title: string;
  des: string;
}

const CourseDetail: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;
  
  const { data: findedElement, isLoading, error } = useGetCourseByIdQuery(id, {
    skip: !id,
  });

  const [modalOpen, setModalOpen] = useState(false);

  const description: Description[] = [
    {
      icon: <IoIosTimer />,
      color: "#1888c9",
      title: "Dars soati",
      des: `${findedElement?.lesson_time || "2"} soat`,
    },
    {
      icon: <FaRegFileAlt />,
      color: "#7c4bc0",
      title: "Dars davomiyligi",
      des: `${findedElement?.lesson_duration || "10"} oy`,
    },
    {
      icon: <RxAvatar />,
      color: "#f16101",
      title: "O'quvchilar soni",
      des: `${findedElement?.number_of_students || "12"} ta`,
    },
    {
      icon: <FaPlay />,
      color: "#1888c9",
      title: "T'alim turi",
      des: findedElement?.type_of_education || "Offline",
    },
    {
      icon: <CiFlag1 />,
      color: "#d23f3f",
      title: "Daraja",
      des: findedElement?.level || "Boshlang'ich",
    },
    {
      icon: <IoIosNotificationsOutline />,
      color: "#33a9bb",
      title: "Dars tili",
      des: findedElement?.language || "O'zbek tili",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (error || !findedElement) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-muted-foreground">Kurs topilmadi</p>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('uz-UZ').format(findedElement?.price || 0);

  return (
    <div className="w-full">
      <div className="flex justify-start w-full flex-col items-center">
        {/* Course Details Section */}
        <div className="flex items-start justify-between w-full py-[70px] px-[7%] max-w-[1440px] gap-8 flex-wrap lg:flex-nowrap">
          {/* Left Column - Course Info */}
          <div className="w-full max-w-[1000px]">
            <div>
              <h1 className="text-[38px] font-bold transition-colors duration-300 hover:text-orange-600">
                {findedElement?.title}
              </h1>
              <div className="text-orange-600 text-base flex items-center py-2.5 flex-wrap gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="transition-transform duration-200 hover:scale-125 hover:rotate-6 hover:text-orange-500"
                  />
                ))}
                <Badge variant="secondary" className="mx-5 text-sm">
                  {findedElement?.number_of_students} ta o`quvchi
                </Badge>
              </div>
            </div>
            <Image
              width={4000}
              height={2000}
              src={findedElement?.banner || banner}
              alt={findedElement?.title || "Course"}
              className="w-full rounded-lg shadow-md mt-6"
            />
          </div>

          {/* Right Column - Price & Details */}
          <div className="flex flex-col gap-8 w-full max-w-[340px]">
            {/* Price Card */}
            <Card className="transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  Kursning narxi
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-5">
                <h1 className="text-[28px] font-semibold leading-tight">
                  {formattedPrice} so'm
                </h1>
                <Button
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="w-4/5 bg-orange-600 cursor-pointer hover:bg-orange-700 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Kursni sotib olish
                </Button>
              </CardContent>
            </Card>
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
              <DialogContent className="max-w-md">
                <ContactModalContent />
              </DialogContent>
            </Dialog>

            {/* Details List */}
            <div className="flex flex-col w-full max-w-[340px] gap-0">
              {description?.map((item, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border-t-0 first:border-t rounded-none first:rounded-t-lg last:rounded-b-lg"
                >
                  <CardContent className="flex items-center gap-2">
                    <div
                      className="min-w-10 h-10 rounded-full text-xl flex items-center justify-center text-white transition-transform duration-300 hover:rotate-12 hover:scale-110"
                      style={{ backgroundColor: item?.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex gap-1 flex-wrap items-center">
                      <p className="text-base text-muted-foreground m-0">
                        {item.title}:
                      </p>
                      <span className="font-bold text-[15px]">
                        {item?.des}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Course Banner */}
        <CourseDetailBanner findedElement={findedElement} />
      </div>
    </div>
  );
};

export default CourseDetail;