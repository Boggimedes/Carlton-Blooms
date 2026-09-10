import { createFileRoute } from "@tanstack/react-router";
import { Building2, HeartHandshake, Leaf, Search, Sprout, TreeDeciduous } from "lucide-react";

import { AmplyWidget } from "@/components/AmplyWidget";
import { donationWidgetOptions } from "@/lib/amply";
import beetopiaBeds from "@/assets/beetopia-beds-bloom.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Carlton Pollinator Project" },
      {
        name: "description",
        content:
          "Donate to the Carlton Pollinator Project and double your gift. Many employers match charitable donations — check yours as you give.",
      },
      { property: "og:title", content: "Donate — Carlton Pollinator Project" },
      {
        property: "og:description",
        content:
          "Support native habitat in Carlton, Oregon. Check your employer's matching program and your gift may go twice as far.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonatePage,
});

const impact = [
  {
    icon: Sprout,
    title: "$25 plants a pollinator patch",
    body: "Native starts — checkermallow, coreopsis, goldenrod — that feed bees from spring through fall.",
  },
  {
    icon: TreeDeciduous,
    title: "$100 restores a bed",
    body: "Soil prep, mulch and plants to turn a strip of gravel into living habitat.",
  },
  {
    icon: HeartHandshake,
    title: "$500 funds a class",
    body: "Hands-on ecology education for Carlton kids and neighbors, tools and materials included.",
  },
];

const matchSteps = [
  {
    icon: Building2,
    title: "Type your employer",
    body: "Start typing where you work in the donation form. We look it up as you go.",
  },
  {
    icon: Search,
    title: "See the match instantly",
    body: "If your employer matches gifts, you'll see their program and limits right away.",
  },
  {
    icon: HeartHandshake,
    title: "We handle the paperwork",
    body: "You get the steps to submit your match, and we confirm the receipt on our end.",
  },
];

function DonatePage() {
  return (
    <main className="flex-1">
      {/* Page Hero */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
            <Leaf className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />
            Give and get matched
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            Donate
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Every dollar goes into the ground here in Carlton — native plants, soil, tools and
            classes. And if your employer matches charitable gifts, yours can go twice as far.
          </p>
        </div>
      </section>

      {/* Widget + impact */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-1">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  What your gift does
                </h2>
                <p className="mt-3 text-muted-foreground">
                  We are volunteer-run, so donations buy plants and materials rather than overhead.
                </p>
              </div>

              <ul className="space-y-5">
                {impact.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-muted-foreground">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <img
                src={beetopiaBeds}
                alt="Pollinator beds in full bloom at Beetopia"
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-sm"
                loading="lazy"
              />
            </div>

            <div className="rounded-3xl border border-border bg-muted/50 p-6 shadow-sm sm:p-10 lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Make a donation</h2>
              <p className="mt-2 text-muted-foreground">
                Give securely by card. Add your employer and we will check for a matching gift
                program at the same time.
              </p>
              <div className="mt-6">
                <AmplyWidget options={donationWidgetOptions} />
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Donations are processed securely through Stripe. The Carlton Pollinator Project is a
                community nonprofit in Carlton, Oregon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matching explainer */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Double your gift with employer matching
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Thousands of employers match employee donations dollar for dollar — most of it goes
              unclaimed simply because people don't know to ask.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {matchSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-goldenrod/20 text-earth-light">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
