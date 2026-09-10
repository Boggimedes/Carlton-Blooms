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
import hawnCreekChannel from "@/assets/hawn-creek-channel.jpg";
import hawnCreekClearing from "@/assets/hawn-creek-clearing.jpg";
import beetopiaBefore from "@/assets/beetopia-before.jpg";
import beetopiaAfter from "@/assets/beetopia-after.jpg";
import beetopiaSign from "@/assets/beetopia-sign.jpg";
import beetopiaBedsBloom from "@/assets/beetopia-beds-bloom.jpg";
import beetopiaLearningCorner from "@/assets/beetopia-learning-corner.jpg";
import beetopiaBenchMural from "@/assets/beetopia-bench-mural.jpg";
import beetopiaGardener from "@/assets/beetopia-gardener.jpg";
import beetopiaCoreopsisBed from "@/assets/beetopia-coreopsis-bed.jpg";
import beetopiaAster from "@/assets/beetopia-aster.jpg";
import beetopiaGoldenrod from "@/assets/beetopia-goldenrod.jpg";
import beetopiaNativePlantsSign from "@/assets/beetopia-native-plants-sign.jpg";
import fundayBooth from "@/assets/funday-booth.jpg";
import fundayButterflyBadges from "@/assets/funday-butterfly-badges.jpg";
import fundayNameVote from "@/assets/funday-name-vote.jpg";
import fundayVisionPoster from "@/assets/funday-vision-poster.jpg";
import fundayKidArt from "@/assets/funday-kid-art.jpg";
import pollinatorPaintedLady from "@/assets/pollinator-painted-lady.jpg";
import pollinatorBumblebee from "@/assets/pollinator-bumblebee.jpg";
import pollinatorBeeBlanketflower from "@/assets/pollinator-bee-blanketflower.jpg";
import pollinatorBeesSunflower from "@/assets/pollinator-bees-sunflower.jpg";
import pollinatorSunflowerCluster from "@/assets/pollinator-sunflower-cluster.jpg";
import pollinatorHairstreak from "@/assets/pollinator-hairstreak.jpg";
import pollinatorBeeCheckermallow from "@/assets/pollinator-bee-checkermallow.jpg";
import pollinatorLonghornBeetle from "@/assets/pollinator-longhorn-beetle.jpg";
import pollinatorWaspRose from "@/assets/pollinator-wasp-rose.jpg";
import pollinatorMoth from "@/assets/pollinator-moth.jpg";
import pollinatorBeeCosmos from "@/assets/pollinator-bee-cosmos.jpg";
import pollinatorBeePearlyEverlasting from "@/assets/pollinator-bee-pearly-everlasting.jpg";
import pollinatorBeeCoreopsis from "@/assets/pollinator-bee-coreopsis.jpg";
import pollinatorBumblebeeOceanspray from "@/assets/pollinator-bumblebee-oceanspray.jpg";
import pollinatorHoverflyCinquefoil from "@/assets/pollinator-hoverfly-cinquefoil.jpg";

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

type Photo = { src: string; alt: string };

const volunteerPhotos: Photo[] = [
  {
    src: volunteersGroup,
    alt: "Carlton Pollinator Project volunteers standing together in front of the Beetopia garden beds",
  },
  {
    src: volunteerSoil,
    alt: "A volunteer in gloves and a cap tipping a tub of soil into a raised garden bed",
  },
  {
    src: volunteerPlanting,
    alt: "A volunteer setting a nursery pot into freshly turned soil in a raised bed",
  },
  {
    src: volunteerWatering,
    alt: "A volunteer watering newly planted seedlings in a raised bed on a clear spring day",
  },
  {
    src: kidsFenceArt,
    alt: "Two children hanging their drawings on the garden fence",
  },
  {
    src: kidsButterfly,
    alt: "A child holding a painted lady butterfly on one finger",
  },
];

const beetopiaPhotos: Photo[] = [
  {
    src: beetopiaBefore,
    alt: "Empty raised beds on bare gravel under a grey sky before planting",
  },
  {
    src: beetopiaAfter,
    alt: "The same garden two seasons later, full of poppies, lavender, and blanketflower",
  },
  {
    src: beetopiaSign,
    alt: "A hand-painted Welcome to Beetopia sign hung on the garden fence",
  },
  {
    src: beetopiaBedsBloom,
    alt: "Pink clarkia spilling over the edge of a corrugated metal raised bed",
  },
  {
    src: beetopiaLearningCorner,
    alt: "Barrel planters and interpretive signs about native bee nesting on the garden fence",
  },
  {
    src: beetopiaBenchMural,
    alt: "A children's painted mural of a meadow hung on the garden fence behind a bench",
  },
  {
    src: beetopiaGardener,
    alt: "A volunteer standing among the raised beds of the pollinator garden in full bloom",
  },
  {
    src: beetopiaCoreopsisBed,
    alt: "Coreopsis and blanketflower spilling over the edge of a corrugated metal raised bed",
  },
  {
    src: beetopiaAster,
    alt: "Pale purple aster blooms opening in the garden beds",
  },
  {
    src: beetopiaGoldenrod,
    alt: "Goldenrod in full yellow bloom above the raised beds, with yarrow behind it",
  },
  {
    src: beetopiaNativePlantsSign,
    alt: "A Native Plants Support Wild Bees sign standing in a raised bed of coreopsis and yarrow",
  },
];

const parkPhotos: Photo[] = [
  {
    src: hawnCreekPark,
    alt: "The new gravel path at Hawn Creek Park, with the park sign and young trees along the lawn",
  },
  {
    src: hawnCreekChannel,
    alt: "The creek channel running between birches at Hawn Creek Pocket Park",
  },
  {
    src: hawnCreekClearing,
    alt: "The open grassy clearing under the trees at Hawn Creek Pocket Park, before restoration planting",
  },
];

const festivalPhotos: Photo[] = [
  {
    src: fundayBooth,
    alt: "The Carlton Pollinator Project booth at Fun Days with posters, a painted mural, and visitors",
  },
  {
    src: fundayNameVote,
    alt: "A hand-lettered poster asking visitors to vote on a name for the garden, with tally marks",
  },
  {
    src: fundayButterflyBadges,
    alt: "A board covered in folded paper butterfly badges made by children",
  },
  {
    src: fundayVisionPoster,
    alt: "The Vision 2040 pollinator poster on display at the booth",
  },
  {
    src: fundayKidArt,
    alt: "Children's drawings of gardens and pollinators clipped to a fence",
  },
  {
    src: kidsGravel,
    alt: "A child crouched on the garden gravel in sunglasses, playing beside the beds",
  },
];

const naturePhotos: Photo[] = [
  {
    src: pollinatorPaintedLady,
    alt: "A painted lady butterfly with wings spread on blue gilia",
  },
  {
    src: pollinatorBumblebee,
    alt: "A bumblebee heavy with pollen on a spike of purple blooms",
  },
  {
    src: pollinatorBeeBlanketflower,
    alt: "A leafcutter bee dusted in pollen at the center of a blanketflower",
  },
  {
    src: pollinatorBeesSunflower,
    alt: "Two long-horned bees on a yellow sunflower, one landing",
  },
  {
    src: pollinatorSunflowerCluster,
    alt: "A cluster of honey bees packed onto the center of a sunflower",
  },
  {
    src: pollinatorHairstreak,
    alt: "A gray hairstreak butterfly resting on white yarrow flowers",
  },
  {
    src: pollinatorBeeCheckermallow,
    alt: "A native bee resting inside the pink petals of a checkermallow bloom",
  },
  {
    src: pollinatorLonghornBeetle,
    alt: "A golden longhorn beetle on a white cluster of oceanspray flowers",
  },
  {
    src: pollinatorWaspRose,
    alt: "A dark native wasp walking across the white petals of a mock orange blossom",
  },
  {
    src: pollinatorMoth,
    alt: "A pale moth with feathered antennae resting on a dark fence rail",
  },
  {
    src: pollinatorBeeCosmos,
    alt: "A honey bee working the yellow center of a pink cosmos flower",
  },
  {
    src: pollinatorBeePearlyEverlasting,
    alt: "A native bee on the white woolly blooms of pearly everlasting",
  },
  {
    src: pollinatorBeeCoreopsis,
    alt: "A pollen-covered bee on a yellow and red coreopsis bloom",
  },
  {
    src: pollinatorBumblebeeOceanspray,
    alt: "A black bumblebee with a yellow band feeding on a spray of oceanspray flowers",
  },
  {
    src: pollinatorHoverflyCinquefoil,
    alt: "A striped hoverfly on the yellow star-shaped bloom of a cinquefoil",
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
        intro="Planting days, garden builds, and neighbors who show up with gloves on. This is the heart of it: a few hours, several dozen plants and a habitat grows to bring life, beauty and joy."
        photos={volunteerPhotos}
        background="bg-background"
      />

      <GallerySection
        id="beetopia"
        eyebrow="Before & after"
        icon={<Sprout className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />}
        title="Beetopia, Season by Season"
        intro="Six empty beds on a gravel lot met a handful of neighbors determined to bring the 1st Street garden into being. It now can support pollinators through the seasons — our community named it “Beetopia” during its opening at Fun Days 2026."
        photos={beetopiaPhotos}
        background="bg-muted/50"
      />

      <GallerySection
        id="hawn-creek"
        eyebrow="In progress"
        icon={<Shovel className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />}
        title="Hawn Creek Pocket Park"
        intro="A quiet pocket park on South 7th Street is our first habitat restoration project. Partnering with local conservation agencies we hold a vision to see this area turn into a native plant sanctuary for pollinators and wildlife."
        photos={parkPhotos}
        background="bg-background"
      />

      <GallerySection
        id="festival"
        eyebrow="Out in town"
        icon={<PartyPopper className="h-3.5 w-3.5 text-goldenrod" aria-hidden="true" />}
        title="Carlton Fun Days"
        intro="This year we set up at Fun Days for our grand opening with free native plants, pollinator info, name the garden event, a scavenger hunt and butterfly badges. We got a warm reception from our wonderful community."
        photos={festivalPhotos}
        background="bg-muted/50"
      />

      <GallerySection
        id="pollinators"
        eyebrow="Why we do it"
        icon={<Flower2 className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />}
        title="Bees, Butterflies & Gardens"
        intro="All these photos are from the Beetopia garden. Native plants bring back the bees, beetles, butterflies and moths that were here first — the Oregon Bee Atlas has documented 567 native species of bees alone, with evidence of nearly 200 additional species that have yet to be documented."
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
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
