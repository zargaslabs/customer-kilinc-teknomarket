import { Fragment } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export type BreadcrumbEntry = {
  name: string
  path: string
}

type PageBreadcrumbsProps = {
  items: BreadcrumbEntry[]
  variant?: "light" | "dark"
  className?: string
}

export function PageBreadcrumbs({
  items,
  variant = "light",
  className,
}: PageBreadcrumbsProps) {
  const isDark = variant === "dark"

  return (
    <Breadcrumb className={cn("py-4", className)}>
      <BreadcrumbList className={cn(isDark && "text-slate-400")}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <Fragment key={item.path}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className={cn(isDark && "text-white")}>
                    {item.name}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={<Link href={item.path} />}
                    className={cn(isDark && "hover:text-white")}
                  >
                    {item.name}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator className={cn(isDark && "text-slate-600")} />
              )}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
