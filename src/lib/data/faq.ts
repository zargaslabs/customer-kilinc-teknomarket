import { business, getWorkingHoursDisplay } from "@/lib/data/business"

export type FaqItem = {
  question: string
  answer: string
}

export const homeFaq: FaqItem[] = [
  {
    question: "Beyoğlu'nda uydu ve çanak anten kurulumu yapıyor musunuz?",
    answer:
      "Evet. Beyoğlu ve Kasımpaşa başta olmak üzere çanak anten kurulumu, uydu sistemi montajı, merkezi uydu sistemi ve uydu arıza servisi hizmeti veriyoruz.",
  },
  {
    question: "Uydu sinyali neden gidiyor?",
    answer:
      "Hava koşulları, çanak antenin konumundaki oynama veya kablo/LNB arızaları sinyal kaybının en sık nedenleridir. Kurulum ve arıza tespiti için bize ulaşabilirsiniz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Beyoğlu ve Kasımpaşa merkezli olarak Şişli, Beşiktaş, Fatih, Kağıthane, Eyüpsultan ve İstanbul Avrupa Yakası genelinde uydu kurulumu, anten servisi, kamera sistemi ve teknik servis hizmeti sunuyoruz.",
  },
  {
    question: "Telefon tamiri ne kadar sürer?",
    answer:
      "Ekran ve batarya değişimi gibi yaygın tamirler genellikle aynı gün içinde tamamlanır. Parça teminine bağlı arızalarda süre değişebilir, güncel bilgi için mağazamızla iletişime geçebilirsiniz.",
  },
  {
    question: "Kamera sistemi kurulumu için yerinde keşif yapıyor musunuz?",
    answer:
      "Evet, ev ve işyeri kamera sistemleri için ihtiyaca göre yerinde inceleme yapıp uygun sistemi öneriyoruz.",
  },
  {
    question: "Randevu almam gerekir mi?",
    answer:
      "Çoğu tamir ve teknik servis talebi için mağazamıza gelmeniz yeterlidir. Uydu, anten ve kamera kurulumu için önceden WhatsApp üzerinden yazmanızı öneririz.",
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
      "Uydu, çanak anten ve kamera sistemi kurulumları için WhatsApp'tan önceden yazmanızı öneririz, böylece size uygun bir zaman planlayabiliriz. Tamir işlemleri için randevu gerekmez.",
  },
]
