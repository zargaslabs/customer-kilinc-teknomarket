# TASKS.md

## Current Status (October 2026)

The site is built and live on a temporary Vercel address
(https://customer-kilinc-teknomarket.vercel.app). Content uses real business
data. The real domain has not been purchased yet; the remaining open items are
in Sprint 6, Sprint 7 and Sprint 8.

Original demo goal, kept for reference:

Main demo goal:

- Professional homepage
- SEO-ready structure
- WhatsApp-focused conversion
- Mobile-friendly design
- Clear service positioning

---

## Sprint 1 - Project Setup

- [x] Create Next.js project
- [x] Install TypeScript, Tailwind, ESLint
- [x] Install shadcn/ui
- [x] Install Lucide React
- [x] Framer Motion / Motion: not needed, removed (CSS transitions are enough)
- [x] next-sitemap: not needed, removed (native `src/app/sitemap.ts` and `robots.ts` are used)
- [x] Configure base layout
- [x] Add global styles
- [x] Create reusable UI components
- [x] Confirm mobile layout works

---

## Sprint 2 - Homepage MVP

Homepage sections:

- [x] Header
- [x] Hero section
- [x] Main service cards
- [x] Why choose us section
- [x] Service area section (all of Istanbul, both sides; store in Beyoğlu)
- [x] Process section
- [x] FAQ section
- [x] Google Maps / address section
- [x] WhatsApp CTA section
- [x] Footer

Hero must communicate:

“Kılınç Teknomarket; telefon tamiri, bilgisayar servisi, uydu kurulumu, kamera sistemleri ve teknoloji ürünleri için Beyoğlu merkezli güvenilir teknoloji çözüm noktasıdır.”

---

## Sprint 3 - SEO Foundation

- [x] Add homepage metadata
- [x] Add Open Graph metadata
- [x] Add canonical URL setup
- [x] Add LocalBusiness schema
- [x] Add Organization schema
- [x] Add FAQ schema
- [x] Add robots.txt
- [x] Add sitemap.xml
- [x] Add proper heading structure
- [x] Add image alt text rules
- [ ] Check Lighthouse SEO score

---

## Sprint 4 - Service Pages

Create pages:

- [x] Telefon Tamiri
- [x] Bilgisayar Tamiri
- [x] Kamera Sistemleri
- [x] Uydu Sistemleri
- [x] Elektrik ve İnternet Hizmetleri
- [x] Ürünler

Each service page must include:

- [x] H1
- [x] Short intro
- [x] Common problems
- [x] Process
- [x] Why choose us
- [x] Service area
- [x] FAQ
- [x] WhatsApp CTA
- [x] SEO metadata
- [x] Service schema

---

## Sprint 5 - Contact and Trust

- [x] Contact page
- [x] Google Maps embed
- [x] Address
- [x] Phone / WhatsApp
- [x] Working hours
- [x] Directions button
- [x] Google review CTA
- [x] Social media links
- [x] Footer NAP consistency

---

## Sprint 6 - Google Review System

Goal:

Make it easy for customers to leave Google reviews.

Tasks:

- [x] Get direct Google review link
- [ ] Generate QR code
- [ ] Create printable review card
- [x] Create WhatsApp review message
- [x] Add review CTA to website
- [x] Add review link to footer
- [x] Add review link to contact page

Printable card text:

“Memnun kaldıysanız 30 saniyede Google yorumu bırakabilir misiniz? Desteğiniz bizim için çok değerli.”

---

## Sprint 7 - Deploy

- [x] Deploy to Vercel or Netlify
- [x] Test mobile
- [x] Test desktop
- [x] Test WhatsApp buttons
- [x] Test contact links
- [x] Test Google Maps
- [x] Test metadata
- [x] Test sitemap
- [ ] Check Lighthouse
- [ ] Send demo link to business owner

---

## Sprint 8 - After Launch

- [ ] Buy the real domain, connect it on Vercel, update `NEXT_PUBLIC_SITE_URL`
- [ ] Update the website field in Google Business Profile with the real domain
- [ ] Connect Google Analytics
- [ ] Connect Google Search Console
- [ ] Submit sitemap
- [x] Align site with Google Business Profile (service area İstanbul, hours, phone, Instagram; category change is under Google review)
- [x] Add real photos (store, products, satellite)
- [ ] Add real job photos for camera, electrical/internet and computer services
- [x] Add business phone number
- [x] Add final working hours
- [ ] Review first SEO performance after indexing
