import { Sparkles } from 'lucide-react';

export default function PageHero({
  eyebrow,
  badgeText,
  title,
  description,
  backgroundImage,
  mobileBackgroundImage,
  image,
  rightImage,
  statValue,
  statCaption,
  children,
}) {
  const bg = backgroundImage || image;
  const hasSideImage = Boolean(rightImage);

  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-transparent text-ink-foreground sm:min-h-[420px] md:min-h-[500px] lg:min-h-[560px]">
      {bg ? (
        <picture className="absolute inset-0 h-full w-full">
          {mobileBackgroundImage ? (
            <source media="(max-width: 767px)" srcSet={mobileBackgroundImage} />
          ) : null}
          <img
            src={bg}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full object-cover object-center"
          />
        </picture>
      ) : null}

      <div
        className={`container-page relative z-10 py-16 md:py-24 lg:items-center ${
          hasSideImage ? "grid gap-12 lg:grid-cols-[1.1fr_0.9fr]" : "flex max-w-[980px] items-center"
        }`}
      >
        <div className={hasSideImage ? "py-8 md:py-10" : "max-w-3xl py-8 md:py-10"}>
          {badgeText ? (
            <span className="fade-up inline-flex items-center gap-2 rounded-full border border-[#DFB863]/80 bg-[#1B2A5C]/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#DFB863] shadow-[0_8px_20px_rgba(27,42,92,0.18)]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {badgeText}
            </span>
          ) : eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DFB863]">{eyebrow}</p>
          ) : null}

          <h1 className="fade-up mt-8 sm:mt-6 text-3xl sm:text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
          {description ? <p className="fade-up mt-7 sm:mt-6 max-w-xl text-base sm:text-lg text-white/90">{description}</p> : null}

          {children ? <div className="fade-up mt-10 sm:mt-9 flex flex-col gap-3.5 sm:gap-3 sm:flex-row">{children}</div> : null}
        </div>

        {hasSideImage ? (
          <div className="fade-up relative py-8 md:py-10">
            <img
              src={rightImage}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            {statValue ? (
              <div className="surface-card absolute -bottom-6 left-4 hidden max-w-[16rem] p-4 text-foreground sm:block">
                <p className="font-display text-2xl font-semibold text-primary">{statValue}</p>
                {statCaption ? <p className="text-sm text-muted-foreground">{statCaption}</p> : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
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
