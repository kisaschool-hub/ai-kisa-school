import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { IMG } from "@/lib/site";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admission — Apply Free | AI KISA School" },
      {
        name: "description",
        content:
          "Apply to AI KISA School. Admission is open to all families with no tuition and no application fee. Review the process and submit an enquiry.",
      },
      { property: "og:title", content: "Admission at AI KISA School" },
      {
        property: "og:description",
        content: "Tuition-free admission — see the steps and start an application enquiry.",
      },
      { property: "og:image", content: IMG.students },
      { name: "twitter:image", content: IMG.students },
    ],
  }),
  component: Admission,
});

const steps = [
  { n: "01", t: "Submit an enquiry", d: "Share the learner's details using the form below." },
  { n: "02", t: "Family conversation", d: "We meet the family to understand needs and answer questions." },
  { n: "03", t: "Placement assessment", d: "A friendly assessment helps us place the learner in the right year group." },
  { n: "04", t: "Offer & enrolment", d: "Offers are confirmed in writing. There is nothing to pay at any stage." },
];

const schema = z.object({
  guardianName: z.string().trim().min(2, "Please enter the parent or guardian name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(6, "Enter a contact number").max(30),
  studentName: z.string().trim().min(2, "Please enter the learner's full name").max(100),
  grade: z.string().min(1, "Select the year group applying for"),
  message: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

const grades = [
  "Early years",
  "Primary 1–3",
  "Primary 4–6",
  "Middle years 7–9",
  "Senior years 10–12",
];

function Admission() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      guardianName: "",
      email: "",
      phone: "",
      studentName: "",
      grade: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    setSubmitted(values);
    toast.success("Application enquiry received (demo)", {
      description: "This is a demonstration only — no data was sent or stored.",
    });
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Admission"
        title="Admission is open — and it costs nothing."
        description="There is no tuition, no application fee and no entrance payment. We welcome enquiries from every family."
        image={IMG.students}
      />

      <section className="container-page py-20">
        <SectionHeading eyebrow="How it works" title="Four simple steps" />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="surface-card p-6">
              <p className="font-display text-3xl font-semibold text-gold">{s.n}</p>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground">
          Application windows and required documents are placeholders until official dates are
          confirmed.
        </p>
      </section>

      <section id="apply" className="bg-surface py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Apply"
              title="Start an application enquiry"
              description="Complete the form and our admissions team will follow up. This demo form validates your details but does not send them anywhere."
            />
          </div>

          <div className="surface-card p-6 md:p-8">
            {submitted ? (
              <div className="text-center" role="status" aria-live="polite">
                <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-semibold">Thank you, {submitted.guardianName}.</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Your enquiry for {submitted.studentName} ({submitted.grade}) has been captured in
                  this demo. In the live school site, an admissions officer would reply to{" "}
                  {submitted.email} within [X] working days.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setSubmitted(null)}>
                  Submit another enquiry
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="guardianName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent / guardian name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" autoComplete="name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Learner's full name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
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
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Contact number" autoComplete="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="grade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year group applying for</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a year group" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {grades.map((g) => (
                              <SelectItem key={g} value={g}>
                                {g}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Anything we should know? (optional)</FormLabel>
                        <FormControl>
                          <Textarea rows={4} placeholder="Learning needs, questions, preferred start date…" {...field} />
                        </FormControl>
                        <FormDescription>Maximum 1000 characters.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full">
                    Submit enquiry
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Demo form — submissions are not stored or sent.
                  </p>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>
      <div className="pb-4" />
    </>
  );
}
