import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="container-page mt-24">
      <div className="hero-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center text-ink-foreground md:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold md:text-4xl">
          Every child deserves a school that costs nothing and expects everything.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-foreground/80">
          Admissions are open to all families. No tuition, no hidden fees — only a commitment to
          learning.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
            <Link to="/admission">Start an application</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10"
          >
            <Link to="/contact">Book a campus visit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
