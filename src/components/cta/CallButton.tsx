"use client"

import { Phone } from "lucide-react"
import { toast } from "sonner"

import { business, getPhoneHref } from "@/lib/data/business"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CallButtonProps = {
  label?: string
  variant?: "solid" | "outline"
  size?: "default" | "lg"
  className?: string
}

export function CallButton({
  label = "Hemen Ara",
  variant = "outline",
  size = "default",
  className,
}: CallButtonProps) {
  const isConfigured = Boolean(business.phone)

  return (
    <Button
      variant={variant === "outline" ? "outline" : "default"}
      render={<a href={getPhoneHref()} />}
      nativeButton={false}
      onClick={(event) => {
        if (!isConfigured) {
          event.preventDefault()
          toast.info(
            "Telefon numarası yakında eklenecek. Şimdilik WhatsApp'tan yazabilirsiniz."
          )
        }
      }}
      className={cn(size === "lg" && "h-11 px-5 text-base", className)}
    >
      <Phone /> {label}
    </Button>
  )
}
