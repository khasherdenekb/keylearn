import { Skeleton } from "@/components/ui/skeleton"

export const LoadingSkeleton = () => {
  return (
    <div>
      {/* Hero section skeleton */}
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          {/* Icon skeleton */}
          <Skeleton className="mx-auto size-16 rounded-full md:size-20" />

          {/* Heading skeleton */}
          <Skeleton className="mx-auto h-10 w-3/4 max-w-screen-lg md:h-16" />

          {/* Description skeleton */}
          <Skeleton className="mx-auto h-6 w-2/3 max-w-screen-md" />

          {/* Button skeleton */}
          <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-4 w-52" />
          </div>
        </div>

        {/* Hero image skeleton */}
        <Skeleton className="mx-auto h-[524px] w-full rounded-2xl" />
      </section>

      {/* Course section skeleton */}
      <section className="mt-12">
        {/* Page header skeletons */}
        <div className="mb-8">
          <Skeleton className="mb-4 h-10 w-1/3" />
          <Skeleton className="h-6 w-2/3" />
        </div>

        {/* Course cards skeleton matching CourseCardSearch structure */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex h-full w-auto flex-col overflow-hidden rounded-lg border-2 border-transparent"
              >
                {/* Image with correct aspect ratio */}
                <div className="relative w-auto pt-[56.25%]">
                  <Skeleton className="absolute inset-0 h-full w-full" />
                </div>

                <div className="p-3">
                  {/* Course title */}
                  <Skeleton className="h-6 w-5/6" />

                  {/* Course description */}
                  <div className="mt-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="mt-1 h-4 w-4/5" />
                  </div>

                  <div className="mt-2">
                    {/* Teacher name */}
                    <Skeleton className="h-4 w-2/3" />

                    {/* Price and enrollment info */}
                    <div className="mt-1 flex items-center justify-between">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default LoadingSkeleton
