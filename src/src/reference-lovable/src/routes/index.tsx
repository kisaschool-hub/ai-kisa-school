import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  BookOpen,
  Cpu,
  HeartHandshake,
  Microscope,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IMG } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI KISA School — Free World-Class Education for Every Child" },
      {
        name: "description",
        content:
          "A tuition-free school combining academic excellence, character formation and hands-on AI and technology learning.",
      },
      { property: "og:title", content: "AI KISA School — Free World-Class Education" },
      {
        property: "og:description",
        content:
          "Tuition-free schooling with academic excellence, AI literacy and a community that families trust.",
      },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: BookOpen,
    title: "Academic strength",
    body: "A rigorous, inquiry-led curriculum from early years to graduation, taught in small groups with regular feedback to families.",
  },
  {
    icon: Cpu,
    title: "AI & technology learning",
    body: "Every learner builds digital fluency — coding, data literacy, robotics and responsible use of AI — from their first year onward.",
  },
  {
    icon: HeartHandshake,
    title: "Truly free",
    body: "No tuition. No hidden fees. Learning materials, labs and mentoring are provided so that cost is never a barrier.",
  },
  {
    icon: Users,
    title: "Parent partnership",
    body: "Open days, transparent reporting and an always-reachable pastoral team keep families close to their child's progress.",
  },
];

const stats = [
  { value: "100%", label: "Tuition-free places" },
  { value: "[XX]", label: "Students enrolled (placeholder)" },
  { value: "[XX:1]", label: "Student–teacher ratio (placeholder)" },
  { value: "[XX%]", label: "Graduation rate (placeholder)" },
];

const testimonials = [
  {
    quote:
      "[Placeholder testimonial — pending parent approval.] Our daughter walks into school excited and comes home explaining what she built that day.",
    name: "[Parent name]",
    role: "Parent, Grade [X] (placeholder)",
  },
  {
    quote:
      "[Placeholder testimonial — pending student approval.] I never imagined I'd be training a model before finishing secondary school.",
    name: "[Student name]",
    role: "Student, Grade [X] (placeholder)",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden hero-gradient text-ink-foreground">
        <img
          src={IMG.hero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="container-page relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="fade-up inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Tuition-free admissions open
            </span>
            <h1 className="fade-up mt-6 text-4xl font-semibold leading-[1.05] md:text-6xl">
              A world-class school that costs families nothing.
            </h1>
            <p className="fade-up mt-6 max-w-xl text-lg text-ink-foreground/85">
              AI KISA School educates curious young people through strong academics, character
              formation and real experience with artificial intelligence — completely free.
            </p>
            <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/admission">Apply for admission</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10"
              >
                <Link to="/academics">Explore academics</Link>
              </Button>
            </div>
            <p className="fade-up mt-6 flex items-center gap-2 text-sm text-ink-foreground/70">
              <BadgeCheck className="size-4 text-gold" aria-hidden="true" />
              No tuition, no application fee, no entrance payment — ever.
            </p>
          </div>

          <div className="fade-up relative">
            <img
              src={IMG.classroom}
              alt="Students collaborating around a table in a bright classroom"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="surface-card absolute -bottom-6 left-4 hidden max-w-[16rem] p-4 text-foreground sm:block">
              <p className="font-display text-2xl font-semibold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">
                of places are fully funded — every learner, every year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-semibold text-primary md:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="Why families choose us"
          title="A school built around the learner, not the invoice."
          description="Four commitments shape everything from timetabling to the way we talk with parents."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <Card key={p.title} className="lift border-border">
              <CardContent className="p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary">
                  <p.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={IMG.robotics}
            alt="Students assembling a robotics project in a technology lab"
            loading="lazy"
            className="aspect-[5/4] w-full rounded-3xl object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="AI, taught properly"
              title="Technology fluency as a core subject — not an after-school club."
              description="Learners move from block coding and digital citizenship in primary years to Python, data analysis and applied machine-learning projects before graduation."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Weekly lab time in coding, robotics and data literacy",
                "Ethics and responsible AI discussed in every technology unit",
                "Capstone projects solving problems in the learners' own community",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Microscope className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/facilities">See our facilities</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <SectionHeading
          align="center"
          eyebrow="Voices from our community"
          title="What families and learners say"
          description="Quotes below are placeholders until real testimonials are collected and approved."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card p-8">
              <Quote className="size-6 text-gold" aria-hidden="true" />
              <blockquote className="mt-4 text-lg leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="block text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
      <div className="pb-4" />
    </>
  );
}
