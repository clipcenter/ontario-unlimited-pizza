import { useState } from "react";
import { Pizza } from "lucide-react";
import hero from "@/assets/hero-pizza.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Item = { name: string; price: string; desc: string };

const menu: { title: string; note?: string; items: Item[] }[] = [
  { title: "Every Day Specials", note: "Unlimited toppings on every pizza", items: [
    { name: '10" Small Pizza', price: "13.99", desc: "Your perfect personal pie, loaded however you like." },
    { name: '12" Medium Pizza', price: "16.99", desc: "Customize with unlimited toppings." },
    { name: '14" Large Pizza', price: "18.99", desc: "Your perfect savory, cheesy masterpiece." },
    { name: '16" Extra Large Pizza', price: "21.99", desc: "Create your own masterpiece." },
    { name: '18" Giant Pizza', price: "31.99", desc: "Load up a massive masterpiece." },
  ]},
  { title: "Combos", items: [
    { name: '12" Pizza Combo', price: "36.74", desc: "One pizza, ten chicken wings, and one 2 litre Coke." },
    { name: '14" Pizza Combo', price: "40.74", desc: "One pizza, ten chicken wings, and one 2 litre Coke." },
  ]},
  { title: "Try Twin", items: [
    { name: '2 × 12" Pizzas', price: "29.99", desc: "Unlimited toppings on each pizza." },
    { name: '2 × 14" Pizzas', price: "36.99", desc: "Unlimited toppings on each pizza." },
    { name: '2 × 16" Pizzas', price: "40.99", desc: "Unlimited toppings on each pizza." },
  ]},
  { title: "Try Triple", items: [
    { name: '3 × 12" Pizzas', price: "48.99", desc: "Unlimited toppings on each pizza." },
    { name: '3 × 14" Pizzas', price: "58.99", desc: "Unlimited toppings on each pizza." },
    { name: '3 × 16" Pizzas', price: "61.99", desc: "Unlimited toppings on each pizza." },
  ]},
  { title: "Wings", items: [
    { name: "Chicken Wings", price: "15.99", desc: "Juicy wings in a variety of sauces or dry rubs. Perfect for sharing." },
  ]},
  { title: "Side Orders", items: [
    { name: "Cheesy Bread", price: "12.99", desc: "Cheesy bread on a creamy garlic base." },
    { name: "Fries (Large)", price: "6.99", desc: "Crispy golden fries, cooked fresh and salted to order." },
    { name: "Garlic Dipping Sauce", price: "1.50", desc: "Creamy garlic dip." },
    { name: "Cheddar Dipping Sauce", price: "1.50", desc: "Warm, melty cheddar dip for fries or cheesy bread." },
  ]},
  { title: "Beverages", items: [{ name: "Coke Can", price: "1.50", desc: "Ice-cold 355 ml can of Coke." }] },
];

const PHONE = "tel:4167429000";

export function Storefront() {
  const [selected, setSelected] = useState<{ item: Item; cat: string } | null>(null);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-2xl tracking-wide">
            Ontario Pizza <span className="text-primary">Unlimited</span>
          </a>
          <nav className="flex items-center gap-5 text-sm font-semibold">
            <a href="#menu" className="hidden hover:text-secondary sm:inline">Menu</a>
            <a href="#visit" className="hidden hover:text-secondary sm:inline">Visit</a>
            <a href={PHONE} className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">Call to Order</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <img src={hero} alt="Fresh loaded pizza" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1024} />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
          <p className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground">
            ★ 4.4 · 317 reviews
          </p>
          <h1 className="text-6xl leading-none md:text-8xl">
            Unlimited toppings.<br /><span className="text-primary">Zero limits.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Etobicoke's pizza delivery where every pie is loaded exactly how you want it. Open every day, 12–9:30 p.m.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PHONE} className="rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground hover:opacity-90">Call 416-742-9000</a>
            <a href="#menu" className="rounded-md border border-foreground/40 px-6 py-3 font-bold hover:bg-foreground/10">View Menu</a>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-5xl md:text-6xl">The <span className="text-secondary">Menu</span></h2>
        <p className="mt-2 text-muted-foreground">
          $10–20 per person · Every pizza comes with unlimited toppings
        </p>
        <p className="mt-1 text-sm font-semibold text-secondary">Tap any item to see the details →</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {menu.map((cat) => (
            <div key={cat.title} className="rounded-xl border bg-card p-6">
              <h3 className="text-3xl text-primary">{cat.title}</h3>
              {cat.note && <p className="text-sm text-muted-foreground">{cat.note}</p>}
              <ul className="mt-4 space-y-4">
                {cat.items.map((it) => (
                  <li key={it.name}>
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      onClick={() => setSelected({ item: it, cat: cat.title })}
                      className="group flex w-full cursor-pointer items-baseline gap-2 rounded text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="font-semibold transition-colors group-hover:text-primary group-focus-visible:text-primary">
                        {it.name}
                      </span>
                      <span className="flex-1 border-b border-dashed border-border transition-colors group-hover:border-primary/60" />
                      <span className="font-bold text-secondary">${it.price}</span>
                      <span
                        aria-hidden="true"
                        className="translate-y-[-2px] text-lg leading-none text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        +
                      </span>
                    </button>
                    <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-md overflow-hidden border-border bg-card p-0 sm:rounded-2xl">
          {selected && (
            <>
              <div className="flex items-start gap-4 border-b border-border px-6 pt-7 pb-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Pizza className="h-7 w-7" aria-hidden="true" />
                </div>
                <DialogHeader className="min-w-0 text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                    {selected.cat}
                  </p>
                  <DialogTitle className="font-display text-4xl leading-none tracking-wide">
                    {selected.item.name}
                  </DialogTitle>
                  <DialogDescription className="pt-2 text-base text-muted-foreground">
                    {selected.item.desc}
                  </DialogDescription>
                </DialogHeader>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Price</p>
                  <p className="font-display text-4xl leading-none text-secondary">
                    ${selected.item.price}
                  </p>
                </div>
                <a
                  href={PHONE}
                  className="rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground hover:opacity-90"
                >
                  Call to order
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <section id="visit" className="border-t bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3">
          <div>
            <h3 className="text-3xl text-secondary">Find Us</h3>
            <p className="mt-3">1686 Albion Rd<br />Etobicoke, ON M9V 1B8</p>
            <a className="mt-3 inline-block font-semibold text-primary hover:underline" target="_blank" rel="noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=1686+Albion+Rd+Etobicoke+ON+M9V+1B8">Get directions →</a>
          </div>
          <div>
            <h3 className="text-3xl text-secondary">Hours</h3>
            <p className="mt-3">Monday – Sunday</p>
            <p className="text-2xl font-bold">12:00 – 9:30 p.m.</p>
          </div>
          <div>
            <h3 className="text-3xl text-secondary">Order</h3>
            <p className="mt-3">Pickup & delivery</p>
            <a href={PHONE} className="text-2xl font-bold hover:text-primary">416-742-9000</a>
          </div>
        </div>
        <iframe
          title="Map to Ontario Pizza Unlimited"
          className="h-80 w-full border-0"
          loading="lazy"
          src="https://www.google.com/maps?q=1686+Albion+Rd+Etobicoke+ON+M9V+1B8&output=embed"
        />
      </section>

      <footer className="px-5 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ontario Pizza Unlimited · ontariopizzaunlimited.com
      </footer>
    </div>
  );
}
