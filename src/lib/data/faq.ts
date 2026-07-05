export type FaqItem = {
  question: string
  answer: string
}

export const homeFaq: FaqItem[] = [
  {
    question: "Telefon tamiri ne kadar sürer?",
    answer:
      "Ekran ve batarya değişimi gibi yaygın tamirler genellikle aynı gün içinde tamamlanır. Parça teminine bağlı arızalarda süre değişebilir, güncel bilgi için mağazamızla iletişime geçebilirsiniz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Beyoğlu ve Kasımpaşa merkezli olarak Şişli, Beşiktaş, Fatih, Kağıthane, Eyüpsultan ve İstanbul Avrupa Yakası genelinde uydu kurulumu, kamera sistemi ve teknik servis hizmeti sunuyoruz.",
  },
  {
    question: "Kamera sistemi kurulumu için yerinde keşif yapıyor musunuz?",
    answer:
      "Evet, ev ve işyeri kamera sistemleri için ihtiyaca göre yerinde inceleme yapıp uygun sistemi öneriyoruz.",
  },
  {
    question: "Uydu sinyali neden gidiyor?",
    answer:
      "Hava koşulları, çanak antenin konumundaki oynama veya kablo/LNB arızaları sinyal kaybının en sık nedenleridir. Kurulum ve arıza tespiti için bize ulaşabilirsiniz.",
  },
  {
    question: "Randevu almam gerekir mi?",
    answer:
      "Çoğu tamir ve teknik servis talebi için mağazamıza gelmeniz yeterlidir. Kurulum hizmetleri için önceden WhatsApp üzerinden yazmanızı öneririz.",
  },
]

export const contactFaq: FaqItem[] = [
  {
    question: "Mağazanıza nasıl ulaşabilirim?",
    answer:
      "Camiikebir, Kızılay Meydanı Cd. No:9, Beyoğlu adresindeyiz. Bu sayfadaki \"Yol Tarifi Al\" butonuyla Google Haritalar üzerinden kolayca yönlendirme alabilirsiniz.",
  },
  {
    question: "Sizi nasıl arayabilirim?",
    answer:
      "İletişim sayfasındaki telefon numaramızdan arayabilir veya WhatsApp'tan yazabilirsiniz; WhatsApp genellikle en hızlı dönüş aldığınız yöntemdir.",
  },
  {
    question: "Ürün veya tamir için önce yazmalı mıyım, yoksa direkt gelebilir miyim?",
    answer:
      "Çoğu tamir ve ürün talebi için doğrudan mağazamıza gelebilirsiniz; kamera ve uydu kurulumu gibi hizmetler için önce WhatsApp'tan yazmanızı öneririz.",
  },
  {
    question: "Kurulum hizmetleri için randevu gerekiyor mu?",
    answer:
      "Uydu ve kamera sistemi kurulumları için WhatsApp'tan önceden yazmanızı öneririz, böylece size uygun bir zaman planlayabiliriz. Tamir işlemleri için randevu gerekmez.",
  },
]
