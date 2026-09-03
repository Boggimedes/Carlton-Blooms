import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  HeartHandshake,
  Leaf,
  Shovel,
  Sprout,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroSweatBee from "@/assets/pollinator-green-sweat-bee.jpg";
import homeBumblebee from "@/assets/pollinator-bumblebee-beebalm.jpg";
import volunteersGroup from "@/assets/volunteers-group.jpg";
import beetopiaAfter from "@/assets/beetopia-after.jpg";
import hawnCreekPark from "@/assets/hawn-creek-park.jpg";
import hawnCreekBeds from "@/assets/hawn-creek-beds.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlton Pollinator Project — Restoring Native Ecology" },
      {
        name: "description",
        content:
          "The Carlton Pollinator Project partners with Carlton neighbors and community resources to support pollinators and wildlife through local restoration projects and ecology-based classes.",
      },
      { property: "og:title", content: "Carlton Pollinator Project — Restoring Native Ecology" },
      {
        property: "og:description",
        content:
          "Growing wildlife habitat one plant at a time in Carlton, Oregon. Volunteer, take a class, or donate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
                <Leaf className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />
                Carlton Pollinator Project
              </div>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Restoring Native Ecology
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Growing wildlife habitat{" "}
                <span className="font-semibold text-sage-dark">one plant at a time</span>.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    <Shovel className="mr-2 h-4 w-4" />
                    Join our dig
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/photos">
                    See our photos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sage/20 to-goldenrod/20 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={heroSweatBee}
                alt="A metallic green sweat bee on a blanketflower in a Carlton pollinator garden"
                width={1200}
                height={1600}
                className="relative rounded-2xl border border-border/50 shadow-xl"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img
                src={homeBumblebee}
                alt="A bumblebee gathering pollen from wild bee balm"
                width={800}
                height={600}
                className="rounded-2xl border border-border/50 shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Carlton Pollinator Project
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Carlton Pollinator Project (CPP) is a grassroots nonprofit that partners with
                Carlton neighbors and community resources to support pollinators and wildlife through
                local restoration projects and ecology-based classes.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe every yard, school garden, and public area has the potential to be a
                sanctuary for bees, butterflies, moths, and birds — and a source of wonder and
                beauty for our community.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="secondary">
                  <Link to="/contact">Volunteer</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/our-projects">Classes</Link>
                </Button>
                <Button asChild>
                  <Link to="/contact">Donate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
              <HeartHandshake className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />
              Why it matters
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Foundation of our ecosystems — The Power of Bees
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard
              icon={<Sprout className="h-6 w-6" />}
              text="Bees are a keystone species, the glue that holds our ecosystems together."
            />
            <FactCard
              icon={<Leaf className="h-6 w-6" />}
              text="They are responsible for the reproduction of 80% of flowering plants worldwide."
            />
            <FactCard
              icon={<HeartHandshake className="h-6 w-6" />}
              text="Native and managed bees pollinate up to 1/3 of our global food production."
            />
            <FactCard
              icon={<BookOpen className="h-6 w-6" />}
              text="Bees maintain plant biodiversity and ensure ecosystem stability and health."
            />
          </div>
        </div>
      </section>

      {/* Insect decline */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Insect Decline
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Insects face sharply declining populations that threaten our ecosystems. Habitat
                loss through development and agricultural monocultures, pollution and pesticide use,
                climate change, and invasive plants overtaking native forage and nesting areas all
                have had a devastating effect on our bee and insect populations.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-muted/50 p-8 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Threats pollinators face
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Habitat loss from development and monocultures",
                  "Pollution and pesticide use",
                  "Climate change shifting bloom times",
                  "Invasive plants crowding out native forage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <span
                      className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-goldenrod"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* We can make a difference */}
      <section className="bg-sage py-16 text-sage-foreground sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">We Can Make a Difference</h2>
            <p className="mt-5 text-lg opacity-90">
              We see in every yard, school garden, and public area, the potential to be a sanctuary
              for bees, butterflies, moths, and birds — and a source of wonder and beauty for our
              community.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ActionCard
              title="Plant natives"
              description="Many pollinators need natives to complete their life cycle. Every plant makes a difference."
            />
            <ActionCard
              title="Create habitat"
              description="Learn about pollinators’ specific needs and create an area in your garden for wildlife habitat."
            />
            <ActionCard
              title="Spread awareness"
              description="Help others become aware of the need to prioritize pollinator health."
            />
            <ActionCard
              title="Remove invasives"
              description="Get to know the invasive plants in our area and remove them where you can."
            />
            <ActionCard
              title="Avoid chemicals"
              description="Use master gardener resources at our extension service for advice when garden issues arise."
            />
            <ActionCard
              title="Shop pollinator-safe"
              description="Check with your nursery to see that pollinator-safe methods are used to grow their plants. Buy organic seeds."
            />
            <ActionCard
              title="Join us"
              description="Whatever we do for our pollinators will support the ecosystems that all life depends upon."
            />
          </div>
        </div>
      </section>

      {/* Our Projects + quote */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
              <Shovel className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />
              Our Projects
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Growing habitat in Carlton
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={volunteersGroup}
                alt="Carlton Pollinator Project volunteers gathered in front of the Beetopia garden beds"
                width={800}
                height={600}
                className="rounded-2xl border border-border/50 shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <blockquote className="relative">
              <div
                className="absolute -left-4 -top-6 font-serif text-8xl leading-none text-goldenrod/30"
                aria-hidden="true"
              >
                “
              </div>
              <p className="relative font-serif text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
                Never doubt that a small group of thoughtful citizens can change the world; indeed,
                it’s the only thing that ever has.
              </p>
              <footer className="relative mt-6 text-lg font-semibold text-sage-dark">
                — Margaret Mead
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Beetopia */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img
                src={beetopiaAfter}
                alt="The 1st Street Pollinator Garden in midsummer bloom, poppies and lavender filling the raised beds"
                width={800}
                height={600}
                className="rounded-2xl border border-border/50 shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                1st Street Pollinator Garden
              </h2>
              <p className="mt-2 text-lg font-medium text-sage-dark">(Beetopia)</p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Our flagship street-side garden supports pollinators in the heart of Carlton.
                Neighbors, volunteers, and local students have transformed this space into a living
                classroom and a reliable food source for pollinators from spring through fall.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Before-and-after transformation",
                  "Volunteer planting days",
                  "Featured at Carlton Fun Days Festival",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-goldenrod"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link to="/our-projects">
                  See all projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hawn Creek Pocket Park */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Our Current Project: Hawn Creek Pocket Park
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              In a collaborative effort with our neighbors, local environmental agencies and
              businesses, we are turning this small town park into a native plant refuge — a place
              where family and friends can gather and wildlife can thrive.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
              <img
                src={hawnCreekPark}
                alt="The new gravel path and park sign at Hawn Creek Pocket Park"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
              <img
                src={hawnCreekBeds}
                alt="Freshly turned planting beds along the new path at Hawn Creek Pocket Park"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                <Shovel className="mr-2 h-4 w-4" />
                Volunteer at Hawn Creek
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/photos">View project photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events & Classes */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-3xl border border-border bg-background p-8 shadow-sm sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
                <Calendar className="h-3.5 w-3.5 text-goldenrod" aria-hidden="true" />
                Events and Classes
              </div>
              <h2 className="mt-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Learn with us
              </h2>
              <p className="mt-4 text-muted-foreground">
                Join us for hands-on workshops about native plants, pollinator needs, and
                wildlife-friendly gardening. All experience levels are welcome.
              </p>
              <Button asChild className="mt-6">
                <Link to="/contact">
                  Sign up for a class
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                  <Calendar className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Winter 2027 Restoring Habitat ~ Pollinators and Native Plants
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Presented by CPP and SWCD
                  </p>
                  <p className="mt-1 font-medium text-foreground">Date: TBA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-earth py-16 text-earth-foreground sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Resources for more information</h2>
            <p className="mt-4 text-lg opacity-90">
              These trusted organizations offer research, plant lists, and practical guidance for
              protecting pollinators.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ResourceLink href="https://xerces.org" label="Xerces Society" />
            <ResourceLink href="https://pollinator.org" label="Pollinator Partnership" />
            <ResourceLink href="https://oregonbeeproject.org" label="Oregon Bee Project" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage py-16 text-sage-foreground sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Ready to dig in?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Whether you have an hour to volunteer or a yard to transform, we would love to hear from
            you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Join our dig</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sage-foreground/30 text-sage-foreground hover:bg-sage-foreground/10 hover:text-sage-foreground"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function FactCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
        {icon}
      </div>
      <p className="mt-4 text-foreground">{text}</p>
    </div>
  );
}

function ActionCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-sage-foreground/20 bg-sage-foreground/10 p-6 backdrop-blur-sm transition-colors hover:bg-sage-foreground/15">
      <h3 className="font-serif text-xl font-semibold">{title}</h3>
      <p className="mt-2 opacity-90">{description}</p>
    </div>
  );
}

function ResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-earth-foreground/30 bg-earth-foreground/10 px-6 py-3 text-sm font-medium transition-colors hover:bg-earth-foreground/20"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
