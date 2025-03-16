import { cn, formatPrice } from "@/lib/utils"
import Image from "next/image"
import React from "react"
import { Card, CardContent, CardHeader } from "../ui/card"

export const CourseCardSearch = ({
  course,
  isSelected,
  onClick,
}: SearchCourseCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "hover:bg-white-100/10 flex h-full w-auto cursor-pointer flex-col overflow-hidden rounded-lg transition duration-200 hover:scale-105",
        isSelected ? "border-custom-purple" : "border-slate-200"
      )}
    >
      <CardContent className="p-0">
        <CardHeader className="p-0">
          <div className="relative w-auto pt-[56.25%]">
            <Image
              unoptimized
              src={course?.image || "/placeholder.png"}
              alt={course.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform"
            />
          </div>
        </CardHeader>
        <div className="p-3">
          <div>
            <h2 className="line-clamp-1 font-semibold">{course.title}</h2>
            <p className="mt-1 line-clamp-2 text-sm">{course.description}</p>
          </div>
          <div className="mt-2">
            <p className="text-muted-foreground text-sm">
              By {course.teacherName}
            </p>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-semibold">
                {formatPrice(course?.price)}
              </span>
              <span className="text-sm">
                {course?.enrollments?.length} Enrolled
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
