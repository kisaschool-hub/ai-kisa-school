import { createFileRoute } from "@tanstack/react-router";
import { Brain, Calculator, FlaskConical, Globe2, Palette, PenTool } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IMG } from "@/lib/site";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Curriculum & AI Learning | AI KISA School" },
      {
        name: "description",
        content:
          "Explore the AI KISA School curriculum: primary, middle and senior programmes with core subjects and applied AI and technology learning.",
      },
      { property: "og:title", content: "Academics at AI KISA School" },
      {
        property: "og:description",
        content: "Inquiry-led curriculum from primary to senior years, with AI literacy throughout.",
      },
      { property: "og:image", content: IMG.science },
      { name: "twitter:image", content: IMG.science },
    ],
  }),
  component: Academics,
});

const subjects = [
  { icon: Calculator, title: "Mathematics", body: "Problem-solving strands with weekly applied challenges and targeted support groups." },
  { icon: FlaskConical, title: "Sciences", body: "Biology, chemistry and physics taught with practical lab work from the earliest years." },
  { icon: PenTool, title: "Languages & literacy", body: "Reading, writing and oracy across languages, with debate and publishing opportunities." },
  { icon: Brain, title: "Computing & AI", body: "Coding, data literacy, robotics and responsible machine-learning practice." },
  { icon: Globe2, title: "Humanities", body: "History, geography and civics anchored in local context and global perspective." },
  { icon: Palette, title: "Arts & wellbeing", body: "Music, visual art, drama and structured physical education for whole-child growth." },
];

const stages = [
  {
    id: "primary",
    label: "Primary",
    heading: "Foundations, curiosity and confidence",
    points: [
      "Literacy and numeracy blocks every morning with small-group support",
      "Block-based coding, digital citizenship and safe technology habits",
      "Project afternoons that connect subjects around one question",
    ],
  },
  {
    id: "middle",
    label: "Middle years",
    heading: "Depth, discipline and first real builds",
    points: [
      "Subject specialists across sciences, humanities and languages",
      "Python fundamentals, data handling and introductory robotics",
      "Termly assessment reports shared directly with families",
    ],
  },
  {
    id: "senior",
    label: "Senior years",
    heading: "Mastery, examinations and applied AI",
    points: [
      "Examination preparation with structured revision and mentoring",
      "Applied machine learning, ethics of AI and capstone research projects",
      "University and career guidance including application support",
    ],
  },
];

function Academics() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A rigorous curriculum where technology deepens learning."
        description="From primary foundations to senior examinations, learners follow an inquiry-led programme with AI and computing woven into every stage."
        image={IMG.science}
      />

      <section className="container-page py-20">
        <SectionHeading eyebrow="Programmes" title="Three stages, one continuous journey" />
        <Tabs defaultValue="primary" className="mt-10">
          <TabsList className="flex w-full flex-wrap justify-start gap-1">
            {stages.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="min-h-11 px-5">
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {stages.map((s) => (
            <TabsContent key={s.id} value={s.id}>
              <div className="surface-card mt-6 grid gap-8 p-8 md:grid-cols-2 md:p-10">
                <div>
                  <h3 className="text-2xl font-semibold">{s.heading}</h3>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src={IMG.classroom}
                  alt="A teacher guiding students through a lesson"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Subjects" title="What learners study" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s) => (
              <Card key={s.title} className="lift h-full">
                <CardContent className="p-6">
                  <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                    <s.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={IMG.teacher}
            alt="A teacher supporting a student one to one"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Teaching approach"
              title="Small groups, high expectations, constant feedback"
              description="Teachers assess continuously rather than only at term end, so support arrives while it still matters. Exact class sizes and staffing ratios are placeholders until confirmed."
            />
          </div>
        </div>
      </section>

      <CtaBand />
      <div className="pb-4" />
    </>
  );
}
