import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Flower2, PartyPopper, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import galleryVolunteers1 from "@/assets/gallery-volunteers-1.jpg";
import galleryVolunteers2 from "@/assets/gallery-volunteers-2.jpg";
import galleryFestival1 from "@/assets/gallery-festival-1.jpg";
import galleryFestival2 from "@/assets/gallery-festival-2.jpg";
import galleryFestival3 from "@/assets/gallery-festival-3.jpg";
import galleryNature1 from "@/assets/gallery-nature-1.jpg";
import galleryNature2 from "@/assets/gallery-nature-2.jpg";
import galleryNature3 from "@/assets/gallery-nature-3.jpg";
import projectMeadow from "@/assets/project-meadow.jpg";
import projectSchool from "@/assets/project-school.jpg";

export const Route = createFileRoute("/photos")({
  head: () => ({
    meta: [
      { title: "Photos — Carlton Pollinator Project" },
      {
        name: "description",
        content:
          "Photos of Carlton Pollinator Project volunteers and planting days, our Carlton Fun Days festival booth, and the bees, butterflies, and gardens we grow habitat for.",
      },
      { property: "og:title", content: "Photos — Carlton Pollinator Project" },
      {
        property: "og:description",
        content:
          "Faces, places, and pollinators from around Carlton, Oregon — volunteers at work, Fun Days festival moments, and gardens in bloom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PhotosPage,
});

type Photo = { src: string; alt: string; caption: string };

const volunteerPhotos: Photo[] = [
  {
    src: galleryVolunteers1,
    alt: "Volunteers of all ages planting native shrubs in a sunny Carlton field",
    caption: "Neighbors turning out for a spring planting day on the edge of town.",
  },
  {
    src: projectMeadow,
    alt: "Volunteers working together on a meadow restoration",
    caption: "Meadow restoration crew — every plant goes in by hand.",
  },
  {
    src: galleryVolunteers2,
    alt: "Two volunteers kneeling beside a newly planted pollinator bed with plant labels",
    caption: "Labeling a new pollinator bed so visitors can learn the natives.",
  },
  {
    src: projectSchool,
    alt: "Students and volunteers tending a school pollinator garden",
    caption: "Students taking over care of their school garden beds.",
  },
];

const festivalPhotos: Photo[] = [
  {
    src: galleryFestival1,
    alt: "Native plant display at a small-town summer festival booth",
    caption: "Our booth on Main Street — natives, seeds, and a lot of questions answered.",
  },
  {
    src: galleryFestival2,
    alt: "Children potting seedlings at a festival table with a volunteer helping",
    caption: "Kids potting up seedlings to take home and plant.",
  },
  {
    src: galleryFestival3,
    alt: "Crowds along Main Street during the Carlton Fun Days summer festival",
    caption: "Fun Days brings the whole town out — and the whole town past our table.",
  },
];

const naturePhotos: Photo[] = [
  {
    src: galleryNature1,
    alt: "Monarch butterfly resting on a goldenrod bloom",
    caption: "Monarch on goldenrod — late-season fuel for the trip south.",
  },
  {
    src: galleryNature2,
    alt: "Native bumblebee gathering pollen from a purple coneflower",
    caption: "A native bumblebee working a coneflower.",
  },
  {
    src: galleryNature3,
    alt: "Backyard pollinator garden in full bloom along a gravel path",
    caption: "What a few seasons of native planting looks like in a backyard.",
  },
];

function PhotosPage() {
  return (
    <main className="flex-1">
      {/* Page hero */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
            <Camera className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />
            Around Carlton
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            Photos
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            You may have seen us in the paper, at Fun Days, or on the neighborhood feed. Here is
            what we actually do — the people, the places, and the pollinators.
          </p>
        </div>
      </section>

      <GallerySection
        id="volunteers"
        eyebrow="People at work"
        icon={<Users className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />}
        title="Volunteers & Projects"
        intro="Planting days, garden builds, and the neighbors who show up with gloves on. This is the heart of it: a few hours, a few dozen plants, and habitat that lasts for years."
        photos={volunteerPhotos}
        background="bg-background"
      />

      <GallerySection
        id="festival"
        eyebrow="Out in town"
        icon={<PartyPopper className="h-3.5 w-3.5 text-goldenrod" aria-hidden="true" />}
        title="Carlton Fun Days"
        intro="Every summer we set up on Main Street with native plants, seeds, and a table for kids. It is where most folks meet us for the first time — and where a lot of gardens start."
        photos={festivalPhotos}
        background="bg-muted/50"
      />

      <GallerySection
        id="pollinators"
        eyebrow="Why we do it"
        icon={<Flower2 className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />}
        title="Bees, Butterflies & Gardens"
        intro="The results, up close. Native plants bring back the bees and butterflies that were here first — and they make a yard look alive in every season."
        photos={naturePhotos}
        background="bg-background"
      />

      {/* CTA */}
      <section className="bg-earth py-16 text-earth-foreground sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            See a familiar face? Come join us.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Planting days are open to everyone, no experience needed. Bring gloves and a friend.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Join our dig</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/our-projects">
                See our projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function GallerySection({
  id,
  eyebrow,
  icon,
  title,
  intro,
  photos,
  background,
}: {
  id: string;
  eyebrow: string;
  icon: React.ReactNode;
  title: string;
  intro: string;
  photos: Photo[];
  background: string;
}) {
  return (
    <section id={id} className={`${background} py-16 sm:py-24`}>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
            {icon}
            {eyebrow}
          </div>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4 text-sm text-muted-foreground">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
