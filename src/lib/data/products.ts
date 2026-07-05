import {
  Battery,
  BatteryCharging,
  Cable,
  Headphones,
  Package,
  Smartphone,
  Speaker,
  TabletSmartphone,
  Tv,
  type LucideIcon,
} from "lucide-react"

export type Product = {
  icon: LucideIcon
  label: string
}

export const products: Product[] = [
  { icon: Smartphone, label: "Telefon Kılıfları" },
  { icon: TabletSmartphone, label: "Tablet Kılıfları" },
  { icon: BatteryCharging, label: "Şarj Aletleri" },
  { icon: Cable, label: "Data Kabloları" },
  { icon: Headphones, label: "Bluetooth Kulaklıklar" },
  { icon: Speaker, label: "Hoparlörler" },
  { icon: Battery, label: "Powerbank" },
  { icon: Tv, label: "TV Kumandaları" },
  { icon: Package, label: "Küçük Ev Elektroniği" },
]

export const productsWhatsAppMessage =
  "Merhaba, stok durumu hakkında bilgi almak istiyorum."
