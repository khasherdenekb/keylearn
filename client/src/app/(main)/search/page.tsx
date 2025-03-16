"use client"
import { LoadingSpinnerWithText } from "@/components/ui/loading-spinner"
import { useGetCoursesQuery } from "@/hooks/landing/use-courses-query"
import { useRouter, useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CourseCardSearch } from "@/components/course/course-card-search"
import { SelectedCourse } from "@/components/course/selected-course"

const Search = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const { data: courses, isLoading, isError } = useGetCoursesQuery()
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (courses) {
      if (id) {
        const course = courses.find((c: Course) => c.courseId === id)
        setSelectedCourse(course || courses[0])
      } else {
        setSelectedCourse(courses[0])
      }
    }
  }, [courses, id])

  if (isLoading) return <LoadingSpinnerWithText />
  if (isError || !courses) return <div>Failed to fetch courses</div>

  const handleCourseSelect = (courseId: string) => {
    const course = courses.find((c: Course) => c.courseId === courseId)
    if (course) {
      setSelectedCourse(course)
      router.push(`/search?id=${course.courseId}`)
    }
  }

  const handleEnrollNow = (courseId: string) => {
    router.push(`/checkout?step=1&id=${courseId}&showSignUp=false`)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground mx-auto flex h-full w-full flex-col"
    >
      <h1 className="mt-14 text-2xl font-normal">List of available courses</h1>
      <h2 className="mb-3 text-gray-500">{courses.length} courses available</h2>
      <div className="flex w-full flex-col-reverse gap-8 pt-2 pb-8 md:flex-row">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid basis-3/5 auto-rows-fr grid-cols-1 gap-6 xl:grid-cols-2"
        >
          {courses?.map((course: Course) => (
            <CourseCardSearch
              key={course.courseId}
              course={course}
              isSelected={selectedCourse?.courseId === course.courseId}
              onClick={() => handleCourseSelect(course.courseId)}
            />
          ))}
        </motion.div>
        {selectedCourse && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-primary-600 bg-customgreys-secondarybg h-fit min-w-[350px] basis-2/5 overflow-hidden rounded-lg border-2"
          >
            <SelectedCourse
              course={selectedCourse}
              handleEnrollNow={handleEnrollNow}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Search
