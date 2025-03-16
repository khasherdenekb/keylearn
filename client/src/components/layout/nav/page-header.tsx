import { cn } from "@/lib/utils"

function PageHeader({
  className,
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <section className={cn("border-grid", className)} {...props}>
      <div className="container-wrapper">
        <div className="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
          {children}
        </div>
      </div>
    </section>
  )
}

function PageHeaderHeading({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h1
      className={cn(
        "text-3xl leading-tight font-bold tracking-tighter md:text-4xl lg:leading-[1.1]",
        className
      )}
      {...props}
    >
      {props.children}
    </h1>
  )
}

function PageHeaderDescription({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      className={cn(
        "text-foreground max-w-2xl text-lg font-light text-balance",
        className
      )}
      {...props}
    />
  )
}

function PageActions({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start gap-2 pt-2",
        className
      )}
      {...props}
    />
  )
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading }
