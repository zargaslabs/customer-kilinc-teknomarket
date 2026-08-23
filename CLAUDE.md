# CLAUDE.md

## Project Name

Kılınç Teknomarket Website

## Main Goal

This project is a SEO-first, mobile-first, conversion-focused local business website for Kılınç Teknomarket.

The website must help the business:

- Rank better on Google
- Get more WhatsApp leads
- Build trust with local customers
- Promote repair, installation and product services
- Support Google Business Profile visibility

This is not only a basic brochure website. It is a customer acquisition website.

---

## Business Context

Kılınç Teknomarket is a technology market and technical service business located in Beyoğlu / Kasımpaşa, Istanbul.

The business provides:

- Phone sales
- Phone repair
- Tablet repair
- Computer and laptop repair
- Satellite installation
- Dish antenna installation
- Security camera system sales and installation
- Electrical fault services
- Internet and modem support
- Phone accessories
- Tablet accessories
- TV remote controls
- Chargers, cables, headphones, speakers, powerbanks
- Occasional technology product sales such as airfryer, laptop and game console

The business can serve not only Beyoğlu/Kasımpaşa but also many districts on the European Side of Istanbul.

---

## Core Priorities

Always follow this priority order:

1. SEO-first
2. Mobile-first
3. Conversion-first
4. Performance-first
5. Clean and maintainable code
6. Trust-building design

---

## Tech Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Framer Motion / Motion only when needed
- next-sitemap
- React Hook Form
- Zod

Do not install unnecessary packages.

---

## Coding Rules

- Use TypeScript.
- Prefer Server Components where possible.
- Use reusable components.
- Avoid duplicated UI code.
- Keep components small and readable.
- Use semantic HTML.
- Avoid magic numbers.
- Use clear naming.
- Keep folder structure simple.
- Do not over-engineer.
- Do not create unnecessary abstractions.
- Do not use heavy animations.
- Do not add features that are not in TASKS.md unless explicitly requested.

---

## UI / UX Rules

The website must feel:

- Modern
- Trustworthy
- Local
- Professional
- Clear
- Fast
- Mobile-friendly

Design direction:

- Dark hero section
- Blue / white / dark color palette
- Strong WhatsApp CTA buttons
- Service cards
- Trust indicators
- Clear contact information
- Google Maps section
- FAQ section
- Footer with NAP information

Avoid:

- Too many colors
- Heavy animations
- Complex layouts
- Unreadable typography
- Stock-photo heavy design
- Fake corporate feeling

---

## SEO Rules

SEO is not a later task. SEO must be built into the project from the first commit.

Every page must have:

- One H1
- Proper title
- Meta description
- Canonical URL
- Open Graph metadata
- Semantic HTML
- Image alt text
- Internal links
- WhatsApp CTA
- Local business information where relevant

Use schema where appropriate:

- LocalBusiness
- Organization
- Service
- FAQPage
- BreadcrumbList

Do not keyword-stuff.

Do not create fake district pages at MVP stage.

Do not create duplicate pages for every district unless Search Console data proves the need later.

---

## Local SEO Rules

Business name must be consistent:

Kılınç Teknomarket

Address:

Camiikebir, Kızılay Meydanı Cd. No:9, 34421 Beyoğlu/İstanbul

Service area:

Istanbul European Side

Working hours:

Her gün 08:00 - 21:00

Instagram handle (must stay exactly as the business wrote it, it is an account
address — the "Kılınç Teknomarket" spelling rule does not apply here):

Kilinc_tekno_market

Main local keywords.

The business explicitly wants to rank for "uydu" and "anten" searches, so these
come first:

- Beyoğlu uydu servisi
- Beyoğlu çanak anten
- çanak anten kurulumu Beyoğlu
- uydu kurulumu Beyoğlu
- Kasımpaşa uydu servisi
- Kasımpaşa çanak anten
- uydu arıza servisi
- anten kurulumu
- telefon tamiri Beyoğlu
- telefon tamiri Kasımpaşa
- kamera sistemi kurulumu Beyoğlu
- bilgisayar tamiri Beyoğlu
- laptop tamiri Beyoğlu
- elektrik arıza servisi
- internet arızası
- İstanbul Avrupa Yakası teknik servis

---

## Conversion Rules

Every important section should guide the user to contact the business.

Primary CTA:

WhatsApp’tan Hemen Yaz

Secondary CTA:

Hizmetleri İncele

Contact actions:

- WhatsApp
- Phone call
- Directions
- Google Maps

The user should understand in the first 5 seconds:

Kılınç Teknomarket provides phone repair, computer repair, satellite installation, camera systems and technology products.

---

## Performance Rules

Target:

- Lighthouse SEO: 95+
- Lighthouse Performance: 90+
- Mobile-first optimization
- Optimized images
- Lazy loading where appropriate
- No unnecessary client-side JavaScript
- No heavy animation libraries except limited Motion usage

---

## Animation Rules

Animation is not the goal.

Use animation only for:

- Small fade-in
- Button hover
- Service card hover
- FAQ open/close

Avoid:

- Heavy scroll animations
- 3D effects
- Constant moving backgrounds
- Performance-heavy effects

---

## Development Workflow

Before coding, read:

- CLAUDE.md
- docs/PROJECT.md
- docs/SEO.md
- docs/TASKS.md

Then implement tasks in TASKS.md order.

After each major change:

- Check mobile layout
- Check SEO metadata
- Check CTA visibility
- Check accessibility
- Check performance impact

---

## Definition of Done

A task is done only if:

- It works on mobile
- It works on desktop
- It has clean code
- It follows SEO rules
- It has WhatsApp CTA where relevant
- It does not break existing layout
- It does not add unnecessary dependencies