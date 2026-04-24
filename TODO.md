# Enhancement TODO

## Testimonials Slideshow
- [x] Analyze current Testimonials.tsx, Clients.tsx, and data files
- [x] Rewrite Testimonials.tsx with slideshow, avatars, and expanded partners (9 companies)
- [x] Test TypeScript compilation — passed

## Enterprise Text Fix
- [x] Fix "Enterprise" heading in SimpleHero.tsx — removed `drop-shadow-2xl` that was clipping the letter "e"
- [x] Added `pb-1` padding for breathing room

## Application Form Modal
- [x] Create `components/ApplicationModal.tsx` with full application form
- [x] Update `app/page.tsx` to manage modal state
- [x] Update `components/sections/CTA.tsx` to accept `onOpenModal` prop and trigger on "Start Application" click
- [x] Form includes: Full Name, Email, Phone, Company, Job Title, Program dropdown, Message
- [x] Success animation after submission
- [x] TypeScript compilation — passed

