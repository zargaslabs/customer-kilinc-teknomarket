import Link from "next/link"
import { Menu, Wrench } from "lucide-react"

import { business } from "@/lib/data/business"
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"
import { CallButton } from "@/components/cta/CallButton"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Neden Biz", href: "/#neden-biz" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "SSS", href: "/#sss" },
  { label: "İletişim", href: "/iletisim" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-base font-semibold text-foreground"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Wrench className="size-4.5" />
          </span>
          {business.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallButton className="hidden lg:inline-flex" />
          <WhatsAppButton className="hidden sm:inline-flex" />

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="md:hidden" />
              }
            >
              <Menu />
              <span className="sr-only">Menüyü aç</span>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{business.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={<Link href={item.href} />}
                    nativeButton={false}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 p-4">
                <WhatsAppButton className="w-full" />
                <CallButton className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
