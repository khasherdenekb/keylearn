"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const spinnerVariants =
  "w-16 h-16 border-4 border-t-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  (props, ref) => {
    const { className, ...rest } = props
    return (
      <div ref={ref} className={cn(spinnerVariants, className)} {...rest} />
    )
  }
)

const LoadingSpinnerWithText = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    className?: string
    text?: string
  }
>(({ className, text = "Loading...", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-background/50 fixed inset-0 flex animate-pulse items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      <LoadingSpinner className="size-8" />
      {text && <p>{text}</p>}
    </div>
  )
})

LoadingSpinner.displayName = "LoadingSpinner"
LoadingSpinnerWithText.displayName = "LoadingSpinnerWithText"

export { LoadingSpinner, LoadingSpinnerWithText }
