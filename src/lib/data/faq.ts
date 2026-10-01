import { business, getWorkingHoursDisplay } from "@/lib/data/business"

export type FaqItem = {
  question: string
  answer: string
}

export const homeFaq: FaqItem[] = [
  {
    question: "İstanbul'da uydu ve çanak anten kurulumu yapıyor musunuz?",
    answer:
      "Evet. Çanak anten kurulumu, uydu sistemi montajı, merkezi uydu sistemi ve uydu arıza servisini İstanbul genelinde adresinize gelerek veriyoruz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Mağazamız Beyoğlu'nda. Uydu ve çanak anten, kamera sistemi, elektrik ve internet hizmetlerini İstanbul genelinde, Avrupa Yakası ve Anadolu Yakası'nda adresinizde sunuyoruz. Telefon ve bilgisayar tamirleri mağazamızda yapılır.",
  },
  {
    question: "Uydu sinyali neden gidiyor?",
    answer:
      "Hava koşulları, çanak antenin konumundaki oynama veya kablo/LNB arızaları sinyal kaybının en sık nedenleridir. Kurulum ve arıza tespiti için bize ulaşabilirsiniz.",
  },
  {
    question: "Kamera sistemi kurulumu için yerinde keşif yapıyor musunuz?",
    answer:
      "Evet, ev ve işyeri kamera sistemleri için ihtiyaca göre yerinde inceleme yapıp uygun sistemi öneriyoruz.",
  },
  {
    question: "Randevu almam gerekir mi?",
    answer:
      "Uydu, anten ve kamera kurulumu gibi yerinde hizmetler için önceden WhatsApp üzerinden yazmanızı öneririz. Tamir talepleri için mağazamıza doğrudan gelebilirsiniz.",
  },
  {
    question: "Telefon tamiri ne kadar sürer?",
    answer:
      "Süre, arızanın türüne ve parça durumuna göre değişir. Güncel bilgi için WhatsApp'tan yazabilir veya mağazamızla iletişime geçebilirsiniz.",
  },
]

export const contactFaq: FaqItem[] = [
  {
    question: "Mağazanıza nasıl ulaşabilirim?",
    answer: `${business.address.streetAddress}, ${business.address.addressLocality} adresindeyiz. Bu sayfadaki "Yol Tarifi Al" butonuyla Google Haritalar üzerinden kolayca yönlendirme alabilirsiniz.`,
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer: `${getWorkingHoursDisplay() ?? "Çalışma saatlerimiz için bize ulaşabilirsiniz"} saatleri arasında mağazamız açıktır; bu saatler dışında WhatsApp'tan yazabilirsiniz.`,
  },
  {
    question: "Sizi nasıl arayabilirim?",
    answer:
      "İletişim sayfasındaki telefon numaramızdan arayabilir veya WhatsApp'tan yazabilirsiniz; WhatsApp genellikle en hızlı dönüş aldığınız yöntemdir.",
  },
  {
    question: "Ürün veya tamir için önce yazmalı mıyım, yoksa direkt gelebilir miyim?",
    answer:
      "Çoğu tamir ve ürün talebi için doğrudan mağazamıza gelebilirsiniz; çanak anten, uydu ve kamera kurulumu gibi hizmetler için önce WhatsApp'tan yazmanızı öneririz.",
  },
  {
    question: "Kurulum hizmetleri için randevu gerekiyor mu?",
    answer:
      "Uydu, çanak anten ve kamera sistemi kurulumları için WhatsApp'tan önceden yazmanızı öneririz; İstanbul genelinde adresinize uygun bir zaman planlarız. Tamir işlemleri için randevu gerekmez.",
  },
]
