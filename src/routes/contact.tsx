import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Carlton Pollinator Project" },
      {
        name: "description",
        content:
          "Get in touch with the Carlton Pollinator Project. Volunteer, take a class, donate, or learn more about our work in Carlton, Oregon.",
      },
      { property: "og:title", content: "Contact Us — Carlton Pollinator Project" },
      {
        property: "og:description",
        content:
          "Reach out to volunteer, sign up for a class, or donate to support pollinators in Carlton, Oregon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="flex-1">
      {/* Page Hero */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
            <Leaf className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />
            Get in touch
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            We would love to hear from you. Reach out to volunteer, join a class, donate, or learn
            more about how we are restoring native ecology in Carlton.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-1">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  How to reach us
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Prefer a quick call? Want to sign up for a planting day? Use the information below
                  or send us a message.
                </p>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Carlton, Oregon</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+15038301805"
                      className="text-muted-foreground hover:text-sage-dark hover:underline"
                    >
                      (503) 830-1805
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:contact@carltonpollinatorproject.org"
                      className="text-muted-foreground hover:text-sage-dark hover:underline"
                    >
                      contact@carltonpollinatorproject.org
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                    <Leaf className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Website</p>
                    <a
                      href="https://carltonpollinatorproject.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-sage-dark hover:underline"
                    >
                      carltonpollinatorproject.org
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-muted/50 p-6 shadow-sm sm:p-10 lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Send a message</h2>
              <p className="mt-2 text-muted-foreground">
                Tell us how you would like to get involved and we will get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
