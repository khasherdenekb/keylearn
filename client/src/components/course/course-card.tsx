import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"
import { Badge } from "../ui/badge"

const CourseCard = ({ course, onGoToCourse }: CourseCardProps) => {
  return (
    <Card
      className="hover:bg-white-100/10 flex h-[340px] w-full cursor-pointer flex-col overflow-hidden border-none transition duration-200 hover:scale-105 xl:h-[380px]"
      onClick={() => onGoToCourse(course)}
    >
      <CardHeader className="h-[350px] overflow-hidden p-0 xl:h-[380px]">
        <Image
          unoptimized
          src={course.image ?? "/placeholder.png"}
          alt={course.title}
          width={400}
          height={350}
          className="h-full w-full object-cover transition-transform"
          priority
        />
      </CardHeader>
      <CardContent className="flex h-full w-full flex-grow flex-col justify-between p-6">
        <CardTitle className="text-md line-clamp-2 font-semibold lg:text-lg">
          {course.title}: {course.description}
        </CardTitle>

        <div className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarImage alt={course.teacherName} />
            <AvatarFallback className="bg-muted text-black">
              {course.teacherName[0]}
            </AvatarFallback>
          </Avatar>

          <p className="text-muted-foreground text-sm">{course.teacherName}</p>
        </div>

        <CardFooter className="flex justify-between p-0">
          <Badge>{course.category}</Badge>
          <span className="text-md font-bold text-zinc-800">
            {formatPrice(course.price)}
          </span>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default CourseCard
