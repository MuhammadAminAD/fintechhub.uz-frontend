"use client";

import { useParams } from "next/navigation";
import FixedBanner from "@/components/FixedBanner";
import CourseDetail from "./CourseDetail";
import { useGetCourseByIdQuery } from "@/lib/services/api";

export default function page() {
  const params = useParams();
  const id = params?.id as string;

  const { data: course, isLoading } = useGetCourseByIdQuery(id, {
    skip: !id,
  });

  
  const bannerTitle = course?.title || "Kurs haqida";

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

  return (
    <div>
      <FixedBanner title={`${bannerTitle} Kurs haqida`} />
      <CourseDetail />
    </div>
  );
}