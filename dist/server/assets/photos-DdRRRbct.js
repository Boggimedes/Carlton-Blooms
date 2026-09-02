import { n as Button } from "./router-B3UYPihT.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Camera, Flower2, PartyPopper, Users } from "lucide-react";
//#region src/assets/gallery-volunteers-1.jpg
var gallery_volunteers_1_default = "/assets/gallery-volunteers-1-BTezOjAq.jpg";
//#endregion
//#region src/assets/gallery-volunteers-2.jpg
var gallery_volunteers_2_default = "/assets/gallery-volunteers-2-LrPsisTx.jpg";
//#endregion
//#region src/assets/gallery-festival-1.jpg
var gallery_festival_1_default = "/assets/gallery-festival-1-BZ7UEmgk.jpg";
//#endregion
//#region src/assets/gallery-festival-2.jpg
var gallery_festival_2_default = "/assets/gallery-festival-2-DRH4lEXB.jpg";
//#endregion
//#region src/assets/gallery-festival-3.jpg
var gallery_festival_3_default = "/assets/gallery-festival-3-BkVbiJJL.jpg";
//#endregion
//#region src/assets/gallery-nature-1.jpg
var gallery_nature_1_default = "/assets/gallery-nature-1-D-Ujjanc.jpg";
//#endregion
//#region src/assets/gallery-nature-2.jpg
var gallery_nature_2_default = "/assets/gallery-nature-2-CmoDE1KJ.jpg";
//#endregion
//#region src/assets/gallery-nature-3.jpg
var gallery_nature_3_default = "/assets/gallery-nature-3-eYg4h15y.jpg";
//#endregion
//#region src/routes/photos.tsx?tsr-split=component
var volunteerPhotos = [
	{
		src: gallery_volunteers_1_default,
		alt: "Volunteers of all ages planting native shrubs in a sunny Carlton field",
		caption: "Neighbors turning out for a spring planting day on the edge of town."
	},
	{
		src: "/assets/project-meadow-DL9d-SWK.jpg",
		alt: "Volunteers working together on a meadow restoration",
		caption: "Meadow restoration crew — every plant goes in by hand."
	},
	{
		src: gallery_volunteers_2_default,
		alt: "Two volunteers kneeling beside a newly planted pollinator bed with plant labels",
		caption: "Labeling a new pollinator bed so visitors can learn the natives."
	},
	{
		src: "/assets/project-school-Bzvm413b.jpg",
		alt: "Students and volunteers tending a school pollinator garden",
		caption: "Students taking over care of their school garden beds."
	}
];
var festivalPhotos = [
	{
		src: gallery_festival_1_default,
		alt: "Native plant display at a small-town summer festival booth",
		caption: "Our booth on Main Street — natives, seeds, and a lot of questions answered."
	},
	{
		src: gallery_festival_2_default,
		alt: "Children potting seedlings at a festival table with a volunteer helping",
		caption: "Kids potting up seedlings to take home and plant."
	},
	{
		src: gallery_festival_3_default,
		alt: "Crowds along Main Street during the Carlton Fun Days summer festival",
		caption: "Fun Days brings the whole town out — and the whole town past our table."
	}
];
var naturePhotos = [
	{
		src: gallery_nature_1_default,
		alt: "Monarch butterfly resting on a goldenrod bloom",
		caption: "Monarch on goldenrod — late-season fuel for the trip south."
	},
	{
		src: gallery_nature_2_default,
		alt: "Native bumblebee gathering pollen from a purple coneflower",
		caption: "A native bumblebee working a coneflower."
	},
	{
		src: gallery_nature_3_default,
		alt: "Backyard pollinator garden in full bloom along a gravel path",
		caption: "What a few seasons of native planting looks like in a backyard."
	}
];
function PhotosPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "flex-1",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "bg-muted py-16 sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground",
							children: [/* @__PURE__ */ jsx(Camera, {
								className: "h-3.5 w-3.5 text-sage-dark",
								"aria-hidden": "true"
							}), "Around Carlton"]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl",
							children: "Photos"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
							children: "You may have seen us in the paper, at Fun Days, or on the neighborhood feed. Here is what we actually do — the people, the places, and the pollinators."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(GallerySection, {
				id: "volunteers",
				eyebrow: "People at work",
				icon: /* @__PURE__ */ jsx(Users, {
					className: "h-3.5 w-3.5 text-sage-dark",
					"aria-hidden": "true"
				}),
				title: "Volunteers & Projects",
				intro: "Planting days, garden builds, and the neighbors who show up with gloves on. This is the heart of it: a few hours, a few dozen plants, and habitat that lasts for years.",
				photos: volunteerPhotos,
				background: "bg-background"
			}),
			/* @__PURE__ */ jsx(GallerySection, {
				id: "festival",
				eyebrow: "Out in town",
				icon: /* @__PURE__ */ jsx(PartyPopper, {
					className: "h-3.5 w-3.5 text-goldenrod",
					"aria-hidden": "true"
				}),
				title: "Carlton Fun Days",
				intro: "Every summer we set up on Main Street with native plants, seeds, and a table for kids. It is where most folks meet us for the first time — and where a lot of gardens start.",
				photos: festivalPhotos,
				background: "bg-muted/50"
			}),
			/* @__PURE__ */ jsx(GallerySection, {
				id: "pollinators",
				eyebrow: "Why we do it",
				icon: /* @__PURE__ */ jsx(Flower2, {
					className: "h-3.5 w-3.5 text-sage-dark",
					"aria-hidden": "true"
				}),
				title: "Bees, Butterflies & Gardens",
				intro: "The results, up close. Native plants bring back the bees and butterflies that were here first — and they make a yard look alive in every season.",
				photos: naturePhotos,
				background: "bg-background"
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-earth py-16 text-earth-foreground sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl font-semibold sm:text-4xl",
							children: "See a familiar face? Come join us."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-lg opacity-90",
							children: "Planting days are open to everyone, no experience needed. Bring gloves and a friend."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								variant: "secondary",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: "Join our dig"
								})
							}), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/our-projects",
									children: ["See our projects", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							})]
						})
					]
				})
			})
		]
	});
}
function GallerySection({ id, eyebrow, icon, title, intro, photos, background }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: `${background} py-16 sm:py-24`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground",
						children: [icon, eyebrow]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl",
						children: title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-lg leading-relaxed text-muted-foreground",
						children: intro
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: photos.map((photo) => /* @__PURE__ */ jsxs("figure", {
					className: "group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-shadow hover:shadow-lg",
					children: [/* @__PURE__ */ jsx("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: photo.src,
							alt: photo.alt,
							width: 1200,
							height: 900,
							loading: "lazy",
							decoding: "async",
							className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
						})
					}), /* @__PURE__ */ jsx("figcaption", {
						className: "p-4 text-sm text-muted-foreground",
						children: photo.caption
					})]
				}, photo.src))
			})]
		})
	});
}
//#endregion
export { PhotosPage as component };
