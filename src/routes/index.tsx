import { createFileRoute } from "@tanstack/react-router";

import { Storefront } from "@/components/storefront";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ontario Pizza Unlimited | Unlimited Toppings in Etobicoke" },
      { name: "description", content: "Pizza with unlimited toppings, wings & combos. 1686 Albion Rd, Etobicoke. Open daily 12–9:30 p.m. Call 416-742-9000." },
      { property: "og:title", content: "Ontario Pizza Unlimited" },
      { property: "og:description", content: "Unlimited toppings pizza delivery in Etobicoke. Open daily 12–9:30 p.m." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Storefront,
});
