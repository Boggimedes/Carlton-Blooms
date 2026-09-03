import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Leaf, Shovel } from "lucide-react";

import { Button } from "@/components/ui/button";
import beetopiaAfter from "@/assets/beetopia-after.jpg";
import hawnCreekPark from "@/assets/hawn-creek-park.jpg";
import volunteersGroup from "@/assets/volunteers-group.jpg";

export const Route = createFileRoute("/our-projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Carlton Pollinator Project" },
      {
        name: "description",
        content:
          "Discover the Carlton Pollinator Project's local restoration projects and ecology-based educational classes in Carlton, Oregon.",
      },
      { property: "og:title", content: "Our Projects — Carlton Pollinator Project" },
      {
        property: "og:description",
        content:
          "Beetopia, Hawn Creek Pocket Park, and native plant classes that support pollinators and wildlife.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurProjectsPage,
});

const projects = [
  {
    image: beetopiaAfter,
    title: "1st Street Pollinator Garden (Beetopia)",
    description:
      "Our flagship street-side garden in the heart of Carlton. Neighbors, volunteers, and local students transformed this space into a living classroom and a reliable food source for pollinators from spring through fall.",
    details: [
      "Before-and-after transformation",
      "Volunteer planting days",
      "Featured at Carlton Fun Days Festival",
    ],
  },
  {
    image: hawnCreekPark,
    title: "Hawn Creek Pocket Park",
    description:
      "Our current focus: turning a small town park into a pollinator sanctuary. The gravel path is in and the beds are turned — native trees, shrubs and wildflowers go in next, so people can gather here and pollinators can thrive.",
    details: [
      "Native wildflower, shrub and tree plantings",
      "Community work parties",
      "Long-term monitoring",
    ],
  },
  {
    image: volunteersGroup,
    title: "Community Volunteer Days",
    description:
      "In every restoration, our volunteers are the roots of everything we do. All ages and experience levels are welcome at our planting days and maintenance events.",
    details: [
      "All tools and guidance provided",
      "Family-friendly work parties",
      "Seasonal planting and care",
    ],
  },
];

function OurProjectsPage() {
  return (
    <main className="flex-1">
      {/* Page Hero */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
            <Leaf className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />
            What we do
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Local restoration projects and ecology-based classes that bring native habitat back to
            Carlton, Oregon — one plant at a time.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="rounded-2xl border border-border/50 shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-foreground">
                        <span
                          className="inline-block h-2 w-2 rounded-full bg-goldenrod"
                          aria-hidden="true"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6">
                    <Link to="/contact">
                      <Shovel className="mr-2 h-4 w-4" />
                      Get involved
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-3xl border border-border bg-background p-8 shadow-sm sm:p-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
                <Calendar className="h-3.5 w-3.5 text-goldenrod" aria-hidden="true" />
                Upcoming classes
              </div>
              <h2 className="mt-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Ecology-based educational classes
              </h2>
              <p className="mt-4 text-muted-foreground">
                Join us for hands-on workshops about native plants, understanding pollinator
                needs, and wildlife-friendly gardening. All experience levels are welcome.
              </p>
              <Button asChild className="mt-6">
                <Link to="/contact">
                  Sign up for a class
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              <ClassCard
                title="Native Plants 101"
                description="Learn why natives matter and how to choose the right plants for your space."
              />
              <ClassCard
                title="Pollinator Garden Design"
                description="Design a blooming calendar that feeds pollinators from spring through fall."
              />
              <ClassCard
                title="Seed Starting & Propagation"
                description="Grow your own native plants from seed and cuttings to share with neighbors."
              />
              <ClassCard
                title="Winter 2027 Restoring Habitat"
                description="Presented by CPP and SWCD — date TBA. Pollinators and native plants for every yard."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-earth py-16 text-earth-foreground sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Help us grow habitat</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Volunteer at a planting day, attend a class, or make a donation to keep our projects
            thriving.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Volunteer</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-earth-foreground/30 text-earth-foreground hover:bg-earth-foreground/10 hover:text-earth-foreground"
            >
              <Link to="/contact">Donate</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ClassCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/50 p-5 transition-colors hover:bg-muted">
      <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
