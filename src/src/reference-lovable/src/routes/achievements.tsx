import { createFileRoute } from "@tanstack/react-router";
import { Award, Medal, Trophy } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { IMG } from "@/lib/site";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Results, Awards & Impact | AI KISA School" },
      {
        name: "description",
        content:
          "Academic results, competition awards, alumni destinations and community impact from AI KISA School learners.",
      },
      { property: "og:title", content: "Achievements at AI KISA School" },
      {
        property: "og:description",
        content: "Academic results, competitions, alumni destinations and community impact.",
      },
      { property: "og:image", content: IMG.graduation },
      { name: "twitter:image", content: IMG.graduation },
    ],
  }),
  component: Achievements,
});

const highlights = [
  { icon: Trophy, title: "[XX] competition awards", body: "Regional and national placements in science, mathematics and robotics (placeholder)." },
  { icon: Award, title: "[XX%] examination pass rate", body: "Senior-year outcomes across core subjects (placeholder)." },
  { icon: Medal, title: "[XX] scholarships secured", body: "Graduates continuing to further study with full or partial funding (placeholder)." },
];

const timeline = [
  { year: "[Year]", title: "School opens its first tuition-free cohort", body: "Placeholder milestone pending official history." },
  { year: "[Year]", title: "AI and robotics programme launched", body: "Placeholder milestone pending official history." },
  { year: "[Year]", title: "First graduating class", body: "Placeholder milestone pending official history." },
  { year: "[Year]", title: "Community outreach programme expands", body: "Placeholder milestone pending official history." },
];

function Achievements() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="Results that prove free education can be excellent education."
        description="Our learners compete, publish and graduate alongside the strongest schools in the region."
        image={IMG.graduation}
      >
        <p className="rounded-xl border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-3 text-sm text-ink-foreground/85">
          All figures on this page are clearly marked placeholders until verified by the school.
        </p>
      </PageHero>

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="lift surface-card p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <h.icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{h.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Milestones" title="Our journey so far" />
          <ol className="mt-10 space-y-6 border-l border-border pl-6">
            {timeline.map((t) => (
              <li key={t.title} className="relative">
                <span
                  className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-gold ring-4 ring-surface"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{t.year}</p>
                <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Social impact"
              title="Success measured beyond the report card"
              description="Learners run community coding clinics, digital-literacy sessions for parents and service projects each term. Programme names and participation numbers are placeholders."
            />
          </div>
          <img
            src={IMG.students}
            alt="Students presenting a community project"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <CtaBand />
      <div className="pb-4" />
    </>
  );
}
