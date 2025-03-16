"use client"
import { CourseCardSearch } from "@/components/course/course-card-search"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/nav/page-header"
import { Button } from "@/components/ui/button"
import { useGetCoursesQuery } from "@/hooks/landing/use-courses-query"
import { GraduationCap, Zap } from "lucide-react"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { LoadingSkeleton } from "@/components/course/landing-loading-skeleton"

const data = {
  icon: <GraduationCap className="size-6" />,
  heading: "Courses for everyone",
  description:
    "Discover our library of courses on various skills and topics. Learn at your own pace and level up your skills.",
  button: {
    text: "Search courses",
    icon: <Zap className="ml-2 size-4" />,
    url: "/search",
  },
  trustText: "We've taught more than 25.000 students worldwide",
  imageSrc: "/assets/landing.jpg",
  imageAlt: "course landing image",
}

const Landing = () => {
  const router = useRouter()
  const { data: courses, isLoading, isError } = useGetCoursesQuery()

  const handleCourseClick = (courseId: string) => {
    router.push(`/search?id=${courseId}`)
  }

  if (isLoading) return <LoadingSkeleton />

  return (
    <div>
      {/* Hero section */}
      <section className="flex flex-col gap-5 pt-48">
        <div className="relative flex flex-col gap-5">
          <div
            style={{
              transform: "translate(-50%, -50%)",
            }}
            className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
          >
            <div className="size-full rounded-full border p-16 md:p-32">
              <div className="size-full rounded-full border"></div>
            </div>
          </div>
          <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
            {data.icon}
          </span>
          <h2 className="mx-auto max-w-screen-lg text-center text-3xl font-medium text-balance md:text-6xl">
            {data.heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-screen-md text-center md:text-lg">
            {data.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
            <Button size="lg" asChild>
              <a href={data.button.url}>
                {data.button.text} {data.button.icon}
              </a>
            </Button>
            {data.trustText && (
              <div className="text-muted-foreground text-xs">
                {data.trustText}
              </div>
            )}
          </div>
        </div>
        <div className="relative mx-auto h-[524px] w-full">
          <Image
            src={data.imageSrc}
            alt={data.imageAlt}
            layout="fill"
            className="mx-auto rounded-2xl object-cover"
          />
        </div>
      </section>
      {/* Course section */}
      <section>
        <PageHeader>
          <PageHeaderHeading>Featured Courses</PageHeaderHeading>
          <PageHeaderDescription>
            Here you can explore our range of courses and choose one that aligns
            with your learning objectives. Use the filters below to tailor your
            search and find the perfect course for your needs.
          </PageHeaderDescription>
        </PageHeader>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses &&
            courses.slice(0, 4).map((course: Course, index: number) => (
              <motion.div
                key={course.courseId}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ amount: 0.4 }}
              >
                <CourseCardSearch
                  course={course}
                  onClick={() => handleCourseClick(course.courseId)}
                />
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Landing
