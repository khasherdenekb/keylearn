import axiosInstance from "@/config/axios-instance"
import { BACKEND_URL } from "@/config/constants"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

const fetchCourses = async () => {
  const { data } = await axiosInstance.get(`${BACKEND_URL}/courses`)
  return data?.data
}

export const useGetCoursesQuery = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  })
}

const createCourse = async (newCourse: {
  teacherId: string
  teacherName: string
}) => {
  const { data } = await axiosInstance.post(`${BACKEND_URL}/courses`, newCourse)
  return data
}

export const useCreateCourse = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] })
      toast.success("Course created successfully")
    },
    onError: () => {
      toast.error("Failed to create course")
    },
  })
}
