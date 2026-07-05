import Link from "next/link"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ReviewButtonProps = {
  label?: string
  variant?: "solid" | "outline"
  size?: "default" | "lg"
  className?: string
}

export function ReviewButton({
  label = "Google'da Yorum Yap",
  variant = "outline",
  size = "default",
  className,
}: ReviewButtonProps) {
  return (
    <Button
      variant={variant === "outline" ? "outline" : "default"}
      render={<Link href="/yorum-birak" />}
      nativeButton={false}
      className={cn(size === "lg" && "h-11 px-5 text-base", className)}
    >
      <Star /> {label}
    </Button>
  )
}
