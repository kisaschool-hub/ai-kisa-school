import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden hero-gradient text-ink-foreground">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="container-page relative py-16 md:py-24">
        <p className="fade-up text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h1 className="fade-up mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="fade-up mt-5 max-w-2xl text-base text-ink-foreground/80 md:text-lg">
          {description}
        </p>
        {children ? <div className="fade-up mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
