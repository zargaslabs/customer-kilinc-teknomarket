"use client"

import { MessageCircle } from "lucide-react"
import { toast } from "sonner"

import { getWhatsAppUrl } from "@/lib/data/business"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type WhatsAppButtonProps = {
  message?: string
  label?: string
  variant?: "solid" | "outline"
  size?: "default" | "lg"
  className?: string
}

export function WhatsAppButton({
  message,
  label = "WhatsApp'tan Hemen Yaz",
  variant = "solid",
  size = "default",
  className,
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(message)
  const isConfigured = href !== "#"

  return (
    <Button
      variant={variant === "outline" ? "outline" : "default"}
      render={<a href={href} target="_blank" rel="noopener noreferrer" />}
      nativeButton={false}
      onClick={(event) => {
        if (!isConfigured) {
          event.preventDefault()
          toast.info(
            "WhatsApp hattımız yakında aktif olacak. Şimdilik mağazamızı ziyaret edebilirsiniz."
          )
        }
      }}
      className={cn(
        size === "lg" && "h-11 px-5 text-base",
        variant === "solid" &&
          "bg-(--whatsapp) text-white hover:bg-(--whatsapp)/90",
        variant === "outline" &&
          "bg-transparent border-(--whatsapp) text-(--whatsapp) hover:bg-(--whatsapp)/10",
        className
      )}
    >
      <MessageCircle /> {label}
    </Button>
  )
}

export function WhatsAppFloatingButton() {
  const href = getWhatsAppUrl()
  const isConfigured = href !== "#"

  return (
    <Button
      render={<a href={href} target="_blank" rel="noopener noreferrer" />}
      nativeButton={false}
      onClick={(event) => {
        if (!isConfigured) {
          event.preventDefault()
          toast.info(
            "WhatsApp hattımız yakında aktif olacak. Şimdilik mağazamızı ziyaret edebilirsiniz."
          )
        }
      }}
      aria-label="WhatsApp'tan Hemen Yaz"
      className="fixed right-5 bottom-5 z-50 size-14 rounded-full bg-(--whatsapp) p-0 text-white shadow-lg hover:bg-(--whatsapp)/90 [&_svg]:size-6"
    >
      <MessageCircle />
    </Button>
  )
}
