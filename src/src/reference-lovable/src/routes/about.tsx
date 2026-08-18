import { createFileRoute } from "@tanstack/react-router";
import { Compass, Flag, HeartHandshake, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { IMG } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AI KISA School — Mission, Values & Story" },
      {
        name: "description",
        content:
          "Learn how AI KISA School delivers tuition-free education, our mission, values, leadership and social impact.",
      },
      { property: "og:title", content: "About AI KISA School" },
      {
        property: "og:description",
        content: "Our mission, values and the story behind a school that charges no tuition.",
      },
      { property: "og:image", content: IMG.campus },
      { name: "twitter:image", content: IMG.campus },
    ],
  }),
  component: About,
});

const values = [
  { icon: Compass, title: "Curiosity first", body: "Questions are the curriculum. We teach learners how to investigate, not just what to memorise." },
  { icon: ShieldCheck, title: "Integrity", body: "Honest work, honest reporting, honest conversations with families about progress." },
  { icon: HeartHandshake, title: "Belonging", body: "Every child is known by name and supported by a pastoral mentor throughout their journey." },
  { icon: Flag, title: "Service", body: "Learning is applied to the community — projects must help someone beyond the classroom." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A school founded on one belief: talent is everywhere, opportunity is not."
        description="AI KISA School was created so that ability — not family income — decides how far a young person can go."
        image={IMG.campus}
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="Built by educators, funded so families never pay."
            description="The school opened to serve learners whose potential was outpacing the resources around them. Operating costs are met by philanthropic and partner funding, which means places remain free in perpetuity."
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Founding year, enrolment figures and partner organisations are placeholders on this page
            until the school confirms official details.
          </p>
        </div>
        <img
          src={IMG.students}
          alt="Students walking together across the school campus"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Mission & vision" title="What we are here to do" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="surface-card p-8">
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-3 text-muted-foreground">
                To provide a free, academically excellent education that equips young people with
                character, critical thinking and genuine technological capability.
              </p>
            </div>
            <div className="surface-card p-8">
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-3 text-muted-foreground">
                A generation of graduates who lead in their communities and shape technology
                responsibly, regardless of the circumstances they were born into.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Our values" title="Four principles we hold each other to" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Card key={v.title} className="lift h-full">
              <CardContent className="p-6">
                <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                  <v.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-page">
        <div className="surface-card grid gap-8 p-8 md:grid-cols-3 md:p-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Leadership</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Names and biographies are placeholders pending confirmation from the school.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 md:col-span-2">
            {["Head of School", "Head of Academics", "Head of Technology", "Head of Pastoral Care"].map(
              (role) => (
                <li key={role} className="rounded-xl border border-border p-5">
                  <p className="font-semibold">[Name placeholder]</p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <CtaBand />
      <div className="pb-4" />
    </>
  );
}
