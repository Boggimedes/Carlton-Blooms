import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Flower2, PartyPopper, Shovel, Sprout, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import volunteersGroup from "@/assets/volunteers-group.jpg";
import volunteerWatering from "@/assets/volunteer-watering.jpg";
import volunteerSoil from "@/assets/volunteer-soil.jpg";
import volunteerPlanting from "@/assets/volunteer-planting.jpg";
import kidsButterfly from "@/assets/kids-butterfly.jpg";
import kidsGravel from "@/assets/kids-gravel.jpg";
import kidsFenceArt from "@/assets/kids-fence-art.jpg";
import hawnCreekPark from "@/assets/hawn-creek-park.jpg";
import hawnCreekBeds from "@/assets/hawn-creek-beds.jpg";
import beetopiaBefore from "@/assets/beetopia-before.jpg";
import beetopiaAfter from "@/assets/beetopia-after.jpg";
import beetopiaSign from "@/assets/beetopia-sign.jpg";
import beetopiaBedsBloom from "@/assets/beetopia-beds-bloom.jpg";
import beetopiaLearningCorner from "@/assets/beetopia-learning-corner.jpg";
import beetopiaBenchMural from "@/assets/beetopia-bench-mural.jpg";
import beetopiaGardener from "@/assets/beetopia-gardener.jpg";
import fundayBooth from "@/assets/funday-booth.jpg";
import fundayButterflyBadges from "@/assets/funday-butterfly-badges.jpg";
import fundayNameVote from "@/assets/funday-name-vote.jpg";
import fundayVisionPoster from "@/assets/funday-vision-poster.jpg";
import fundayKidArt from "@/assets/funday-kid-art.jpg";
import pollinatorGreenSweatBee from "@/assets/pollinator-green-sweat-bee.jpg";
import pollinatorBumblebeeBeebalm from "@/assets/pollinator-bumblebee-beebalm.jpg";
import pollinatorBeeBlanketflower from "@/assets/pollinator-bee-blanketflower.jpg";
import pollinatorBeesSunflower from "@/assets/pollinator-bees-sunflower.jpg";
import pollinatorSunflowerCluster from "@/assets/pollinator-sunflower-cluster.jpg";
import pollinatorHairstreak from "@/assets/pollinator-hairstreak.jpg";
import pollinatorBeeCheckermallow from "@/assets/pollinator-bee-checkermallow.jpg";
import pollinatorLonghornBeetle from "@/assets/pollinator-longhorn-beetle.jpg";
import pollinatorWaspRose from "@/assets/pollinator-wasp-rose.jpg";
import pollinatorMoth from "@/assets/pollinator-moth.jpg";

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
    src: volunteersGroup,
    alt: "Carlton Pollinator Project volunteers standing together in front of the Beetopia garden beds",
    caption: "The crew that keeps it going — most of a season's work is in this photo.",
  },
  {
    src: volunteerSoil,
    alt: "A volunteer in gloves and a cap tipping a tub of soil into a raised garden bed",
    caption: "Filling the raised beds, one tub at a time.",
  },
  {
    src: volunteerPlanting,
    alt: "A volunteer setting a nursery pot into freshly turned soil in a raised bed",
    caption: "Setting the first starts into a bed that was bare gravel a month before.",
  },
  {
    src: volunteerWatering,
    alt: "A volunteer watering newly planted seedlings in a raised bed on a clear spring day",
    caption: "Watering in new plantings — the part nobody photographs, and the part that decides it.",
  },
  {
    src: kidsFenceArt,
    alt: "Two children hanging their drawings on the garden fence",
    caption: "Kids hanging their own artwork along the fence line.",
  },
  {
    src: kidsButterfly,
    alt: "A child holding a painted lady butterfly on one finger",
    caption: "A painted lady, released and in no hurry to leave.",
  },
];

const beetopiaPhotos: Photo[] = [
  {
    src: beetopiaBefore,
    alt: "Empty raised beds on bare gravel under a grey sky before planting",
    caption: "Before: three empty beds and a lot of gravel.",
  },
  {
    src: beetopiaAfter,
    alt: "The same garden two seasons later, full of poppies, lavender, and blanketflower",
    caption: "After: the same corner, two seasons on.",
  },
  {
    src: beetopiaSign,
    alt: "A hand-painted Welcome to Beetopia sign hung on the garden fence",
    caption: "The sign the neighborhood painted — and the name it voted for.",
  },
  {
    src: beetopiaBedsBloom,
    alt: "Pink clarkia spilling over the edge of a corrugated metal raised bed",
    caption: "Clarkia doing exactly what it was planted to do.",
  },
  {
    src: beetopiaLearningCorner,
    alt: "Barrel planters and interpretive signs about native bee nesting on the garden fence",
    caption: "The learning corner — nesting habitat, and signs that explain it.",
  },
  {
    src: beetopiaBenchMural,
    alt: "A children's painted mural of a meadow hung on the garden fence behind a bench",
    caption: "A bench, a barrel planter, and a mural the kids painted.",
  },
  {
    src: beetopiaGardener,
    alt: "A volunteer standing among the raised beds of the pollinator garden in full bloom",
    caption: "Midsummer, when the beds are taller than the person who planted them.",
  },
];

const parkPhotos: Photo[] = [
  {
    src: hawnCreekPark,
    alt: "The new gravel path at Hawn Creek Park, with the park sign and young trees along the lawn",
    caption: "The new path in, with the park sign at the entrance.",
  },
  {
    src: hawnCreekBeds,
    alt: "Freshly turned planting beds along the edge of the new path at Hawn Creek Park",
    caption: "Beds turned and waiting — this is where the natives go in.",
  },
];

const festivalPhotos: Photo[] = [
  {
    src: fundayBooth,
    alt: "The Carlton Pollinator Project booth at Fun Days with posters, a painted mural, and visitors",
    caption: "Our booth at Fun Days — posters, plants, and a lot of questions answered.",
  },
  {
    src: fundayNameVote,
    alt: "A hand-lettered poster asking visitors to vote on a name for the garden, with tally marks",
    caption: "How the garden got named. Beetopia won by a wide margin.",
  },
  {
    src: fundayButterflyBadges,
    alt: "A board covered in folded paper butterfly badges made by children",
    caption: "Butterfly badges — every kid who stopped by went home wearing one.",
  },
  {
    src: fundayVisionPoster,
    alt: "The Vision 2040 pollinator poster on display at the booth",
    caption: "Vision 2040: what thriving ecosystems, economies, and agriculture look like together.",
  },
  {
    src: fundayKidArt,
    alt: "Children's drawings of gardens and pollinators clipped to a fence",
    caption: "Kid art on the fence — bees, birds, and a lot of flowers.",
  },
  {
    src: kidsGravel,
    alt: "A child crouched on the garden gravel in sunglasses, playing beside the beds",
    caption: "Not every visitor comes for the plants.",
  },
];

const naturePhotos: Photo[] = [
  {
    src: pollinatorGreenSweatBee,
    alt: "A metallic green sweat bee on an orange and yellow blanketflower",
    caption: "A green sweat bee on blanketflower — native, tiny, and everywhere once you look.",
  },
  {
    src: pollinatorBumblebeeBeebalm,
    alt: "A bumblebee gripping the pink blooms of wild bee balm",
    caption: "Bumblebee on bee balm, working the whole head at once.",
  },
  {
    src: pollinatorBeeBlanketflower,
    alt: "A leafcutter bee dusted in pollen at the center of a blanketflower",
    caption: "Loaded with pollen and still going.",
  },
  {
    src: pollinatorBeesSunflower,
    alt: "Two long-horned bees on a yellow sunflower, one landing",
    caption: "Long-horned bees on a sunflower — one working, one arriving.",
  },
  {
    src: pollinatorSunflowerCluster,
    alt: "A cluster of honey bees packed onto the center of a sunflower",
    caption: "A sunflower head that ran out of room.",
  },
  {
    src: pollinatorHairstreak,
    alt: "A gray hairstreak butterfly resting on white yarrow flowers",
    caption: "Gray hairstreak on yarrow — small, and easy to walk right past.",
  },
  {
    src: pollinatorBeeCheckermallow,
    alt: "A native bee resting inside the pink petals of a checkermallow bloom",
    caption: "A native bee inside a checkermallow.",
  },
  {
    src: pollinatorLonghornBeetle,
    alt: "A golden longhorn beetle on a white cluster of oceanspray flowers",
    caption: "Beetles pollinate too — this one on oceanspray.",
  },
  {
    src: pollinatorWaspRose,
    alt: "A dark native wasp walking across the white petals of a mock orange blossom",
    caption: "A native wasp on mock orange.",
  },
  {
    src: pollinatorMoth,
    alt: "A pale moth with feathered antennae resting on a dark fence rail",
    caption: "Night shift. Moths do as much of this work as bees do.",
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
        id="beetopia"
        eyebrow="Before & after"
        icon={<Sprout className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />}
        title="Beetopia, Season by Season"
        intro="The 1st Street garden started as three empty beds on a gravel lot. Two seasons of planting later it feeds pollinators from spring through fall — and the neighborhood named it themselves."
        photos={beetopiaPhotos}
        background="bg-muted/50"
      />

      <GallerySection
        id="hawn-creek"
        eyebrow="In progress"
        icon={<Shovel className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />}
        title="Hawn Creek Pocket Park"
        intro="Our current project. The path is in and the beds are turned; the natives go in next. Come see it before it fills, so you can watch it change."
        photos={parkPhotos}
        background="bg-background"
      />

      <GallerySection
        id="festival"
        eyebrow="Out in town"
        icon={<PartyPopper className="h-3.5 w-3.5 text-goldenrod" aria-hidden="true" />}
        title="Carlton Fun Days"
        intro="Every summer we set up at Fun Days with native plants, posters, and a craft table for kids. It is where most folks meet us for the first time — and where a lot of gardens start."
        photos={festivalPhotos}
        background="bg-muted/50"
      />

      <GallerySection
        id="pollinators"
        eyebrow="Why we do it"
        icon={<Flower2 className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />}
        title="Bees, Butterflies & Gardens"
        intro="Every one of these was photographed in a Carlton garden. Native plants bring back the bees, beetles, butterflies and moths that were here first — and most of them are species you have never been told the name of."
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
