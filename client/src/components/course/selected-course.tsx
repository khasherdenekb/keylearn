import { formatPrice } from "@/lib/utils"
import React from "react"
import { Button } from "../ui/button"
import AccordionSections from "../features/accordion-sections"

export const SelectedCourse = ({
  course,
  handleEnrollNow,
}: SelectedCourseProps) => {
  return (
    <div className="overflow-hidden p-9">
      <div>
        <h3 className="text-3xl font-semibold">{course.title}</h3>
        <p className="pt-3 text-sm text-gray-400">
          By {course?.teacherName} |{" "}
          <span className="font-bold text-slate-600">
            {course?.enrollments?.length}
          </span>
        </p>
      </div>
      <div className="mt-5">
        <p className="mb-4 text-gray-500">{course.description}</p>
        <div className="mt-6">
          <h4 className="text-white-50/90 mb-2 font-semibold">
            Course content
          </h4>
          {/* accordion section */}
          <AccordionSections sections={course.sections} />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-semibold">
            {formatPrice(course.price)}
          </span>
          <Button
            onClick={() => handleEnrollNow(course.courseId)}
            className="bg-custom-purple hover:bg-custom-purple/90 cursor-pointer"
          >
            Enroll now
          </Button>
        </div>
      </div>
    </div>
  )
}
