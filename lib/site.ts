/**
 * Single source of truth for Neoogle's external links and contact details.
 * Update these in one place and every CTA across the site stays in sync.
 */
export const site = {
  name: "Neoogle",
  booking: "https://neoogle.youcanbook.me/",
  instagram: "https://instagram.com/shubhasturanjan",
  instagramHandle: "@shubhasturanjan",
  youtube: "https://youtube.com/@shubhasturanjan?si=yx5bPvvSKoXESvWK",
  phone: "+91 91790 86835",
  phoneHref: "tel:+919179086835",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
