import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IMG, SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit | AI KISA School" },
      {
        name: "description",
        content:
          "Contact AI KISA School to ask a question, arrange a campus visit or speak with the admissions team.",
      },
      { property: "og:title", content: "Contact AI KISA School" },
      {
        property: "og:description",
        content: "Ask a question or book a campus visit with our admissions team.",
      },
      { property: "og:image", content: IMG.campus },
      { name: "twitter:image", content: IMG.campus },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Add a short subject").max(120),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1000),
});

type FormValues = z.infer<typeof schema>;

function Contact() {
  const [sent, setSent] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit() {
    setSent(true);
    toast.success("Message received (demo)", {
      description: "This is a demonstration only — nothing was sent.",
    });
    form.reset();
  }

  const details = [
    { icon: MapPin, label: "Campus", value: SITE.address },
    { icon: Phone, label: "Phone", value: SITE.phone },
    { icon: Mail, label: "Email", value: SITE.email },
    { icon: Clock, label: "Office hours", value: SITE.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us, or come and see the school for yourself."
        description="Our admissions and pastoral teams are happy to answer questions from families, partners and the wider community."
        image={IMG.campus}
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Reach us" title="School details" />
          <ul className="mt-8 space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  <d.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{d.label}</p>
                  <p className="text-sm text-muted-foreground">{d.value}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            All contact details above are placeholders until the school confirms official
            information.
          </p>
        </div>

        <div className="surface-card p-6 md:p-8">
          {sent ? (
            <div className="text-center" role="status" aria-live="polite">
              <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-semibold">Message sent (demo)</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                In the live site, a member of the team would reply within [X] working days. Nothing
                was actually submitted.
              </p>
              <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5" noValidate>
                <h2 className="text-xl font-semibold">Send a message</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Campus visit, admissions question…" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={5} placeholder="How can we help?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">
                  Send message
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Demo form — messages are not stored or sent.
                </p>
              </form>
            </Form>
          )}
        </div>
      </section>
      <div className="pb-4" />
    </>
  );
}
