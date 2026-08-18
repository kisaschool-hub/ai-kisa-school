import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { IMG } from "@/lib/site";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Labs, Library & Campus | AI KISA School" },
      {
        name: "description",
        content:
          "Tour AI KISA School facilities: computer and robotics labs, science laboratories, library, sports grounds and arts studios.",
      },
      { property: "og:title", content: "Facilities at AI KISA School" },
      {
        property: "og:description",
        content: "Computer and robotics labs, science laboratories, library, sports and arts spaces.",
      },
      { property: "og:image", content: IMG.computerLab },
      { name: "twitter:image", content: IMG.computerLab },
    ],
  }),
  component: Facilities,
});

const facilities = [
  {
    title: "Computer & AI lab",
    image: IMG.computerLab,
    body: "Networked workstations for coding, data work and supervised model-building sessions.",
  },
  {
    title: "Robotics workshop",
    image: IMG.robotics,
    body: "Build space with microcontrollers, sensors and prototyping tools for team projects.",
  },
  {
    title: "Science laboratories",
    image: IMG.science,
    body: "Dedicated benches for biology, chemistry and physics practicals with full safety provision.",
  },
  {
    title: "Library & study hall",
    image: IMG.library,
    body: "Quiet reading and research space, open before and after the timetabled day.",
  },
  {
    title: "Sports grounds",
    image: IMG.sports,
    body: "Playing fields and courts supporting a structured physical education programme.",
  },
  {
    title: "Arts studios",
    image: IMG.arts,
    body: "Music, drama and visual art spaces used for weekly lessons and termly performances.",
  },
];

function Facilities() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Spaces designed for hands-on, ambitious learning."
        description="Laboratories, workshops and study spaces are open to every learner at no cost, including equipment and materials."
        image={IMG.computerLab}
      />

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Campus"
          title="Where the learning happens"
          description="Photography is representative; official campus images will replace these once available."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <article key={f.title} className="lift surface-card overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {[
            { t: "Safe & supervised", d: "Trained staff supervise all labs and workshops during use." },
            { t: "Free access", d: "Equipment, materials and lab time are included for every learner." },
            { t: "Open after hours", d: "Study hall and lab sessions run beyond the timetabled day (schedule placeholder)." },
          ].map((i) => (
            <div key={i.t} className="surface-card p-6">
              <h3 className="text-base font-semibold">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
      <div className="pb-4" />
    </>
  );
}
